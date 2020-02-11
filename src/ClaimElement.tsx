import React from 'react';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects, Score, Messenger, Change, Type } from "@reasonscore/core";
import EditorElement from './EditorElement';

const commonmark: any = require('commonmark');

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
    messenger: Messenger,
};

type MyState = {
    childrenVisible: boolean,
    editorVisible: boolean,
    addMode: boolean,
    score: Score,
    claim: Claim,
    childClaimEedges: ClaimEdge[],
    claimEdge?: ClaimEdge,
};

class ClaimElement extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            childrenVisible: this.props.claimEdge ? false : true,
            editorVisible: false,
            addMode: false,
            score: new Score(),
            claim: new Claim(),
            childClaimEedges: [],
            claimEdge: this.props.claimEdge,
        };

        const awaitScore = this.props.repository.getScoreBySourceClaimId(this.props.claimId)
        const awaitClaim = this.props.repository.getItem(this.props.claimId)
        const awaitChildClaimEedges = this.props.repository.getClaimEdgesByParentId(this.props.claimId)
        Promise.all([awaitScore, awaitClaim, awaitChildClaimEedges]).then((values) => {
            let newState: any = {}
            newState.score = values[0];
            if (values[1]) {
                newState.claim = values[1]
            }
            newState.childClaimEedges = values[2];
            this.setState(newState);
        });

        this.props.messenger.subscribe(this.handleDataDispatch)
    }

    componentWillUnmount() {
        this.props.messenger.unsubscribe(this.handleDataDispatch)
    }

    handleDataDispatch = async (changes: Change[]) => {
        for (const change of changes) {
            const { newItem } = change;
            let newState: any = {}
            if (newItem.id === this.props.claimId && newItem.type === Type.claim) {
                const claim = newItem as Claim;
                newState.claim = claim;
            }
            if (newItem.type === Type.score) {
                const score = newItem as Score;
                if (score.sourceClaimId === this.props.claimId) {
                    newState.score = score;
                }
            }
            if (this.state.claimEdge && newItem.id === this.state.claimEdge.id && newItem.type === Type.claimEdge) {
                const claimEdge = newItem as ClaimEdge;
                newState.claimEdge = claimEdge;
            }
            //Check for changes to child edges
            if (newItem.type === Type.claimEdge) {
                const claimEdge = newItem as ClaimEdge;
                if (claimEdge.parentId === this.props.claimId) {
                    const ChildClaimEedges = await this.props.repository.getClaimEdgesByParentId(this.props.claimId)
                    newState.childClaimEedges = ChildClaimEedges;
                }
            }
            this.setState(newState);
        }
    }

    handleExpanderClick = () => {
        this.setState({
            childrenVisible: !this.state.childrenVisible
        });
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
        if (!score) { score = new Score() } //ToDo: Review this line
        const claim = this.state.claim;
        const claimEdge = this.state.claimEdge;
        const childClaimEedges = this.state.childClaimEedges;
        let proMain = props.proMainContext;
        let scoreText = `${Math.round(score.confidence * 100)}%`
        if (claimEdge) {
            if (!claimEdge.pro) {
                proMain = !proMain;
            }
            if (claimEdge.affects === Affects.Relevance) {
                scoreText = `×${(score.relevance + 1).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
            } else {
                scoreText = `${Math.round(score.confidence * score.relevance * 100)}`
            }
        }

        //Prioritize the children for the display order
        let childClaimEedgesSorted = childClaimEedges;
        if (childClaimEedges.length > 1) {
            childClaimEedgesSorted = childClaimEedges.sort((a, b) => {
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
                <div className={'claim ' + proMainText} >
                    <div className={'editor-button'} onClick={this.handleEditButtonClick}><svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 48 48" width="15"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /><path d="M0 0h48v48h-48z" fill="none" /></svg></div>
                    <div className={'add-button'} onClick={this.handleAddButtonClick}>+</div>
                    {childClaimEedges.length > 0 &&
                        <div className={"expander" + (this.state.childrenVisible ? " expanded" : " collapsed")} onClick={this.handleExpanderClick} >
                            &#9701;
                    </div>
                    }
                    <div className={'claim-inner'}>
                        <span className={`score`}>
                            {scoreText}
                        </span>
                        <span dangerouslySetInnerHTML={createMarkup()}>
                        </span>
                    </div>
                </div>
                {this.state.editorVisible &&
                    <EditorElement
                        claimId={claim.id}
                        repository={props.repository}
                        calculationInitator={props.calculationInitator}
                        claimEdge={this.state.claimEdge}
                        proMainContext={this.state.addMode ? proMain : props.proMainContext}
                        handleEditClose={this.handleEditClose}
                        messenger={props.messenger}
                        new={this.state.addMode}
                    />}

                {this.state.childrenVisible &&
                    <ul className="children">
                        {childClaimEedges.length > 0 && childClaimEedgesSorted.map((child) => (
                            <li key={child.childId.toString()}>
                                <ClaimElement
                                    claimId={child.childId}
                                    repository={props.repository}
                                    calculationInitator={props.calculationInitator}
                                    claimEdge={child}
                                    proMainContext={proMain}
                                    messenger={props.messenger}
                                />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

export default ClaimElement;