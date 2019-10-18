import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Repository, CalculationInitator, Change, Claim, ClaimEdge, ID, Affects } from "@reasonscore/core";


//ReactDOM.render(<App />, document.getElementById('root'));

const claims = document.getElementsByTagName('claim');
const repo = new Repository();
const calcInitator = new CalculationInitator(repo);
const measuredClaim = new Claim(
  "Measured Claim", ID("measuredClaim"));
const childClaim = new Claim("Child Claim", ID("childClaim"));
const descendantClaim = new Claim("Descendant Claim", ID("descendantClaim"));
calcInitator.notify([
  new Change(measuredClaim),
  new Change(childClaim),
  new Change(descendantClaim),
  new Change(new ClaimEdge(measuredClaim.id, childClaim.id, Affects.Confidence, false)),
  new Change(new ClaimEdge(childClaim.id, descendantClaim.id, Affects.Confidence, false)),
]);

for (const claim of claims) {
  ReactDOM.render(<App
    claimId={claim.getAttribute('claimId')}
    repository={repo}
    CalculationInitator={CalculationInitator}
  />, claim);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
