import React, { Component } from 'react';
//import Editor from './Editor';
//import ClaimInner from './ClaimInner';
//import { CSSTransitionGroup } from 'react-transition-group';
import { Repository, CalculationLooper, Change, Claim, ClaimEdge, ID } from "@reasonscore/core";


class ClaimElement extends Component {
    constructor(props) {
        super(props);
        this.score = props.Repository.getScoreBySourceClaimId(props.claimId)
        this.claim = props.Repository.getItem(props.claimId)
        //const calcInitator = props.calcInitator;
    }

    render() {
        return (
            <div className={'claim-outer'}>
                {this.props.claimId} | {this.claim.content} | {this.score.confidence}
            </div>
        );
    }
}

export default ClaimElement;