import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Repository, CalculationInitator, Change, Claim, ClaimEdge, ID, Affects } from "@reasonscore/core";


//ReactDOM.render(<App />, document.getElementById('root'));
// Generate Data (Might need to move to)
const repo = new Repository();
const calculationInitator = new CalculationInitator(repo);
const measuredClaim = new Claim("Measured Claim", ID("measuredClaim"));
const childClaim1 = new Claim("Child Claim 1", ID("childClaim1"));
const childClaim2 = new Claim("Child Claim 2", ID("childClaim2"));
const childClaim3 = new Claim("Child Claim 3", ID("childClaim3"));
const descendantClaim1 = new Claim("Descendant Claim 1", ID("descendantClaim1"));
const descendantClaim2 = new Claim("Descendant Claim 2", ID("descendantClaim2"));
calculationInitator.notify([
  new Change(measuredClaim),
  new Change(childClaim1),
  new Change(childClaim2),
  new Change(childClaim3),
  new Change(descendantClaim1),
  new Change(descendantClaim2),
  new Change(new ClaimEdge(measuredClaim.id, childClaim1.id, Affects.Confidence, false)),
  new Change(new ClaimEdge(measuredClaim.id, childClaim2.id, Affects.Confidence, true)),
  new Change(new ClaimEdge(measuredClaim.id, childClaim3.id, Affects.Confidence, false)),
  new Change(new ClaimEdge(childClaim1.id, descendantClaim1.id, Affects.Confidence, false)),
  new Change(new ClaimEdge(childClaim1.id, descendantClaim2.id, Affects.Confidence, true)),
]);


//Connect to the HTML
const claims = document.getElementsByTagName('rs-claim');
for (const claim of claims) { 
    const possibleClaimId = claim.getAttribute('claimId');
    let claimId = ID("");
    if (possibleClaimId){
        claimId = ID(possibleClaimId);
    }
  ReactDOM.render(<App
    claimId={claimId}
    repository={repo}
    calculationInitator={calculationInitator}
  />, claim);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
