import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Repository, CalculationInitator, Change, Claim, ID, Messenger, RsData } from "@reasonscore/core";

declare global {
  interface Window {
    db: any;
  }
}

//ReactDOM.render(<App />, document.getElementById('root'));
// Generate Data (Might need to move to)
const repo = new Repository();
const messenger = new Messenger();
const calculationInitator = new CalculationInitator(repo, messenger.notify);

window.db.doc("rsData").get().then((doc: any) => {
  if (doc.exists) {
    repo.rsData = doc.data();
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
        messenger={messenger}
      />, claim);
    }
  } else {
    // Create a new RsData object with empty claims
    repo.rsData = new RsData();
    //Connect to the HTML
    const claims = document.getElementsByTagName('rs-claim');
    for (const claim of claims) {
      const possibleClaimId = claim.getAttribute('claimId');
      let claimId = ID("");
      if (possibleClaimId) {
        claimId = ID(possibleClaimId);
      }

      //Create the new claim
      calculationInitator.notify([
        new Change(
          new Claim("New Claim", claimId)
        ),
      ]).then((doc: any) => {

        ReactDOM.render(<App
          claimId={claimId}
          repository={repo}
          calculationInitator={calculationInitator}
          messenger={messenger}
        />, claim);
      });
    }
  }
}).catch(function (error: any) {
  console.log("Error getting document:", error);
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
