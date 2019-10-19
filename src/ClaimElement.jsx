import React, { Component } from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
//import { Repository, CalculationInitator, Change, Claim, ClaimEdge, ID } from "@reasonscore/core";


class ClaimElement extends Component {
    constructor(props) {
        super(props);
        this.score = props.repository.getScoreBySourceClaimId(props.claimId)
        this.claim = props.repository.getItem(props.claimId)
        this.childClaimEedges = props.repository.getClaimEdgesByParentId(props.claimId)
        //const calcInitator = props.calcInitator;
        this.polarity = this.props.polarityContext;
        if (this.props.claimEdge !== undefined && this.props.claimEdge.pro === false ) {
            this.polarity = !this.polarity;
        } else {
            //this.polarity = false;
        }
        this.pro = this.props.claimEdge !== undefined && (this.props.claimEdge.pro ? "pro" : "con") + " | "
    }

    render() {
        return (
            <div className={'claim-outer'}>
                ({this.polarity ? "pro" : "con"}) |&nbsp;
                {this.pro}
                {this.score.confidence} | {this.claim.content}
                <ul>
                    {this.childClaimEedges.length > 0 && this.childClaimEedges.map((child) => (
                        <li key={child.childId}>
                            <ClaimElement
                                claimId={child.childId}
                                repository={this.props.repository}
                                calculationInitator={this.props.calculationInitator}
                                claimEdge={child}
                                polarityContext={this.polarity}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClaimElement;