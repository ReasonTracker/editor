import React, { Component } from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';


class ClaimElement extends Component {
    constructor(props) {
        super(props);
        this.score = props.repository.getScoreBySourceClaimId(props.claimId)
        this.claim = props.repository.getItem(props.claimId)
        this.childClaimEedges = props.repository.getClaimEdgesByParentId(props.claimId)
        this.proMain = this.props.polarityContext;
        if (this.props.claimEdge && !this.props.claimEdge.pro) {
            this.proMain = !this.proMain;
        }
        this.proMainText = this.proMain ? "pro" : "con";
        this.proParentText = this.props.claimEdge && (this.props.claimEdge.pro ? "pro" : "con");
    }

    render() {
        return (
            <div className={'claim-outer'}>
                ({this.proMainText}) |&nbsp;
                {this.proParentText} |&nbsp;
                {this.score.confidence} |&nbsp;
                {this.claim.content}
                <ul>
                    {this.childClaimEedges.length > 0 && this.childClaimEedges.map((child) => (
                        <li key={child.childId}>
                            <ClaimElement
                                claimId={child.childId}
                                repository={this.props.repository}
                                calculationInitator={this.props.calculationInitator}
                                claimEdge={child}
                                polarityContext={this.proMain}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClaimElement;