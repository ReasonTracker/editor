import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Messenger, calculateScoreActions, Action, Claim, ClaimEdge, ScoreTree } from "@reasonscore/core";

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

  //TODO: Temp
    const u = undefined, pro = true, con = false
    window.RsActions = [
      new Action(new Claim("Top Claim", "topTestClaim"), u, "add_claim"),
      new Action(new Claim("Child Claim 1", "ChildClaim1"), u, "add_claim"),
      new Action(new Claim("Child Claim 2", "ChildClaim2"), u, "add_claim"),
      new Action(new Claim("Child Claim 3", "ChildClaim3"), u, "add_claim"),
      new Action(new Claim("Grandchild Claim 1", "grandChild1"), u, "add_claim"),
      new Action(new Claim("Grandchild Claim 2", "grandChild2"), u, "add_claim"),
      new Action(new Claim("Grandchild Claim 3", "grandChild3"), u, "add_claim"),
      new Action(new ClaimEdge("topTestClaim", "ChildClaim1", u, pro, "ChildClaim1Edge"), u, "add_claimEdge"),
      new Action(new ClaimEdge("topTestClaim", "ChildClaim2", u, pro, "ChildClaim2Edge"), u, "add_claimEdge"),
      new Action(new ClaimEdge("topTestClaim", "ChildClaim3", u, con, "ChildClaim3Edge"), u, "add_claimEdge"),
      new Action(new ClaimEdge("ChildClaim1", "grandChild1", u, pro, "GrandChildClaim1Edge"), u, "add_claimEdge"),
      new Action(new ClaimEdge("ChildClaim1", "grandChild2", u, pro, "GrandChildClaim2Edge"), u, "add_claimEdge"),
      new Action(new ClaimEdge("ChildClaim1", "grandChild3", u, con, "GrandChildClaim3Edge"), u, "add_claimEdge"),
      new Action(new ScoreTree("topTestClaim", "testTopScore", u, "ScoreTree"), undefined, "add_scoreTree"),
    ]

  //Populate the Reporsitory
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
