import React from 'react';
import { RepositoryLocalPure, Claim, Score, Messenger, iScore, Action, iClaimEdge } from "@reasonscore/core";
import EditorElement from './EditorElement';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const commonmark: any = require('commonmark');

type MyProps = {
    scoreId: string,
    repository: RepositoryLocalPure,
    proMainContext: boolean,
    messenger: Messenger,
    settings: any,
};

type MyState = {
    childrenVisible: boolean,
    editorVisible: boolean,
    addMode: boolean,
    score: iScore,
    claim: Claim,
    childScores: iScore[],
    claimEdge?: iClaimEdge,
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
        const score = await this.props.repository.getScore(this.props.scoreId);
        let claim = new Claim();
        let childrenVisible = this.state.childrenVisible;
        if (score) {
            let claimEdge: iClaimEdge | undefined;
            if (score.sourceEdgeId) {
                claimEdge = await this.props.repository.getClaimEdge(score.sourceEdgeId)
            }
            const claimResult = await this.props.repository.getClaim(score.sourceClaimId);
            const childScores = await this.props.repository.getChildrenByScoreId(score.id);
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
        this.expandChildrenSetup()
    }

    expandChildrenSetup() {
        //Set up the click event to open the children outside React so it can be used with an embed without javascript code
        const expanderElement = window.document.getElementById("expander-" + (this.state.score.id));
        expanderElement?.setAttribute("onClick", `window.RsExpandChildren('${this.state.score.id}');`);
    }

    componentDidUpdate() {
        this.expandChildrenSetup()
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

    // // Removed, handled outside react
    // handleExpanderClick = () => {
    //     this.setState({
    //         childrenVisible: !this.state.childrenVisible
    //     });
    // }

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
        let scoreText = `${Math.round(score.confidence * 100)}%`
        if (score) {
            if (!score.pro) {
                proMain = !proMain;
            }
            if (score.affects === "relevance") {
                scoreText = `×${(score.relevance + 1).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
            } else {
                scoreText = `${Math.round(score.confidence * score.relevance * 100)}`
            }
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

        //Commonmark
        function createMarkup() {
            var reader = new commonmark.Parser({});
            var writer = new commonmark.HtmlRenderer({ safe: true });
            var parsed = reader.parse(claim.content);
            return { __html: writer.render(parsed) };
        }

        return (
            <div className={'claim-outer'}>
                <div className={'claim-hider'}>
                    <div className={'claim ' + proMainText} >
                        <div className={'editor-button'} onClick={this.handleEditButtonClick}><svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 48 48" width="15"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /><path d="M0 0h48v48h-48z" fill="none" /></svg></div>
                        <div className={'add-button'} onClick={this.handleAddButtonClick}>+</div>
                        {childScores.length > 0 &&
                            <div id={"expander-" + (this.state.score.id)} className={"expander" + (this.state.childrenVisible ? " expanded" : " collapsed")} >&#9701;</div>
                        }
                        <div className={'claim-inner'}>
                            <div className="lines">
                                <div className="lines-circle-container" >
                                    <div className="lines-circle" style={{ left: score.confidence * 100 + "%" }}></div>
                                </div>
                                <div className="lines-inner"></div>

                            </div>
                            <span className={`numbers`}>
                                {scoreText}
                            </span>
                            <span dangerouslySetInnerHTML={createMarkup()}>
                            </span>
                        </div>
                        <div className="callout">
                            <svg viewBox="0 0 5.2917 5.2917">
                                <g transform="translate(0 -291.71)">
                                    <path d="m5.2596 296.97c-3.5372 0.01-3.8232-1.627-3.7822-2.3863 2.1037 0.0877 1.0388-2.9299 1.8472-2.8364 0 0-0.51702 4.0991 1.935 5.2227z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
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