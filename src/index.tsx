import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Messenger, RsData, calculateScoreActions, Action, Score, Claim } from "@reasonscore/core";

declare global {
  interface Window {
    RsDatabase: any,
    RsActions: Action[],
    RsSettings: any,
  }
}

const repository = new RepositoryLocalPure();
const messenger = new Messenger();
if (window.RsDatabase) {
  window.RsDatabase.doc("rsData").get().then((doc: any) => {
    if (doc.exists) {
      repository.rsData = doc.data();

      const u = undefined;
      const scoreElements = document.getElementsByTagName('rs-score');
      for (const scoreElement of scoreElements) {
        const possibleScoreId = scoreElement.getAttribute('score-Id');
        let scoreId = "";
        if (possibleScoreId) {
          scoreId = possibleScoreId;
        }
        //re-calculate scores in case there were changes in the algorithm or if scores are not stored
        calculateScoreActions({
          actions: [
            new Action(new Score("Yk3JDShDv0lm", "Yk3JDShDv0lm", u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
          ], repository
        }).then(async (updatedScores: any) => {
          await repository.notify(updatedScores);
          ReactDOM.render(<App
            scoreId={scoreId}
            repository={repository}
            messenger={messenger}
            settings={window.RsSettings}
          />, scoreElement);
        });
      }
    } else {
      noDbSetup();
    }
  }).catch(function (error: any) {
    console.log("Error getting document:", error);
  });
} else {
  noDbSetup();
}

function noDbSetup() {
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

    if (!window.RsActions) {
      const u = undefined;

      const topClaim = new Claim("New Claim", "topClaim")
      window.RsActions = [
        new Action(topClaim, u, "add_claim"),
        new Action(new Score(topClaim.id, topClaim.id, u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
      ]

      //const pro = true;
      //const con = false;
      // const topClaim = new Claim("Should Fiction City convert Elm Street to only pedestrian traffic?", "topClaim")
      // const Claim1_0 = new Claim("The planning commission estimates this will increase foot traffic to local shops by 12% during peak hours.")
      // const Claim1_1 = new Claim("The increase in revenue is expected to pay off the expense in under 2 years meeting the cities investment requirements.")
      // const Claim2_0 = new Claim("This will result in traffic being diverted down residential streets.")
      // const Claim2_1 = new Claim("Children safety is more important than profit for local shops.")
      // const Claim2_2 = new Claim("A set of railroad tracks are no longer in use and the City can convert that to a new street.")
      // const Claim3_0 = new Claim("The conversion will cost 2 Million dollars.")
      // window.RsActions = [
      //   new Action(topClaim, u, "add_claim"),
      //   new Action(Claim1_0, u, "add_claim"),
      //   new Action(Claim1_1, u, "add_claim"),
      //   new Action(Claim2_0, u, "add_claim"),
      //   new Action(Claim2_1, u, "add_claim"),
      //   new Action(Claim2_2, u, "add_claim"),
      //   new Action(Claim3_0, u, "add_claim"),
      //   new Action(new ClaimEdge(topClaim.id, Claim1_0.id, u, pro), u, "add_claimEdge"),
      //   new Action(new ClaimEdge(Claim1_0.id, Claim1_1.id, "relevance", pro), u, "add_claimEdge"),
      //   new Action(new ClaimEdge(topClaim.id, Claim2_0.id, u, con), u, "add_claimEdge"),
      //   new Action(new ClaimEdge(Claim2_0.id, Claim2_1.id, "relevance", con), u, "add_claimEdge"),
      //   new Action(new ClaimEdge(Claim2_0.id, Claim2_2.id, u, con), u, "add_claimEdge"),
      //   new Action(new ClaimEdge(topClaim.id, Claim3_0.id, u, con), u, "add_claimEdge"),
      //   new Action(new Score(topClaim.id, topClaim.id, u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
      // ]
    }
    //debugger

    calculateScoreActions({
      actions: window.RsActions, repository
    }).then(async (updatedScores: any) => {
      //await repository.notify(updatedScores);
      ReactDOM.render(<App
        scoreId={scoreId}
        repository={repository}
        messenger={messenger}
        settings={window.RsSettings}
      />, scoreElement);
    });
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
