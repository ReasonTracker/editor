import React from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects, Score, Messenger, Change, Type } from "@reasonscore/core";
import EditorElement from './EditorElement';

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
            score: this.props.repository.getScoreBySourceClaimId(this.props.claimId),
            claim: this.props.repository.getItem(this.props.claimId) as Claim || new Claim(),
            childClaimEedges: this.props.repository.getClaimEdgesByParentId(this.props.claimId),
            claimEdge: this.props.claimEdge,
        };

        this.props.messenger.subscribe(this.handleDataDispatch)
    }

    handleDataDispatch = (changes: Change[]) => {
        for (const change of changes) {
            const { newItem } = change;
            let newState : any = {}
            if (newItem.id === this.props.claimId && newItem.type === Type.claim) {
                const claim = newItem as Claim;
                newState.claim = claim;
            }
            if (newItem.id === this.state.score.id && newItem.type === Type.score) {
                const score = newItem as Score;
                newState.score = score;
            }
            if (this.state.claimEdge && newItem.id === this.state.claimEdge.id && newItem.type === Type.claimEdge) {
                const claimEdge = newItem as ClaimEdge;
                newState.claimEdge = claimEdge;
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
            editorVisible: !this.state.editorVisible
        });
    }

    handleEditCancel = () => {
        this.setState({
            editorVisible: false
        });
    }

    render() {
        const props = this.props;
        const score = this.state.score;
        const claim = this.state.claim;
        const childClaimEedges = this.state.childClaimEedges;
        let proMain = props.proMainContext;
        let scoreText = `${Math.round(this.state.score.confidence * 100)}%`
        if (this.state.claimEdge) {
            if (!this.state.claimEdge.pro) {
                proMain = !proMain;
            }
            if (this.state.claimEdge.affects === Affects.Relevance) {
                scoreText = `×${(score.relevance + 1).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
            } else {
                scoreText = `${Math.round(score.confidence * score.relevance * 100)}`
            }
        }

        const proMainText = proMain ? "pro" : "con";

        return (
            <div className={'claim-outer'}>
                <div className={'claim ' + proMainText} >
                    <div className={'editor-button'} onClick={this.handleEditButtonClick}>E</div>
                    {childClaimEedges.length > 0 &&
                        <div className={"expander" + (this.state.childrenVisible ? " expanded" : " collapsed")} onClick={this.handleExpanderClick} >
                            &#9701;
                    </div>
                    }
                    <div className={'claim-inner'}>
                        <span className={`score`}>
                            {scoreText}
                        </span>
                        <span>
                            {claim.content}
                        </span>
                    </div>
                </div>
                {this.state.editorVisible &&
                    <EditorElement
                        claimId={claim.id}
                        repository={props.repository}
                        calculationInitator={props.calculationInitator}
                        claimEdge={this.state.claimEdge}
                        proMainContext={proMain}
                        handleEditCancel={this.handleEditCancel}
                        messenger={props.messenger}
                    />}
                {this.state.childrenVisible &&
                    <ul className="children">
                        {childClaimEedges.length > 0 && childClaimEedges.map((child) => (
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