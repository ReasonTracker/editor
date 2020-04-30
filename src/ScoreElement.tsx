import React from 'react';
import { RepositoryLocalPure, Score, Messenger, Action, ScoreTree, selectNode } from "@reasonscore/core";
import EditorElement from './EditorElement';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ClaimEdge } from './dataModels/ClaimEdge';
import { Claim } from './dataModels/Claim';

const commonmark: any = require('commonmark');

type MyProps = {
    scoreId: string,
    repository: RepositoryLocalPure,
    proMainContext: boolean,
    messenger: Messenger,
    settings: any,
    scoreTree: ScoreTree,
};

type MyState = {
    childrenVisible: boolean,
    editorVisible: boolean,
    addMode: boolean,
    score: Score,
    claim: Claim,
    childScores: Score[],
    claimEdge?: ClaimEdge,
};

class ScoreElement extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            childrenVisible: false,
            editorVisible: false,
            addMode: false,
            score: new Score("", ""),
            claim: new Claim(),
            childScores: [],
            claimEdge: undefined,
        };


    }

    async componentDidMount() {
        const score = await this.props.repository.getScore(this.props.scoreId) as Score;
        let claim = new Claim() as Claim;
        //TODO: Figure out how to remove Children Visible completely
        let childrenVisible = this.state.childrenVisible;
        if (score) {
            let claimEdge: ClaimEdge | undefined;
            if (score.sourceEdgeId) {
                claimEdge = await this.props.repository.getClaimEdge(score.sourceEdgeId) as ClaimEdge
            }
            const claimResult = await this.props.repository.getClaim(score.sourceClaimId);
            const childScores = await this.props.repository.getChildrenByScoreId(score.id) as Score[];
            if (!score.parentScoreId && !this.props.settings.startClosed) {
                childrenVisible = true;
            }
            if (claimResult) {
                claim = claimResult as Claim;
            }
            this.setState({
                score: score,
                claim: claim,
                childScores: childScores,
                childrenVisible: childrenVisible,
                claimEdge: claimEdge
            });
        }
        this.props.messenger.subscribe(this.handleDataDispatch)
        this.handleChildrenVisible1()
    }

    handleChildrenVisible1 = () => {
        if (this.state.childrenVisible) {
            const expander2 = window.document.getElementById("expander2-" + this.state.score.id) as HTMLInputElement;
            expander2.checked = true
        }
    }

    handleChildrenVisible = (e: React.FormEvent<HTMLInputElement>) => {
        const selectedNodes = selectNode(this.state.score.id, this.props.repository.rsData);
        const expander2s = window.document.getElementsByClassName('expander2') as HTMLCollectionOf<HTMLInputElement>;
        for (const expander2 of expander2s) {
            const expander3 = window.document.getElementById(expander2.id.replace("expander2", "expander3")) as HTMLInputElement;
            // TODO: Find feels very slow here. Should it be a dictionairy
            const selectedNode = selectedNodes.find(e => e.itemId === expander2.id.substring(10, 100))
            if (selectedNode) {
                if (selectedNode.status === `selected`) {
                    expander2.checked = true;
                    expander3.checked = true;
                } else if (selectedNode.status === `ancestor`) {
                    expander2.checked = false;
                    expander3.checked = true;
                } else {
                    expander2.checked = false;
                    expander3.checked = false;
                }
            } else {
                expander2.checked = false;
                expander3.checked = false;
            }
        }
    }

    componentDidUpdate() {
        this.handleChildrenVisible1()
    }

    componentWillUnmount() {
        this.props.messenger.unsubscribe(this.handleDataDispatch)
    }

    handleDataDispatch = async (actions: Action[]) => {
        for (const change of actions) {
            const { newData, type, dataId, oldData } = change;
            let newState: any = {}
            if (type === "modify_claim" && dataId === this.state.claim.id) {
                newState.claim = { ...this.state.claim, ...newData };
            }

            if (type === "modify_claimEdge" && this.state.claimEdge && dataId === this.state.claimEdge.id) {
                newState.claimEdge = { ...this.state.claimEdge, ...newData };
            }

            if (type === "delete_claimEdge" && oldData.parentId === this.state.claim.id) {
                newState.childScores = await this.props.repository.getChildrenByScoreId(this.state.score.id);
            }

            if (type === "modify_score" && dataId === this.state.score.id) {
                newState.score = { ...this.state.score, ...newData };
            }

            if (type === "add_score" && newData.parentScoreId === this.state.score.id) {
                if (this.state.childrenVisible === false) {
                    newState.childrenVisible = true;
                }
                const childScores = await this.props.repository.getChildrenByScoreId(this.state.score.id);
                newState.childScores = childScores;
            }

            this.setState(newState);
        }
    }

    handleEditButtonClick = () => {
        this.setState({
            editorVisible: !this.state.editorVisible,
            addMode: false,
        });
    }

    handleAddButtonClick = () => {
        this.setState({
            addMode: true,
            editorVisible: !this.state.editorVisible
        });
    }

    handleEditClose = () => {
        this.setState({
            editorVisible: false
        });
    }

    render() {
        const props = this.props;
        let score = this.state.score;
        const claim = this.state.claim;
        const childScores = this.state.childScores;
        let proMain = props.proMainContext;
        let scoreNumbers = `${Math.round(score.confidence * 100)}%`
        const settings = this.props.settings;

        //Score Numbers
        let scoreImpact = score.confidence;
        if (score) {
            if (!score.pro) {
                proMain = !proMain;
            }
            if (!score.reversible && score.confidence < 0) {
                scoreImpact = 0;
            }
            if (score.affects === "relevance") {
                scoreNumbers = score.pro ? "X" : "÷";
                scoreNumbers += `${(score.relevance + 1).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
            } else {
                scoreNumbers = `${Math.round(scoreImpact * score.relevance * 100)}`
            }
        }

        //Score Description
        let scoreDescription = "";
        if (settings.scoreDescriptions) {
            if (score.affects === "relevance") {
                scoreDescription = "Importance";
                if (score.pro) {
                    scoreDescription = "Increases " + scoreDescription;
                } else {
                    scoreDescription = "Decreases " + scoreDescription;
                }
            } else {
                let descriptions, trailing
                if (score.parentScoreId === undefined) {
                    descriptions = settings.scoreDescriptions.result
                    trailing = "";
                } else {
                    descriptions = settings.scoreDescriptions.impact
                    trailing = proMain ? " Pro" : " Con";
                }
                for (const descItem of descriptions) {
                    if (score.confidence * score.relevance >= descItem.min) {
                        scoreDescription = descItem.desc;
                    }
                }
                scoreDescription += trailing;
            }
        }
        if (!childScores.length) {
            scoreDescription = "Assumed, " + scoreDescription
        }

        //Prioritize the children for the display order
        //TODO: move score sorting to the repository to reduce duplicate processing
        let childScoresSorted = childScores;
        if (childScores.length > 1) {
            childScoresSorted = childScores.sort((a, b) => {
                if ((a.priority === undefined || a.priority === "") && (b.priority === undefined || b.priority === "")) {
                    return 0;
                }
                if ((a.priority === undefined || a.priority === "")) {
                    return 1;
                }
                if ((b.priority === undefined || b.priority === "")) {
                    return -1;
                }
                if (a.priority > b.priority) {
                    return 1;
                }
                if (a.priority < b.priority) {
                    return -1;
                }
                return 0;
            });

        }

        const proMainText = proMain ? "pro" : "con";

        let fractionalizedScore = Math.abs(
            ((score.fraction * 100) - ((1 - score.confidence) * score.fraction * 100))
        ).toFixed(0);
        if (fractionalizedScore === "100") fractionalizedScore = "99";
        let sign;
        if (score.parentScoreId === undefined) {
            if (score.confidence < 0) sign = "-";
            else sign = "-";
        } else {
            sign = proMain ? "+" : "-";
        }

        function createMarkup() {
            var reader = new commonmark.Parser({});
            var writer = new commonmark.HtmlRenderer({ safe: true });
            var parsed = reader.parse(claim.content);
            var html: string = writer.render(parsed)
            //Add target="_blank"
            html = html.replace(/href="/g, ' target="_blank" rel="noopener noreferrer"  href="');
            // rel="noopener noreferrer" due to security vulnerability https://www.jitbit.com/alexblog/256/
            return { __html: html };
        }

        return (
            <div className={'claim-outer'}>
                <input id={"expander2-" + score.id} type="checkbox" className="expander2" onChange={this.handleChildrenVisible}></input>
                <input id={"expander3-" + score.id} type="checkbox" className="expander3"></input>
                <div className={'claim-hider'}>
                    <div className={'claim ' + proMainText} >
                        {childScores.length > 0 &&
                            <div id={"expander-" + (this.state.score.id)} className={"expander" + (this.state.childrenVisible ? " expanded" : " collapsed")} >
                                <svg width="20px" height="20px">
                                    <use href="#expander" />
                                </svg>
                            </div>
                        }
                        <div className={'claim-inner'}>
                            <div className="lines">
                                <div className="lines-inner">
                                    <svg className="lines-pointer" style={{ left: scoreImpact * 100 + "%" }} height="20" width="20" viewBox="0 0 10 10">
                                        <path d="m 0,1.3 a 10,10 0 0 1 10,0 L 5,10 Z" />
                                    </svg>
                                    <span className="min">{claim.labelMin}</span>
                                    <span className="mid">{claim.labelMid}</span>
                                    <span className="max">{claim.labelMax}</span>
                                    <div className="tic" style={{ left: '0%' }}></div>
                                    <div className="tic" style={{ left: '33.3%' }}></div>
                                    <div className="tic" style={{ left: '66.6%' }}></div>
                                    <div className="tic" style={{ left: '100%' }}></div>
                                </div>
                            </div>
                            <label htmlFor={"expander2-" + score.id} className={'numbers'}
                                title={scoreDescription + ' based on ' + this.state.score.descendantCount + ' claims'}>
                                <span className="number">
                                    <span className="sign">{sign}</span>
                                    {fractionalizedScore}
                                </span>
                                {score.parentScoreId === undefined && "%"}
                            </label>
                            <span className={'score-description'}
                                title={scoreNumbers + '% confidence based on ' + this.state.score.descendantCount + ' claims'}>
                                {scoreDescription}
                                {this.state.score.descendantCount > 0 &&
                                    <sub title={'based on ' + this.state.score.descendantCount + ' claims'}> {this.state.score.descendantCount}</sub>
                                }
                            </span>
                            <span className={'content'} dangerouslySetInnerHTML={createMarkup()}></span>
                            <label className="more-info" htmlFor={"expander2-" + score.id} >
                                More info&hellip;
                            </label>
                        </div>
                        <svg className="callout" width="30px" height="30px">
                            <use href="#callout" />
                        </svg>
                    </div>
                </div>
                <div className="scoreInfo">
                    {scoreDescription + ' based on ' + this.state.score.descendantCount + ' claims'}
                    <span className="editable">
                    <button onClick={this.handleEditButtonClick} className="btn-inline" >edit this claim</button>
                    <button onClick={this.handleAddButtonClick} className="btn-inline" >add a pro or con</button></span>
                </div>
                <CSSTransition in={this.state.editorVisible} timeout={490} classNames="editor">
                    <div>
                        {this.state.editorVisible &&
                            <EditorElement
                                claimId={claim.id}
                                repository={props.repository}
                                claimEdge={this.state.claimEdge}
                                proMainContext={this.state.addMode ? proMain : props.proMainContext}
                                handleEditClose={this.handleEditClose}
                                messenger={props.messenger}
                                new={this.state.addMode}
                            />
                        }
                    </div>
                </CSSTransition>
                <ul id={"children-" + (this.state.score.id)} className={'children ' + (this.state.childrenVisible ? '' : 'hide')}>
                    <TransitionGroup component={null}>
                        {childScores.length > 0 && childScoresSorted.map((child) => (
                            <CSSTransition
                                key={child.id}
                                timeout={5000}
                                classNames='score'>
                                <li key={child.id}>
                                    <ScoreElement
                                        scoreId={child.id}
                                        repository={props.repository}
                                        proMainContext={proMain}
                                        messenger={props.messenger}
                                        settings={props.settings}
                                        scoreTree={props.scoreTree}
                                    />
                                </li>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        );
    }
}

export default ScoreElement;