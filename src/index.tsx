import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Repository, CalculationInitator, Change, Claim, ID, Messenger } from "@reasonscore/core";


//ReactDOM.render(<App />, document.getElementById('root'));
// Generate Data (Might need to move to)
const repo = new Repository();
const messenger = new Messenger();
const calculationInitator = new CalculationInitator(repo,messenger.notify);
const topClaim = new Claim("Should we build the infiniteTransit flyway?",ID("Yk3JDShDv0lm"));
topClaim.reversible = true;
calculationInitator.notify([
  new Change(topClaim),
]);

//Connect to the HTML
const claims = document.getElementsByTagName('rs-claim');
for (const claim of claims) {
  const possibleClaimId = claim.getAttribute('claimId');
  let claimId = ID("");
  if (possibleClaimId) {
    claimId = ID(possibleClaimId);
  }
  ReactDOM.render(<App
    claimId={claimId}
    repository={repo}
    calculationInitator={calculationInitator}
    messenger = {messenger}
  />, claim);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
