import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Messenger, calculateScoreActions, Action} from "@reasonscore/core";
// import { Claim, ClaimEdge, ScoreTree } from "@reasonscore/core";

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
  const settings = window.RsSettings;

  let doc

  if (settings.dbCollection === null) {
    settings.dbCollection = "rsData"
  }

  // //TODO: This is for easy testing for now
  // const u = undefined, pro = true, con = false
  // window.RsActions = [
  //   new Action(new Claim('mainClaim', 'mainClaim'), u, 'add_claim'), new Action(new ScoreTree('mainClaim', 'mainClaim-score', u, 'ScoreTree'), u, 'add_scoreTree'),
  //   new Action(new Claim('01', '01'), u, 'add_claim'), new Action(new ClaimEdge('mainClaim', '01', u, con, '01-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('02', '02'), u, 'add_claim'), new Action(new ClaimEdge('mainClaim', '02', u, pro, '02-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('02-1', '02-1'), u, 'add_claim'), new Action(new ClaimEdge('02', '02-1', u, pro, '02-1-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('02-2', '02-2'), u, 'add_claim'), new Action(new ClaimEdge('02', '02-2', u, con, '02-2-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('02-3', '02-3'), u, 'add_claim'), new Action(new ClaimEdge('02', '02-3', u, pro, '02-3-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('03', '03'), u, 'add_claim'), new Action(new ClaimEdge('mainClaim', '03', u, pro, '03-edge'), u, 'add_claimEdge'),
  //   new Action(new Claim('04', '04'), u, 'add_claim'), new Action(new ClaimEdge('mainClaim', '04', u, pro, '04-edge'), u, 'add_claimEdge'),
  // ]

  //Populate the Repository
  if (window.RsDatabase) {
    doc = await window.RsDatabase.doc(settings.dbCollection).get()
  }
  if (doc && doc.exists) {
    repository.rsData = doc.data();
  } else if (window.RsActions) {
    await repository.notify(window.RsActions)
    settings.DbNotAvailable = true;
  }

  //Look in the HTML to see what we need to prep
  //Loop through the html scores and start an app for each
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
        actions: [new Action(scoreTree, undefined, "add_scoreTree")],
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
startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
