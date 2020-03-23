import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RepositoryLocalPure, Claim, Messenger, RsData, Score } from "@reasonscore/core";

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
    //repository.rsData = new RsData();

    repository.rsData = {
      "actionsLog": [],
      "claims": {
        "testClaim": {
          "content": "Test Claim",
          "id": "testClaim",
          "reversible": false,
          "type": "claim"
        },
        "ChildClaim1": {
          "content": "Child Claim",
          "id": "ChildClaim1",
          "reversible": false,
          "type": "claim"
        }
      },
      "claimEdges": {
        "ChildClaim1Edge": {
          "parentId": "testClaim",
          "childId": "ChildClaim1",
          "affects": "confidence",
          "pro": false,
          "id": "ChildClaim1Edge",
          "priority": "",
          "type": "claimEdge"
        }
      },
      "claimEdgeIdsByParentId": {
        "testClaim": [
          "ChildClaim1Edge"
        ]
      },
      "claimEdgeIdsByChildId": {
        "ChildClaim1": [
          "ChildClaim1Edge"
        ]
      },
      "scores": {
        "Yk3JDShDv0lm": {
          "sourceClaimId": "testClaim",
          "reversible": true,
          "pro": true,
          "affects": "confidence",
          "confidence": -.5,
          "relevance": 1,
          "id": "Yk3JDShDv0lm"
        },
        "Y7D1nhOyKfgd": {
          "sourceClaimId": "ChildClaim1",
          "parentScoreId": "Yk3JDShDv0lm",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y7D1nhOyKfgd"
        }
      },
      "scoreIdsByClaimId": {
        "testClaim": [
          "Yk3JDShDv0lm"
        ],
        "ChildClaim1": [
          "Y7D1nhOyKfgd"
        ]
      },
      "childIdsByScoreId": {
        "Yk3JDShDv0lm": [
          "Y7D1nhOyKfgd"
        ]
      }
    }

    //Connect to the HTML
    const scoreElements = document.getElementsByTagName('rs-score');
    for (const scoreElement of scoreElements) {
      const possibleScoreId = scoreElement.getAttribute('score-Id');
      let scoreId = "";
      if (possibleScoreId) {
        scoreId = possibleScoreId;
      }

      // //Create the new claim
      // const newClaim = new Claim("New Claim")
      // calculateScoreActions({
      //   actions: [
      //     new Action(newClaim, undefined, "add_claim", newClaim.id),
      //     new Action(
      //       new Score(newClaim.id,undefined,undefined, undefined, undefined,undefined,undefined,scoreId),
      //        undefined, "add_score", scoreId)
      //   ], repository
      // }).then((doc: any) => {
        ReactDOM.render(<App
          scoreId={scoreId}
          repository={repository}
          messenger={messenger}
        />, scoreElement);
      // });
    }
  }
}).catch(function (error: any) {
  console.log("Error getting document:", error);
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
