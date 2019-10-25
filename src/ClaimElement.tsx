import React from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects, Score } from "@reasonscore/core";
import EditorElement from './EditorElement';

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
};

type MyState = {
    childrenVisible: boolean,
    editorVisible: boolean,
    score: Score,
    claim: Claim,
    childClaimEedges: ClaimEdge[],
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
        };
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
        if (props.claimEdge) {
            if (!props.claimEdge.pro) {
                proMain = !proMain;
            }
            if (props.claimEdge.affects === Affects.Relevance) {
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
                        claimEdge={props.claimEdge}
                        proMainContext={proMain}
                        handleEditCancel={this.handleEditCancel}
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