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
};

class ClaimElement extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        //count: 0
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
                ({proMainText}) |&nbsp;
                {score.confidence} |&nbsp;
                {claim.content}
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