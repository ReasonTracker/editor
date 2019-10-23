import React from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects } from "@reasonscore/core";

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
};

type MyState = {
    //count: number; // like this
    childrenVisible: boolean
};

class ClaimElement extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        //count: 0
        childrenVisible: false
    };

    handleExpanderClick = () => {
        this.setState({
            childrenVisible: !this.state.childrenVisible
        });
    }

    render() {
        const props = this.props;
        const score = props.repository.getScoreBySourceClaimId(props.claimId);
        const claim = props.repository.getItem(props.claimId) as Claim || new Claim();
        const childClaimEedges = props.repository.getClaimEdgesByParentId(props.claimId)
        let proMain = props.proMainContext;
        let scoreText = `${Math.round(score.confidence * 100)}%`
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

                <div className={'claim ' + proMainText}>
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
                <ul className="children" style={{
                    maxHeight: this.state.childrenVisible ? childClaimEedges.length * 300 + 'px' : '0'
                }}>
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
            </div>
        );
    }
}

export default ClaimElement;