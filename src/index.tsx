import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Messenger, RsData, calculateScoreActions, Action, Score, Claim} from "@reasonscore/core";

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

    
    const u = undefined;
    if (!window.RsActions){
      window.RsActions = [
        new Action(new Claim("New Claim", "topClaim"), u, "add_claim"),
        new Action(new Score("topClaim", "topClaim", u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
      ]
    }
    
    calculateScoreActions({
      actions: window.RsActions, repository
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
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
