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
const topClaim = new Claim("Fiction City should convert Elm Street to only pedestrian traffic?",ID("1"));
const increaseBusiness = new Claim("The planning commission estimates this will increase foot traffic to local shops by 12% during peak hours.",ID("2"));
const increaseTraffic = new Claim("This will result in traffic being diverted down residential streets.");
const childSafety = new Claim("Children safety is more important than profit for local shops.");
const newStreet = new Claim("A set of railroad tracks are no longer in use and the City can convert that to a new street.");
const costs = new Claim("The conversion will cost 2 Million dollars.");
const payoff = new Claim("The increase in revenue is expected to pay off the expense in under 2 years meeting the cities investment requirements.");

calculationInitator.notify([
  new Change(topClaim),
  new Change(increaseBusiness),
  new Change(new ClaimEdge(topClaim.id, increaseBusiness.id, Affects.Confidence, true)),
  new Change(increaseTraffic),
  new Change(new ClaimEdge(topClaim.id, increaseTraffic.id, Affects.Confidence, false)),
  new Change(childSafety),
  new Change(new ClaimEdge(increaseTraffic.id, childSafety.id, Affects.Relevance, true)),
  new Change(newStreet),
  new Change(new ClaimEdge(increaseTraffic.id, newStreet.id, Affects.Confidence, false)),
  new Change(costs),
  new Change(new ClaimEdge(topClaim.id, costs.id, Affects.Confidence, false)),
  new Change(payoff),
  new Change(new ClaimEdge(increaseBusiness.id, payoff.id, Affects.Relevance, true)),
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
  />, claim);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
