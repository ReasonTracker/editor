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
        this.children = props.repository.getClaimEdgesByParentId(props.claimId)
        //const calcInitator = props.calcInitator;
    }

    render() {
        return (
            <div className={'claim-outer'}>
                {this.score.confidence} | {this.claim.content}
                <ul>
                    {this.children.length > 0 && this.children.map((child) => (
                        <li>
                            <ClaimElement
                                claimId={child.childId}
                                repository={this.props.repository}
                                calculationInitator={this.props.calculationInitator}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClaimElement;