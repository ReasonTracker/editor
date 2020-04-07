import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Messenger, RsData, calculateScoreActions, Action, Score, Claim, ScoreTree } from "@reasonscore/core";

declare global {
  interface Window {
    RsDatabase: any,
    RsActions: Action[],
    RsSettings: any,
  }
}

async function startApp() {
  const repository = new RepositoryLocalPure();
  const messenger = new Messenger();
  let doc

  //Populate the Reporsitory
  if (window.RsDatabase) {
    doc = await window.RsDatabase.doc("rsData").get()
  }
  if (doc && doc.exists) {
    repository.rsData = doc.data();
  } else if (window.RsActions) {
    repository.notify(window.RsActions)
  } else {
    window.RsSettings.DbNotAvailable = true;
  }

  //Look in the HTML to see what we need to prep
  //Loop through the html scores and start an app for each
  {
    const scoreElements = document.getElementsByTagName('rs-score');
    for (const scoreElement of scoreElements) {
      const possibleScoreId = scoreElement.getAttribute('score-tree-Id');
      let scoreTreeId = "";
      if (possibleScoreId) {
        scoreTreeId = possibleScoreId;
      }

      //TODO: Check if the scoreTree, Score and Claim exist. If not, create them
      const scoreTree = await repository.getScoreTree(scoreTreeId)
      if (scoreTree) {
        await calculateScoreActions({
          actions: [new Action(scoreTree,undefined,"add_scoreTree")],
          repository,
        })
      }

      ReactDOM.render(<App
        scoreTreeId={scoreTreeId}
        repository={repository}
        messenger={messenger}
        settings={window.RsSettings}
      />, scoreElement);

    }
  }


}
startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
