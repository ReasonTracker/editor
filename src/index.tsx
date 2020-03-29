import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Claim, Messenger, RsData, Score, calculateScoreActions, Action, ClaimEdge } from "@reasonscore/core";

declare global {
  interface Window {
    db: any;
  }
}

const repository = new RepositoryLocalPure();
const messenger = new Messenger();

window.db.doc("rsData").get().then((doc: any) => {
  if (doc.exists) {
    repository.rsData = doc.data();
    //Connect to the HTML
    const scoreElements = document.getElementsByTagName('rs-score');
    for (const scoreElement of scoreElements) {
      const possibleScoreId = scoreElement.getAttribute('score-Id');
      let scoreId = "";
      if (possibleScoreId) {
        scoreId = possibleScoreId;
      }
      ReactDOM.render(<App
        scoreId={scoreId}
        repository={repository}
        messenger={messenger}
      />, scoreElement);
    }
  } else {
    // Create a new RsData object with an empty claim
    repository.rsData = new RsData();

    //Connect to the HTML
    const scoreElements = document.getElementsByTagName('rs-score');
    for (const scoreElement of scoreElements) {
      const possibleScoreId = scoreElement.getAttribute('score-Id');
      let scoreId = "";
      if (possibleScoreId) {
        scoreId = possibleScoreId;
      }

      //Create the new claim
      const u = undefined;
      calculateScoreActions({
        actions: [
          new Action(new Claim("Top Claim", "topClaim"), u, "add_claim"),
          new Action(new Claim("Child Claim 1", "ChildClaim1"), u, "add_claim"),
          new Action(new Claim("Child Claim 2", "ChildClaim2"), u, "add_claim"),
          new Action(new Claim("GrandChild Claim1", "grandChild1"), u, "add_claim"),
          new Action(new ClaimEdge("topClaim", "ChildClaim1", u, false, "ChildClaim1Edge"), u, "add_claimEdge"),
          new Action(new ClaimEdge("topClaim", "ChildClaim2", u, true, "ChildClaim2Edge"), u, "add_claimEdge"),
          new Action(new ClaimEdge("ChildClaim1", "grandChild1", u, false, "GrandChildClaim1Edge"), u, "add_claimEdge"),
          new Action(new Score("topClaim", "topClaim", u, u, u, u, u, 0, u, "newScore"), u, "add_score"),
        ], repository
      }).then(async (updatedScores: any) => {
        await repository.notify(updatedScores);
        ReactDOM.render(<App
          scoreId={scoreId}
          repository={repository}
          messenger={messenger}
        />, scoreElement);
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
