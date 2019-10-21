import React from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id } from "@reasonscore/core";

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
};

type MyState = {
    //count: number; // like this
    visible: boolean
};

class ClaimElement extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        //count: 0
        visible: false
    };

    render() {
        const props = this.props;
        const score = props.repository.getScoreBySourceClaimId(props.claimId);
        const claim = props.repository.getItem(props.claimId) as Claim || new Claim();
        const childClaimEedges = props.repository.getClaimEdgesByParentId(props.claimId)
        let proMain = props.proMainContext;
        if (props.claimEdge && !props.claimEdge.pro) {
            proMain = !proMain;
        }
        const proMainText = proMain ? "pro" : "con";
        return (
            <div className={'claim-outer'}>

                {childClaimEedges.length > 0 &&
                    <div className={"expander" + (this.state.visible ? " expanded" : " collapsed")}  >
                        &#9701;
                </div>
                }

                <div className={'claim ' + proMainText}>
                    <div className={'claim-inner'}>
                        <span className={`score`}>
                            {score.confidence}
                        </span>
                        <span>
                            {claim.content}
                        </span>
                    </div>
                </div>
                <ul>
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