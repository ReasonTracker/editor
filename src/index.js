import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Repository, CalculationInitator, Change, Claim, ClaimEdge, ID, Affects } from "@reasonscore/core";


//ReactDOM.render(<App />, document.getElementById('root'));

const claims = document.getElementsByTagName('rs-claim');
const repo = new Repository();
const calculationInitator = new CalculationInitator(repo);
const measuredClaim = new Claim("Measured Claim", ID("measuredClaim"));
const childClaim1 = new Claim("Child Claim 1", ID("childClaim1"));
//const childClaim2 = new Claim("Child Claim 2", ID("childClaim2"));
const descendantClaim = new Claim("Descendant Claim", ID("descendantClaim"));
calculationInitator.notify([
  new Change(measuredClaim),
  new Change(childClaim1),
  //new Change(childClaim2),
  new Change(descendantClaim),
  new Change(new ClaimEdge(measuredClaim.id, childClaim1.id, Affects.Confidence, false)),
  //new Change(new ClaimEdge(measuredClaim.id, childClaim2.id, Affects.Confidence, true)),
  new Change(new ClaimEdge(childClaim1.id, descendantClaim.id, Affects.Confidence, false)),
]);

for (const claim of claims) {
  ReactDOM.render(<App
    claimId={claim.getAttribute('claimId')}
    repository={repo}
    calculationInitator={calculationInitator}
  />, claim);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
