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
    //repository.rsData = new RsData();

    // //TODO: remove this data conversion
    // const originalData = doc.data();
    // for (const ver in originalData.versions) {
    //   const item = originalData.versions[ver]
    //   if (item.end === "3000-01-01T00:00:00.000Z") {
    //     if (item.type === "claim" && item.id !== "Y9TIxXxIpytT") {
    //       repository.notify([new Action(
    //         new Claim(item.content, item.id, item.reversible), undefined, "add_claim"
    //       )])
    //     }
    //     if (item.type === "claimEdge" && item.childId !== "Y9TIxXxIpytT") {
    //       repository.notify([new Action(
    //         new ClaimEdge(item.parentId, item.childId, item.affects, item.pro, item.id, item.priority), undefined, "add_claimEdge"
    //       )])
    //     }
    //   }
    // }

    // const scoreElements = document.getElementsByTagName('rs-score');
    // for (const scoreElement of scoreElements) {
    //   const possibleScoreId = scoreElement.getAttribute('score-Id');
    //   let scoreId = "";
    //   if (possibleScoreId) {
    //     scoreId = possibleScoreId;
    //   }

    //   const u = undefined;
    //   calculateScoreActions({
    //     actions: [
    //       new Action(new Score("Yk3JDShDv0lm", "Yk3JDShDv0lm", u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
    //     ], repository
    //   }).then(async (updatedScores: any) => {
    //     await repository.notify(updatedScores);
    //     ReactDOM.render(<App
    //       scoreId={scoreId}
    //       repository={repository}
    //       messenger={messenger}
    //     />, scoreElement);
    //   });


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
    const tempRsData: any = {
      "actionsLog": [
        [
          {
            "newData": {
              "parentId": "Y9TfKgNVeWfs",
              "childId": "Y9T41tcAuiFT",
              "affects": "confidence",
              "pro": true,
              "id": "Y9T41tcPxgYu",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9T41tcPxgYu"
          }
        ],
        [
          {
            "newData": {
              "content": "New intermodal, sub-shipping-container standards are being used.",
              "id": "Y9T41tcAuiFT",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9T41tcAuiFT"
          }
        ],
        [
          {
            "newData": {
              "content": "Upgrade Costs are $___.",
              "id": "Y9TFgrefra73",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFgrefra73"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFgrefra73",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFgrefupoq",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFgrefupoq"
          }
        ],
        [
          {
            "newData": {
              "content": "Pauseway Costs are $___.",
              "id": "Y9TFjpl8AcGf",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFjpl8AcGf"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFjpl8AcGf",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFjpld7i3Y",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFjpld7i3Y"
          }
        ],
        [
          {
            "newData": {
              "content": "Flyway Costs are $___.",
              "id": "Y9TFE5FYCgNl",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFE5FYCgNl"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFE5FYCgNl",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFE5F0K0FH",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFE5F0K0FH"
          }
        ],
        [
          {
            "newData": {
              "content": "Places Costs are $___.",
              "id": "Y9TFoeyfkJzQ",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFoeyfkJzQ"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFoeyfkJzQ",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFoeyiYh6m",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFoeyiYh6m"
          }
        ],
        [
          {
            "newData": {
              "content": "Operations Costs are $___.",
              "id": "Y9TFrXhEKC3C",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFrXhEKC3C"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFrXhEKC3C",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFrXhm1sEQ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFrXhm1sEQ"
          }
        ],
        [
          {
            "newData": {
              "content": "Ride Style Costs are $___.",
              "id": "Y9TFxkO5qIqD",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TFxkO5qIqD"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TInryY9ZP1",
              "childId": "Y9TFxkO5qIqD",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TFxkOIm3lp",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TFxkOIm3lp"
          }
        ],
        [
          {
            "newData": {
              "content": "The Overall Costs are reasonable.",
              "id": "Y9TInryY9ZP1",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TInryY9ZP1"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwrnKbeEy2J",
              "childId": "Y9TInryY9ZP1",
              "affects": "confidence",
              "pro": false,
              "id": "Y9TInryH9YRE",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TInryH9YRE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwU4YhLrHhi",
              "childId": "YcwuSRkXdQ4q",
              "affects": "confidence",
              "pro": false,
              "id": "YcwuSRjByl0V",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwuSRjByl0V"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles costs are reasonable at $______ in total.",
              "id": "YcwuSRkXdQ4q",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwuSRkXdQ4q"
          }
        ],
        [
          {
            "newData": {
              "content": "The Overall Impact on the community is healthy.",
              "id": "Y9THYvSjQzlt",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THYvSjQzlt"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwrnKbeEy2J",
              "childId": "Y9THYvSjQzlt",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THYvSqwPew",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THYvSqwPew"
          }
        ],
        [
          {
            "newData": {
              "content": "Overall, the Flyway supports Business by lowering the financial and administrative costs of transportation of people and goods.",
              "id": "Y9TF30kibmU5",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TF30kibmU5"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TIgyROLnx6",
              "childId": "Y9TF30kibmU5",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TF30kQhSu8",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TF30kQhSu8"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TIgyROLnx6",
              "childId": "Y9TEIdq9R9sB",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TEIdqMGRyY",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TEIdqMGRyY"
          }
        ],
        [
          {
            "newData": {
              "content": "Overall, the Flyway supports Recreational Activities by increasing the accessibility for all people.",
              "id": "Y9TEIdq9R9sB",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TEIdq9R9sB"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZNVsATvNN",
              "childId": "Y9TGy49itihF",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TG5APIKaSs",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TG5APIKaSs"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THGf7ZPbu2",
              "childId": "Ycx0iEXq9xoW",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THbOMY2O7F",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THbOMY2O7F"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THMxb0Bzuc",
              "childId": "Y9TGy49itihF",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TGy492vxFR",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TGy492vxFR"
          }
        ],
        [
          {
            "newData": {
              "content": "• Appropriate School activities are available to Students",
              "id": "Y9TGy49itihF",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TGy49itihF"
          }
        ],
        [
          {
            "newData": {
              "content": "For Adolescents...",
              "id": "Y9THMxb0Bzuc",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THMxb0Bzuc"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THMxb0Bzuc",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THMxbDj1yX",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THMxbDj1yX"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THQNrAgNMM",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THQNrpo74z",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THQNrpo74z"
          }
        ],
        [
          {
            "newData": {
              "content": "For Children...",
              "id": "Y9THQNrAgNMM",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THQNrAgNMM"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THGf7ZPbu2",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THGf7o6Ie1",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THGf7o6Ie1"
          }
        ],
        [
          {
            "newData": {
              "content": "For Adults...",
              "id": "Y9THGf7ZPbu2",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THGf7ZPbu2"
          }
        ],
        [
          {
            "newData": {
              "content": "\nFor the Elderly...",
              "id": "Y9THCbLLA2bj",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THCbLLA2bj"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THCbLLA2bj",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THCbLQV0MK",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THCbLQV0MK"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THxiUg3Kmc",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THxiUzqgKS",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THxiUzqgKS"
          }
        ],
        [
          {
            "newData": {
              "content": "\nOn the Environment...",
              "id": "Y9THxiUg3Kmc",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THxiUg3Kmc"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9THYvSjQzlt",
              "childId": "Y9THpGwTiBHE",
              "affects": "confidence",
              "pro": true,
              "id": "Y9THpGwirriI",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9THpGwirriI"
          }
        ],
        [
          {
            "newData": {
              "content": "\nOther impacts on the Overall Community...",
              "id": "Y9THpGwTiBHE",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9THpGwTiBHE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwrnKbeEy2J",
              "childId": "Y9TI7BmGwz0M",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TI7BmxxxIo",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TI7BmxxxIo"
          }
        ],
        [
          {
            "newData": {
              "content": "The Overall Effects are technologically feasible.",
              "id": "Y9TI7BmGwz0M",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TI7BmGwz0M"
          }
        ],
        [
          {
            "newData": {
              "content": "The Overall Effects are desirable as a Common good.",
              "id": "Y9TIgyROLnx6",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TIgyROLnx6"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwrnKbeEy2J",
              "childId": "Y9TIgyROLnx6",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TIgyR7x8ID",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TIgyR7x8ID"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZNVsATvNN",
              "childId": "Ycx0iEXq9xoW",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZH9JA46iW",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZH9JA46iW"
          }
        ],
        [
          {
            "newData": {
              "content": "• Appropriate employment is more accessible to Residents(1).",
              "id": "Ycx0iEXq9xoW",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0iEXq9xoW"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9UgVY4AGr7W",
              "childId": "Y9TJF8IQDkMs",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TJF8IcKUnx",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TJF8IcKUnx"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9TJF8IQDkMs",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TJF8IQDkMs"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9TJVX1bnnDR",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TJVX1bnnDR"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TK8oO0uaDV",
              "childId": "Y9TJVX1bnnDR",
              "affects": "confidence",
              "pro": false,
              "id": "Y9TJVX1kWysP",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TJVX1kWysP"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwnBzqmzaNi",
              "childId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TKxsQYa3Fp",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TKxsQYa3Fp"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9TJZrzuAYW4",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TJZrzuAYW4"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx1g9OKDUUO",
              "childId": "Ycx19cye5Xyw",
              "affects": "confidence",
              "pro": false,
              "id": "Ycx19cy5G7Wv",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx19cy5G7Wv"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway costs are reasonable.",
              "id": "Ycx19cye5Xyw",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx19cye5Xyw"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9UgVY4AGr7W",
              "childId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "affects": "confidence",
              "pro": true,
              "id": "Y9UgJaGTrYix",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9UgJaGTrYix"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.2",
              "id": "Y9TK74YNQCmH",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TK74YNQCmH"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9TKbfW43fkb",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TKbfW43fkb"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9TKgOAjZUUg",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TKgOAjZUUg"
          }
        ],
        [
          {
            "newData": {
              "content": "",
              "id": "Y9TKtuN2qlRR",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TKtuN2qlRR"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwqvyTjYnxt",
              "childId": "Ycwq20poMoPU",
              "affects": "confidence",
              "pro": false,
              "id": "Ycwq20oYam0l",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwq20oYam0l"
          }
        ],
        [
          {
            "newData": {
              "content": "Maintenance costs: $___",
              "id": "Ycwq20poMoPU",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwq20poMoPU"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwU4YhLrHhi",
              "childId": "Y9TLlAsPn0SI",
              "affects": "confidence",
              "pro": false,
              "id": "Y9TLlAsLsCVz",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TLlAsLsCVz"
          }
        ],
        [
          {
            "newData": {
              "content": "Other issues about Rides Styles",
              "id": "Y9TLlAsPn0SI",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TLlAsPn0SI"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTTLYmc4SE",
              "childId": "Y9TcaDTTNiJw",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TcaDTmDeTG",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TcaDTmDeTG"
          }
        ],
        [
          {
            "newData": {
              "content": "New zoning and revenue collection methods in each Place are technologically feasible.",
              "id": "Y9TcaDTTNiJw",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TcaDTTNiJw"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTTLYmc4SE",
              "childId": "Y9TcgUvGR6LW",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TcgUvJ4wHg",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TcgUvJ4wHg"
          }
        ],
        [
          {
            "newData": {
              "content": "The Places become more desirable with increased amenities.",
              "id": "Y9TcgUvGR6LW",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TcgUvGR6LW"
          }
        ],
        [
          {
            "newData": {
              "content": "The impact of amenity saturated Places is healthy for the community.",
              "id": "Y9TbSxEkr0xI",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TbSxEkr0xI"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTTLYmc4SE",
              "childId": "Y9TbSxEkr0xI",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TbSxE9fAwG",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TbSxE9fAwG"
          }
        ],
        [
          {
            "newData": {
              "content": "Zoning Changes within 5000' radius are changed which will cost $___.",
              "id": "Y9TcYmCtm1iM",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TcYmCtm1iM"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TdhXWy50Qt",
              "childId": "Y9TcYmCtm1iM",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TcYmCLr4vt",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TcYmCLr4vt"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TdhXWy50Qt",
              "childId": "Y9TcIgyQ2ZHn",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TcIgyyNXoT",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TcIgyyNXoT"
          }
        ],
        [
          {
            "newData": {
              "content": "Revenue collecting system, from buildings occupying the above-ground commons, will cost $___.",
              "id": "Y9TcIgyQ2ZHn",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TcIgyQ2ZHn"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTTLYmc4SE",
              "childId": "Y9TdhXWy50Qt",
              "affects": "confidence",
              "pro": false,
              "id": "Y9TdhXW9ZAJv",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TdhXW9ZAJv"
          }
        ],
        [
          {
            "newData": {
              "content": "The costs to adapt Places is reasonable @ $____.",
              "id": "Y9TdhXWy50Qt",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TdhXWy50Qt"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TeYlSlUprf",
              "childId": "Y9TdJ1HVW2nV",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TdJ1H3XbM4",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TdJ1H3XbM4"
          }
        ],
        [
          {
            "newData": {
              "content": "For Adolescents...",
              "id": "Y9TdJ1HVW2nV",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TdJ1HVW2nV"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TePaPJOYwx",
              "childId": "Y9Te9uZYt1vG",
              "affects": "confidence",
              "pro": true,
              "id": "Y9Te9uZGqOdJ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9Te9uZGqOdJ"
          }
        ],
        [
          {
            "newData": {
              "content": "More specializations of work accommodate higher-quality production, increasing the relevance of the community in a global marketplace.",
              "id": "Y9Te9uZYt1vG",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9Te9uZYt1vG"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9Tf6kJon28e",
              "childId": "Y9TdtyNBg7Ki",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TdtyNmcBDy",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TdtyNmcBDy"
          }
        ],
        [
          {
            "newData": {
              "content": "For Adolescents...",
              "id": "Y9TdtyNBg7Ki",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TdtyNBg7Ki"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9Tf6kJon28e",
              "childId": "Y9TeYlSlUprf",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TeYlS6Vst0",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TeYlS6Vst0"
          }
        ],
        [
          {
            "newData": {
              "content": "For Children...",
              "id": "Y9TeYlSlUprf",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TeYlSlUprf"
          }
        ],
        [
          {
            "newData": {
              "content": "For businesses, the Pauseway supports entrepreneurial shops which can be rented, which supports new amenity testing to validate community desired amenities in each Place.",
              "id": "Y9TePaPJOYwx",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TePaPJOYwx"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgvzAGlUyN",
              "childId": "Y9TePaPJOYwx",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TePaP7h5Yx",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TePaP7h5Yx"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTEwq0tQaS",
              "childId": "Y9Tf6kJon28e",
              "affects": "confidence",
              "pro": true,
              "id": "Y9Tf6kJjfLuI",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9Tf6kJjfLuI"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseway's impact on the community is healthy.",
              "id": "Y9Tf6kJon28e",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9Tf6kJon28e"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTEwq0tQaS",
              "childId": "Y9TfKgNVeWfs",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TfKgNWUXEm",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TfKgNWUXEm"
          }
        ],
        [
          {
            "newData": {
              "content": "Building the Pauseways is technologically feasible using a design competition, followed by a developer turn-key construction process.",
              "id": "Y9TfKgNVeWfs",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TfKgNVeWfs"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgM3n4FauF",
              "childId": "Y9TfTvvSVxlW",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TfTvvCvufC",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TfTvvCvufC"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseway Maintenance costs are $___.",
              "id": "Y9TfTvvSVxlW",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TfTvvSVxlW"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgM3n4FauF",
              "childId": "Y9TfYKKX7ZsM",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TfYKKosiuv",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TfYKKosiuv"
          }
        ],
        [
          {
            "newData": {
              "content": "The goods distribution center costs are $____.",
              "id": "Y9TfYKKX7ZsM",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TfYKKX7ZsM"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseway Pavillion costs are $____.",
              "id": "Y9Tg4mGfFPes",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9Tg4mGfFPes"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgM3n4FauF",
              "childId": "Y9Tg4mGfFPes",
              "affects": "confidence",
              "pro": true,
              "id": "Y9Tg4mFdaNqu",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9Tg4mFdaNqu"
          }
        ],
        [
          {
            "newData": {
              "content": "The Plaza Costs are $____. ",
              "id": "Y9TgeP4jEcUR",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TgeP4jEcUR"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgM3n4FauF",
              "childId": "Y9TgeP4jEcUR",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TgeP46Y2g9",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TgeP46Y2g9"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTEwq0tQaS",
              "childId": "Y9TgM3n4FauF",
              "affects": "confidence",
              "pro": false,
              "id": "Y9TgM3n4UrmX",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TgM3n4UrmX"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseway costs are reasonable @ $___.",
              "id": "Y9TgM3n4FauF",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TgM3n4FauF"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Y9TgM3n4FauF",
              "childId": "Y9TgogYk4fwW",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TgogYlMDpH",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TgogYlMDpH"
          }
        ],
        [
          {
            "newData": {
              "content": "Property Costs are negotiated with ___.",
              "id": "Y9TgogYk4fwW",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TgogYk4fwW"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTEwq0tQaS",
              "childId": "Y9TgvzAGlUyN",
              "affects": "confidence",
              "pro": true,
              "id": "Y9TgvzA7Ci85",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9TgvzA7Ci85"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseways are desirable.",
              "id": "Y9TgvzAGlUyN",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9TgvzAGlUyN"
          }
        ],
        [
          {
            "newData": {
              "content": "It is technologically feasible to provide modular Ride Styles in a single-vehicle. (also with provisions for intermodal goods distribution)",
              "id": "Y9UgfJxErzpm",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9UgfJxErzpm"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwU4YhLrHhi",
              "childId": "Y9UgfJxErzpm",
              "affects": "confidence",
              "pro": true,
              "id": "Y9UgfJwAUmA1",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9UgfJwAUmA1"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "id": "Y9UgJaGX1Unz",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9UgJaGX1Unz"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles increase community health.",
              "id": "Y9UgVY4AGr7W",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9UgVY4AGr7W"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwU4YhLrHhi",
              "childId": "Y9UgVY4AGr7W",
              "affects": "confidence",
              "pro": true,
              "id": "Y9UgVY4ernKK",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9UgVY4ernKK"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "YcwU4YhLrHhi",
              "affects": "confidence",
              "pro": true,
              "id": "YcwU4YhmbSj3",
              "priority": "2",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwU4YhmbSj3"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride Styles (level 2) provide increased comfort to travelers.",
              "id": "YcwU4YhLrHhi",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwU4YhLrHhi"
          }
        ],
        [
          {
            "newData": {
              "content": "Many areas around existing highways are ugly, however, the infiniteTransit flyway is significantly more slender and eliminates the dirt and grime caused by rubber wheels on asphalt roadways.",
              "id": "Y9Ui3Sg9m6Uu",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Y9Ui3Sg9m6Uu"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwWvmlpZY6R",
              "childId": "Y9Ui3Sg9m6Uu",
              "affects": "confidence",
              "pro": false,
              "id": "Y9Ui3SgbTPF5",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Y9Ui3SgbTPF5"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "YcwrnKbeEy2J",
              "affects": "confidence",
              "pro": true,
              "id": "YcwrnKbfpJdH",
              "priority": "1",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwrnKbfpJdH"
          }
        ],
        [
          {
            "newData": {
              "content": "The Overall Effects (level 1) will provide common value to most people, most of the time.",
              "id": "YcwrnKbeEy2J",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwrnKbeEy2J"
          }
        ],
        [
          {
            "newData": {
              "content": "The Pauseways (level 3) provide value to local entrepreneurs.",
              "id": "YcwTEwq0tQaS",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwTEwq0tQaS"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "YcwTEwq0tQaS",
              "affects": "confidence",
              "pro": true,
              "id": "YcwTEwqQTxN9",
              "priority": "3",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwTEwqQTxN9"
          }
        ],
        [
          {
            "newData": {
              "content": "New renovations and construction in Places (level 4) will create amenity-saturated environments",
              "id": "YcwTTLYmc4SE",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwTTLYmc4SE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "YcwTTLYmc4SE",
              "affects": "confidence",
              "pro": true,
              "id": "YcwTTLYrE4W2",
              "priority": "4",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwTTLYrE4W2"
          }
        ],
        [
          {
            "newData": {
              "content": "The Operations (level 6) are socio-economically sustainable.",
              "id": "YcwTZMJHOOiB",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwTZMJHOOiB"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "YcwTZMJHOOiB",
              "affects": "confidence",
              "pro": true,
              "id": "YcwTZMJZEnsC",
              "priority": "6",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwTZMJZEnsC"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Yk3JDShDv0lm",
              "childId": "Ycx1g9OKDUUO",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx1g9NnjXWd",
              "priority": "5",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx1g9NnjXWd"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway (level5) will add to metropolis-wide economic vitality.",
              "id": "Ycx1g9OKDUUO",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx1g9OKDUUO"
          }
        ],
        [
          {
            "newData": {
              "content": "Design Costs: $______",
              "id": "Ycx0QegTUbav",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0QegTUbav"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx19cye5Xyw",
              "childId": "Ycx0QegTUbav",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0QegP2z8L",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0QegP2z8L"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx19cye5Xyw",
              "childId": "Ycx0Vho9oTa9",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0Vhohu7ov",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0Vhohu7ov"
          }
        ],
        [
          {
            "newData": {
              "content": "Right of Way Costs: $______",
              "id": "Ycx0Vho9oTa9",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0Vho9oTa9"
          }
        ],
        [
          {
            "newData": {
              "content": "Testing and Commissioning Costs: $______",
              "id": "Ycx0J2XMaVvE",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0J2XMaVvE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx19cye5Xyw",
              "childId": "Ycx0J2XMaVvE",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0J2XviYIk",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0J2XviYIk"
          }
        ],
        [
          {
            "newData": {
              "content": "Construction Costs: $______",
              "id": "Ycx0LQY0TlvA",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0LQY0TlvA"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx19cye5Xyw",
              "childId": "Ycx0LQY0TlvA",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0LQX18z62",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0LQX18z62"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwXdSgt9rac",
              "childId": "YcwUTI4fcydo",
              "affects": "confidence",
              "pro": true,
              "id": "YcwUTI4WyqWS",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwUTI4WyqWS"
          }
        ],
        [
          {
            "newData": {
              "content": "• The Flyway will have less impact than drones, because it is not intrusive.",
              "id": "YcwUTI4fcydo",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwUTI4fcydo"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwUu4Y624Xt",
              "affects": "confidence",
              "pro": true,
              "id": "YcwUu4XZPU0r",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwUu4XZPU0r"
          }
        ],
        [
          {
            "newData": {
              "content": "For Others, ...",
              "id": "YcwUu4Y624Xt",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwUu4Y624Xt"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway will have less impact than concrete roadways.",
              "id": "YcwV9sRp7l19",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwV9sRp7l19"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwXdSgt9rac",
              "childId": "YcwV9sRp7l19",
              "affects": "confidence",
              "pro": true,
              "id": "YcwV9sRZqrJW",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwV9sRZqrJW"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwWfVedirgH",
              "childId": "YcwVS2YZyXxC",
              "affects": "confidence",
              "pro": false,
              "id": "YcwVS2YTmr62",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwVS2YTmr62"
          }
        ],
        [
          {
            "newData": {
              "content": "infiniteTransit operating noise will be below ___dB, which is equivalent to a windy day.",
              "id": "YcwVS2YZyXxC",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwVS2YZyXxC"
          }
        ],
        [
          {
            "newData": {
              "content": "infiniteTransit will cause noise pollution.",
              "id": "YcwWfVedirgH",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwWfVedirgH"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwXdSgt9rac",
              "childId": "YcwWfVedirgH",
              "affects": "confidence",
              "pro": false,
              "id": "YcwWfVemuLGe",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwWfVemuLGe"
          }
        ],
        [
          {
            "newData": {
              "content": "For the environment, infiniteTransit reduces the amount of energy requires to distribute goods and people's travel needs. ",
              "id": "YcwXdSgt9rac",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwXdSgt9rac"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwXdSgt9rac",
              "affects": "confidence",
              "pro": true,
              "id": "YcwXdSg99OjG",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwXdSg99OjG"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwXdSgt9rac",
              "childId": "YcwWPE9z7lOa",
              "affects": "confidence",
              "pro": false,
              "id": "YcwWPE9f5C1G",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwWPE9f5C1G"
          }
        ],
        [
          {
            "newData": {
              "content": "infiniteTransit will require building infrastructure in above wetlands.",
              "id": "YcwWPE9z7lOa",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwWPE9z7lOa"
          }
        ],
        [
          {
            "newData": {
              "content": "For adults, infiniteTransit provides different Rides for different travel needs, without the hassles of parking.",
              "id": "YcwY0PRuzUjd",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwY0PRuzUjd"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwY0PRuzUjd",
              "affects": "confidence",
              "pro": true,
              "id": "YcwY0PRziqQv",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwY0PRziqQv"
          }
        ],
        [
          {
            "newData": {
              "content": "For the elderly, infiniteTransit allows traveling without the need to drive and accommodates pedestrian accessories like wheelchairs.",
              "id": "YcwXJhgqAP7J",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwXJhgqAP7J"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwXJhgqAP7J",
              "affects": "confidence",
              "pro": true,
              "id": "YcwXJhgz0t8y",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwXJhgz0t8y"
          }
        ],
        [
          {
            "newData": {
              "content": "For adolescents, the \"Learning-Ride\" provides an extremely safe, trackable, travel experience where they can learn about people and places.",
              "id": "YcwYsfQj9xi9",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwYsfQj9xi9"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwYsfQj9xi9",
              "affects": "confidence",
              "pro": true,
              "id": "YcwYsfQHEPHV",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwYsfQHEPHV"
          }
        ],
        [
          {
            "newData": {
              "content": "For children, it is more civilized to travel on infiniteTransit than to be tied down in a \"Car-Seat\"",
              "id": "YcwYSU9WijLa",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwYSU9WijLa"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZ5yc6mW6f",
              "childId": "YcwYSU9WijLa",
              "affects": "confidence",
              "pro": true,
              "id": "YcwYSU9Ih1ex",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwYSU9Ih1ex"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway's impact on the community is healthy.",
              "id": "YcwZ5yc6mW6f",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZ5yc6mW6f"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx1g9OKDUUO",
              "childId": "YcwZ5yc6mW6f",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZ5yc2Q6eQ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZ5yc2Q6eQ"
          }
        ],
        [
          {
            "newData": {
              "content": "• Appropriate school activities are more accessible to Students(2).",
              "id": "YcwZH9JFpcRF",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZH9JFpcRF"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "YcwZKeBsf9le",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZKeAy7TIm",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZKeAy7TIm"
          }
        ],
        [
          {
            "newData": {
              "content": "Other…",
              "id": "YcwZKeBsf9le",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZKeBsf9le"
          }
        ],
        [
          {
            "newData": {
              "content": "Education will improve as Schools can share higher-quality, specialized programs with focused students from across the metropolis.",
              "id": "YcwZNVsATvNN",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZNVsATvNN"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "YcwZNVsATvNN",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZNVsPTx9x",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZNVsPTx9x"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "YcwZTwQAAfg5",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZTwQrVT2I",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZTwQrVT2I"
          }
        ],
        [
          {
            "newData": {
              "content": "Health is improved by providing more useable walkable environments.",
              "id": "YcwZTwQAAfg5",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZTwQAAfg5"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx006j2uAng",
              "childId": "YcwZVA0YJbbi",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZVA0BtDLA",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZVA0BtDLA"
          }
        ],
        [
          {
            "newData": {
              "content": "People who live in one Place and work in a different Place, can express strong interests in both places.",
              "id": "YcwZVA0YJbbi",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZVA0YJbbi"
          }
        ],
        [
          {
            "newData": {
              "content": "Governance Facilities are more visibly associated with the Places they serve.",
              "id": "Ycx006j2uAng",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx006j2uAng"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "Ycx006j2uAng",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx006jmHwEH",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx006jmHwEH"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZyHGKeHz0",
              "childId": "YcwZiDRfVY3o",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZiDR9l2Qo",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZiDR9l2Qo"
          }
        ],
        [
          {
            "newData": {
              "content": "Latest Long-Span Flyway Structures",
              "id": "YcwZiDRfVY3o",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZiDRfVY3o"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZyHGKeHz0",
              "childId": "YcwZn0N7jnEp",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZn0N4ZvQZ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZn0N4ZvQZ"
          }
        ],
        [
          {
            "newData": {
              "content": "Innovative Assemblies",
              "id": "YcwZn0N7jnEp",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZn0N7jnEp"
          }
        ],
        [
          {
            "newData": {
              "content": "Latest Vehicle Technology",
              "id": "YcwZqPoNIlvr",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZqPoNIlvr"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZyHGKeHz0",
              "childId": "YcwZqPoNIlvr",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZqPofCX4z",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZqPofCX4z"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway is technologically feasible.",
              "id": "YcwZyHGKeHz0",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwZyHGKeHz0"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx1g9OKDUUO",
              "childId": "YcwZyHGKeHz0",
              "affects": "confidence",
              "pro": true,
              "id": "YcwZyHGsDdUO",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwZyHGsDdUO"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwo1rAUEeM4",
              "childId": "YcwnFKpFi0eE",
              "affects": "confidence",
              "pro": true,
              "id": "YcwnFKpJiqBm",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwnFKpJiqBm"
          }
        ],
        [
          {
            "newData": {
              "content": "For adolescents ",
              "id": "YcwnFKpFi0eE",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwnFKpFi0eE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwo1rAUEeM4",
              "childId": "YcwnV8ehmfP2",
              "affects": "confidence",
              "pro": true,
              "id": "YcwnV8ewBcMC",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwnV8ewBcMC"
          }
        ],
        [
          {
            "newData": {
              "content": "For children traveling with adults.",
              "id": "YcwnV8ehmfP2",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwnV8ehmfP2"
          }
        ],
        [
          {
            "newData": {
              "content": "The Operations' impact on the community is healthy.",
              "id": "Ycwo1rAUEeM4",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwo1rAUEeM4"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTZMJHOOiB",
              "childId": "Ycwo1rAUEeM4",
              "affects": "confidence",
              "pro": true,
              "id": "Ycwo1rz4ePWu",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwo1rz4ePWu"
          }
        ],
        [
          {
            "newData": {
              "content": "On the envirionment",
              "id": "YcwnqMGUnIlp",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwnqMGUnIlp"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwo1rAUEeM4",
              "childId": "YcwnqMGUnIlp",
              "affects": "confidence",
              "pro": true,
              "id": "YcwnqMG1k6WV",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwnqMG1k6WV"
          }
        ],
        [
          {
            "newData": {
              "content": "For the elderly",
              "id": "YcwnuFtVSNg9",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwnuFtVSNg9"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwo1rAUEeM4",
              "childId": "YcwnuFtVSNg9",
              "affects": "confidence",
              "pro": true,
              "id": "YcwnuFtBTDc0",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwnuFtBTDc0"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwo1rAUEeM4",
              "childId": "YcwnBzqmzaNi",
              "affects": "confidence",
              "pro": true,
              "id": "YcwnBzqJh0rw",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwnBzqJh0rw"
          }
        ],
        [
          {
            "newData": {
              "content": "For adults interacting with each other.",
              "id": "YcwnBzqmzaNi",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwnBzqmzaNi"
          }
        ],
        [
          {
            "newData": {
              "content": "Concierge/ethnography is essential to Travel Services Feedback",
              "id": "YcwoGIQXqTbE",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoGIQXqTbE"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwoSEAkfPBn",
              "childId": "YcwoGIQXqTbE",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoGIQ9rwlP",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoGIQ9rwlP"
          }
        ],
        [
          {
            "newData": {
              "content": "These new jobs can be staffed by people knowledgeable about the metropolis and helpful demeanor. Pensions are included and old and young can apply.",
              "id": "YcwoMap1LI2e",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoMap1LI2e"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwoSEAkfPBn",
              "childId": "YcwoMap1LI2e",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoMap1OBEz",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoMap1OBEz"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "YcwoO4ep0jVa",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoO4eQuKVw",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoO4eQuKVw"
          }
        ],
        [
          {
            "newData": {
              "content": "Other…",
              "id": "YcwoO4ep0jVa",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoO4ep0jVa"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "YcwoSEAkfPBn",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoSEAscusp",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoSEAscusp"
          }
        ],
        [
          {
            "newData": {
              "content": "Education is provided by many service personnel at each Pauseway.",
              "id": "YcwoSEAkfPBn",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoSEAkfPBn"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "YcwoVo2hiCVn",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoVo2Hsa1J",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoVo2Hsa1J"
          }
        ],
        [
          {
            "newData": {
              "content": "Healthy funding includes incentives that lower fares, increase desirability, and increase real-estate value to a Pauseway's 1-mile radius.",
              "id": "YcwoVo2hiCVn",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoVo2hiCVn"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "YcwoYadHSsCb",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoYacmVwdi",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoYacmVwdi"
          }
        ],
        [
          {
            "newData": {
              "content": "InfiniteTransit Governance is a consortium of entities incentivized to provide excellent travel services.",
              "id": "YcwoYadHSsCb",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoYadHSsCb"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "Ycwp13o2PKIJ",
              "affects": "confidence",
              "pro": true,
              "id": "Ycwp13o5mup3",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwp13o5mup3"
          }
        ],
        [
          {
            "newData": {
              "content": "Funding includes Upgrade provisions and open systems to maintain desirability across changing fads, trends, and generations",
              "id": "Ycwp13o2PKIJ",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwp13o2PKIJ"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwoxlFMUVIO",
              "childId": "YcwolT0zNqaS",
              "affects": "confidence",
              "pro": true,
              "id": "YcwolT0su4S1",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwolT0su4S1"
          }
        ],
        [
          {
            "newData": {
              "content": "Smart-Contract Incremental Real-Estate Revenue",
              "id": "YcwolT0zNqaS",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwolT0zNqaS"
          }
        ],
        [
          {
            "newData": {
              "content": "Latest Digital Tracking",
              "id": "Ycwoqn8RaOtB",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwoqn8RaOtB"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwoxlFMUVIO",
              "childId": "Ycwoqn8RaOtB",
              "affects": "confidence",
              "pro": true,
              "id": "Ycwoqn8mFSL8",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwoqn8mFSL8"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTZMJHOOiB",
              "childId": "YcwoxlFMUVIO",
              "affects": "confidence",
              "pro": true,
              "id": "YcwoxlFXTlnQ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwoxlFXTlnQ"
          }
        ],
        [
          {
            "newData": {
              "content": "The Operations are technologically feasible.",
              "id": "YcwoxlFMUVIO",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwoxlFMUVIO"
          }
        ],
        [
          {
            "newData": {
              "content": "The Operations are desirable.",
              "id": "YcwpgOjLkaMC",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpgOjLkaMC"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTZMJHOOiB",
              "childId": "YcwpgOjLkaMC",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpgOjVTctj",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpgOjVTctj"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwpgOjLkaMC",
              "childId": "YcwpaGStHuSe",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpaGSyI49j",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpaGSyI49j"
          }
        ],
        [
          {
            "newData": {
              "content": "Business investors receive market-rate returns and no more.",
              "id": "YcwpaGStHuSe",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpaGStHuSe"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpG5820H98",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpG58ZroVA",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpG58ZroVA"
          }
        ],
        [
          {
            "newData": {
              "content": "Pauseway Maintenance: $___",
              "id": "YcwpG5820H98",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpG5820H98"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpIrQfItEu",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpIrQe4440",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpIrQe4440"
          }
        ],
        [
          {
            "newData": {
              "content": "Places Maintenance: $___",
              "id": "YcwpIrQfItEu",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpIrQfItEu"
          }
        ],
        [
          {
            "newData": {
              "content": "Operations Maintenance: $___",
              "id": "YcwpMrjpL9m1",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpMrjpL9m1"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpMrjpL9m1",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpMrjoniYi",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpMrjoniYi"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpRoEeC7z0",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpRoELsiUg",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpRoELsiUg"
          }
        ],
        [
          {
            "newData": {
              "content": "Ride Maintenance: $___",
              "id": "YcwpRoEeC7z0",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpRoEeC7z0"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpW8gNm6qi",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpW8gkk9Ga",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpW8gkk9Ga"
          }
        ],
        [
          {
            "newData": {
              "content": "Flyway Maintenance: $___",
              "id": "YcwpW8gNm6qi",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpW8gNm6qi"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycwq20poMoPU",
              "childId": "YcwpBc5lFqsy",
              "affects": "confidence",
              "pro": true,
              "id": "YcwpBc4K1a2K",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwpBc4K1a2K"
          }
        ],
        [
          {
            "newData": {
              "content": "Upgrade Planning: $___",
              "id": "YcwpBc5lFqsy",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwpBc5lFqsy"
          }
        ],
        [
          {
            "newData": {
              "content": "Systems Development and Upgrade costs: $___",
              "id": "YcwqhF1WfPOD",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwqhF1WfPOD"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwqvyTjYnxt",
              "childId": "YcwqhF1WfPOD",
              "affects": "confidence",
              "pro": true,
              "id": "YcwqhF1VRaXR",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwqhF1VRaXR"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwqvyTjYnxt",
              "childId": "Ycwqq42IyIvf",
              "affects": "confidence",
              "pro": true,
              "id": "Ycwqq42NW2al",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwqq42NW2al"
          }
        ],
        [
          {
            "newData": {
              "content": "Consortium Management costs: $___",
              "id": "Ycwqq42IyIvf",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwqq42IyIvf"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwTZMJHOOiB",
              "childId": "YcwqvyTjYnxt",
              "affects": "confidence",
              "pro": true,
              "id": "YcwqvyTme2dV",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwqvyTme2dV"
          }
        ],
        [
          {
            "newData": {
              "content": "The Operations costs are reasonable.",
              "id": "YcwqvyTjYnxt",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwqvyTjYnxt"
          }
        ],
        [
          {
            "newData": {
              "content": "Older people may enjoy taking the Learning Rides because it keeps them aware of community events.",
              "id": "YcwrREJFVhlc",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwrREJFVhlc"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycws7MzAX7X9",
              "childId": "YcwrREJFVhlc",
              "affects": "confidence",
              "pro": true,
              "id": "YcwrREJZALVp",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwrREJZALVp"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycws7MzAX7X9",
              "childId": "YcwrWu5ASVdH",
              "affects": "confidence",
              "pro": true,
              "id": "YcwrWu5hgDN4",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwrWu5hgDN4"
          }
        ],
        [
          {
            "newData": {
              "content": "• Younger people can safely travel in the Learning Ride, with the toughest safety restrictions and coordination of before and after-Ride secure continuation of safety.",
              "id": "YcwrWu5ASVdH",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwrWu5ASVdH"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "Ycws7MzAX7X9",
              "affects": "confidence",
              "pro": true,
              "id": "Ycws7MzLbJ5c",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycws7MzLbJ5c"
          }
        ],
        [
          {
            "newData": {
              "content": "Education about the opportunities for living in Houston are visible when people take the Learning Rides.",
              "id": "Ycws7MzAX7X9",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycws7MzAX7X9"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "YcwrGvlcLhN6",
              "affects": "confidence",
              "pro": true,
              "id": "YcwrGvlEgd9S",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwrGvlEgd9S"
          }
        ],
        [
          {
            "newData": {
              "content": "Other… It's a great way to show visitors around the city.",
              "id": "YcwrGvlcLhN6",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwrGvlcLhN6"
          }
        ],
        [
          {
            "newData": {
              "content": "Healthy interactions with fellow residents is more possible when people in similar moods travel in a comfortable environment.",
              "id": "YcwsdFi9AG6N",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwsdFi9AG6N"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "YcwsdFi9AG6N",
              "affects": "confidence",
              "pro": true,
              "id": "YcwsdFicYATw",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwsdFicYATw"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwssONd3I42",
              "childId": "YcwsnlUgoOSN",
              "affects": "confidence",
              "pro": false,
              "id": "YcwsnlUAGAc0",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwsnlUAGAc0"
          }
        ],
        [
          {
            "newData": {
              "content": "Existing transit companies don't want the competition.",
              "id": "YcwsnlUgoOSN",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwsnlUgoOSN"
          }
        ],
        [
          {
            "newData": {
              "content": "Local government officials will support increased resident cooperation.",
              "id": "YcwssONd3I42",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwssONd3I42"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "YcwssONd3I42",
              "affects": "confidence",
              "pro": true,
              "id": "YcwssONiqZVZ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwssONiqZVZ"
          }
        ],
        [
          {
            "newData": {
              "content": "Recreational activities are supported by the Playing Rides, which support carrying sporting gear.",
              "id": "Ycwsykq5pyBn",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwsykq5pyBn"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "Ycwsykq5pyBn",
              "affects": "confidence",
              "pro": true,
              "id": "YcwsykqaXqa3",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwsykqaXqa3"
          }
        ],
        [
          {
            "newData": {
              "content": "Business opportunities for local companies to provide goods and services are available in the Working Rides.",
              "id": "Ycwt26WrEkp4",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycwt26WrEkp4"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwubNjnLtJI",
              "childId": "Ycwt26WrEkp4",
              "affects": "confidence",
              "pro": true,
              "id": "Ycwt26WGrWnD",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycwt26WGrWnD"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwuSRkXdQ4q",
              "childId": "YcwtABrWfOjj",
              "affects": "confidence",
              "pro": true,
              "id": "YcwtABr00yoo",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwtABr00yoo"
          }
        ],
        [
          {
            "newData": {
              "content": "Ride Adaptations cost $____ per vehicle.",
              "id": "YcwtABrWfOjj",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwtABrWfOjj"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwuSRkXdQ4q",
              "childId": "YcwtI7AyIfN1",
              "affects": "confidence",
              "pro": true,
              "id": "YcwtI7AhOFxN",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwtI7AhOFxN"
          }
        ],
        [
          {
            "newData": {
              "content": "The Ride vehicles cost $______ per vehicle.",
              "id": "YcwtI7AyIfN1",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwtI7AyIfN1"
          }
        ],
        [
          {
            "newData": {
              "content": "The Rides are desireable.",
              "id": "YcwubNjnLtJI",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwubNjnLtJI"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwU4YhLrHhi",
              "childId": "YcwubNjnLtJI",
              "affects": "confidence",
              "pro": true,
              "id": "YcwubNjpEiPs",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwubNjpEiPs"
          }
        ],
        [
          {
            "newData": {
              "content": "The Rides Digital Management cost $___.)",
              "id": "YcwthB2ZAcwo",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwthB2ZAcwo"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwuSRkXdQ4q",
              "childId": "YcwthB2ZAcwo",
              "affects": "confidence",
              "pro": true,
              "id": "YcwthB2GkxhY",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwthB2GkxhY"
          }
        ],
        [
          {
            "newData": {
              "content": "Ride Intermodal transfer technology cost $____ in total.",
              "id": "YcwtswpoYQrc",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwtswpoYQrc"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwuSRkXdQ4q",
              "childId": "YcwtswpoYQrc",
              "affects": "confidence",
              "pro": true,
              "id": "YcwtswpmBUlO",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwtswpmBUlO"
          }
        ],
        [
          {
            "newData": {
              "content": "• The Flyway will have less light-pollution (_____lumens at ground level) than roadway streetlights (_____lumens at ground level).",
              "id": "YcwV2clV4veG",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwV2clV4veG"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwXdSgt9rac",
              "childId": "YcwV2clV4veG",
              "affects": "confidence",
              "pro": true,
              "id": "YcwV2clQPxDZ",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwV2clQPxDZ"
          }
        ],
        [
          {
            "newData": {
              "content": "• infiniteTransit makes living more affordable with no need to buy a car.",
              "id": "YcwvEQ9d8Pc0",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwvEQ9d8Pc0"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZKeBsf9le",
              "childId": "YcwvEQ9d8Pc0",
              "affects": "confidence",
              "pro": true,
              "id": "YcwvEQ9dtcV6",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwvEQ9dtcV6"
          }
        ],
        [
          {
            "newData": {
              "content": "infiniteTransit will cause disagreeable shadows decreasing land value below.",
              "id": "YcwVBMUu8vEM",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwVBMUu8vEM"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZKeBsf9le",
              "childId": "YcwVBMUu8vEM",
              "affects": "confidence",
              "pro": false,
              "id": "YcwVBMUlLQ6C",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwVBMUlLQ6C"
          }
        ],
        [
          {
            "newData": {
              "parentId": "YcwZKeBsf9le",
              "childId": "YcwWvmlpZY6R",
              "affects": "confidence",
              "pro": false,
              "id": "YcwWvmlOo0r9",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "YcwWvmlOo0r9"
          }
        ],
        [
          {
            "newData": {
              "content": "infiniteTransit will be ugly devaluing our community.",
              "id": "YcwWvmlpZY6R",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "YcwWvmlpZY6R"
          }
        ],
        [
          {
            "newData": {
              "content": "Cultural institutions become more reachable to all people with reduced travel times.",
              "id": "Ycx04LnNw302",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx04LnNw302"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0cCOAbEul",
              "childId": "Ycx04LnNw302",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx04LnwzyUr",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx04LnwzyUr"
          }
        ],
        [
          {
            "newData": {
              "content": "Sports stadiums can be easily accessed to all in the metropolis.",
              "id": "Ycx07h36VL0n",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx07h36VL0n"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0cCOAbEul",
              "childId": "Ycx07h36VL0n",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx07h21Y0uB",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx07h21Y0uB"
          }
        ],
        [
          {
            "newData": {
              "content": "Recreational facilities can be distinguished and accessible to the full metropolis, whether they are located near the Pauseway (Park District Facilities), or in the vast space between Pauseways (forests).",
              "id": "Ycx0cCOAbEul",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0cCOAbEul"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "Ycx0cCOAbEul",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0cCOJ8TYG",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0cCOJ8TYG"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0s5wgvcPj",
              "childId": "Ycx0iEXq9xoW",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0iEWPnDjD",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0iEWPnDjD"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0s5wgvcPj",
              "childId": "Ycx0plRhl3zO",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0plRP2JwW",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0plRP2JwW"
          }
        ],
        [
          {
            "newData": {
              "content": "More specializations of work, increase quality services provided to a larger audience (5). [iTf whole]",
              "id": "Ycx0plRhl3zO",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0plRhl3zO"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx0xUPPHT5h",
              "childId": "Ycx0s5wgvcPj",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0s5wDyPk4",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0s5wDyPk4"
          }
        ],
        [
          {
            "newData": {
              "content": "Businesses benefit with increasing accessibility (commutable time frames) to all areas of the metropolis.",
              "id": "Ycx0s5wgvcPj",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0s5wgvcPj"
          }
        ],
        [
          {
            "newData": {
              "parentId": "Ycx1g9OKDUUO",
              "childId": "Ycx0xUPPHT5h",
              "affects": "confidence",
              "pro": true,
              "id": "Ycx0xUPdp9WF",
              "priority": "",
              "type": "claimEdge"
            },
            "type": "add_claimEdge",
            "dataId": "Ycx0xUPdp9WF"
          }
        ],
        [
          {
            "newData": {
              "content": "The Flyway is desireable.",
              "id": "Ycx0xUPPHT5h",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Ycx0xUPPHT5h"
          }
        ],
        [
          {
            "newData": {
              "content": "The infiniteTransit Flyway will provide value for Houston's future.",
              "id": "Yk3JDShDv0lm",
              "reversible": false,
              "type": "claim"
            },
            "type": "add_claim",
            "dataId": "Yk3JDShDv0lm"
          }
        ],
        [
          {
            "newData": {
              "sourceClaimId": "Yk3JDShDv0lm",
              "topScoreId": "Yk3JDShDv0lm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "topScore",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "topScore"
          }
        ],
        [
          {
            "newData": {
              "sourceClaimId": "YcwU4YhLrHhi",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwU4YhmbSj3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDpF3Rz",
              "priority": "2",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDpF3Rz"
          },
          {
            "newData": {
              "sourceClaimId": "YcwuSRkXdQ4q",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "YcwuSRjByl0V",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDs3FnS",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDs3FnS"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtABrWfOjj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtABr00yoo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUD4nXBK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUD4nXBK"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtI7AyIfN1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtI7AhOFxN",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDaom70",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDaom70"
          },
          {
            "newData": {
              "sourceClaimId": "YcwthB2ZAcwo",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwthB2GkxhY",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDlqtni",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDlqtni"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtswpoYQrc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtswpmBUlO",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDCGVtt",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDCGVtt"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TLlAsPn0SI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9TLlAsLsCVz",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDqkk4n",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDqkk4n"
          },
          {
            "newData": {
              "sourceClaimId": "Y9UgfJxErzpm",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9UgfJwAUmA1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDrH1ZG",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDrH1ZG"
          },
          {
            "newData": {
              "sourceClaimId": "Y9UgVY4AGr7W",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9UgVY4ernKK",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUD7qw4O",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUD7qw4O"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TJF8IQDkMs",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUD7qw4O",
              "sourceEdgeId": "Y9TJF8IcKUnx",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDWTXJ1",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDWTXJ1"
          },
          {
            "newData": {
              "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUD7qw4O",
              "sourceEdgeId": "Y9UgJaGTrYix",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDJj2qD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDJj2qD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwubNjnLtJI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "YcwubNjpEiPs",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDJSDdK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDJSDdK"
          },
          {
            "newData": {
              "sourceClaimId": "Ycws7MzAX7X9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "Ycws7MzLbJ5c",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCbVh0h",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCbVh0h"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrREJFVhlc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCbVh0h",
              "sourceEdgeId": "YcwrREJZALVp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCocpOU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCocpOU"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrWu5ASVdH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCbVh0h",
              "sourceEdgeId": "YcwrWu5hgDN4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC4ENPA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC4ENPA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrGvlcLhN6",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwrGvlEgd9S",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCkEUHs",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCkEUHs"
          },
          {
            "newData": {
              "sourceClaimId": "YcwsdFi9AG6N",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwsdFicYATw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCwQYxQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCwQYxQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwssONd3I42",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwssONiqZVZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCMgGba",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCMgGba"
          },
          {
            "newData": {
              "sourceClaimId": "YcwsnlUgoOSN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCMgGba",
              "sourceEdgeId": "YcwsnlUAGAc0",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCLYypU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCLYypU"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwsykq5pyBn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwsykqaXqa3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCZknIw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCZknIw"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwt26WrEkp4",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "Ycwt26WGrWnD",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC38JEp",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC38JEp"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrnKbeEy2J",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwrnKbfpJdH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCeeDI6",
              "priority": "1",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCeeDI6"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TInryY9ZP1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TInryH9YRE",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCEFmaB",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCEFmaB"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFgrefra73",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFgrefupoq",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC9d4sC",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC9d4sC"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFjpl8AcGf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFjpld7i3Y",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCONYZH",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCONYZH"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFE5FYCgNl",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFE5F0K0FH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCr9Gnr",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCr9Gnr"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFoeyfkJzQ",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFoeyiYh6m",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC3ucqa",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC3ucqa"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFrXhEKC3C",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFrXhm1sEQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCHBYzw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCHBYzw"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFxkO5qIqD",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFxkOIm3lp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCuYsIy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCuYsIy"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THYvSjQzlt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9THYvSqwPew",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC4PHH5",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC4PHH5"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THMxb0Bzuc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THMxbDj1yX",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCu9TWP",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCu9TWP"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TGy49itihF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCu9TWP",
              "sourceEdgeId": "Y9TGy492vxFR",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBPTDfB",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBPTDfB"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THQNrAgNMM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THQNrpo74z",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBiGxYy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBiGxYy"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THGf7ZPbu2",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THGf7o6Ie1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBj2AwX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBj2AwX"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBj2AwX",
              "sourceEdgeId": "Y9THbOMY2O7F",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBxiBT6",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBxiBT6"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THCbLLA2bj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THCbLQV0MK",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB1hCwE",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB1hCwE"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THxiUg3Kmc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THxiUzqgKS",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBUwf7d",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBUwf7d"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THpGwTiBHE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THpGwirriI",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBLSR1O",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBLSR1O"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TI7BmGwz0M",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TI7BmxxxIo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBmzz8Z",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBmzz8Z"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TIgyROLnx6",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TIgyR7x8ID",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB3aIy2",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB3aIy2"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TF30kibmU5",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB3aIy2",
              "sourceEdgeId": "Y9TF30kQhSu8",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBM1xmU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBM1xmU"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TEIdq9R9sB",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB3aIy2",
              "sourceEdgeId": "Y9TEIdqMGRyY",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBXs7AS",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBXs7AS"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTEwq0tQaS",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTEwqQTxN9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBQZLFm",
              "priority": "3",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBQZLFm"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Tf6kJon28e",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9Tf6kJjfLuI",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBSNxsa",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBSNxsa"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdtyNBg7Ki",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBSNxsa",
              "sourceEdgeId": "Y9TdtyNmcBDy",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBElL9y",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBElL9y"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TeYlSlUprf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBSNxsa",
              "sourceEdgeId": "Y9TeYlS6Vst0",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB7Srdl",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB7Srdl"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdJ1HVW2nV",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB7Srdl",
              "sourceEdgeId": "Y9TdJ1H3XbM4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBRN1li",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBRN1li"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfKgNVeWfs",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TfKgNWUXEm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUByDS4H",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUByDS4H"
          },
          {
            "newData": {
              "sourceClaimId": "Y9T41tcAuiFT",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUByDS4H",
              "sourceEdgeId": "Y9T41tcPxgYu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAKCZ7F",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAKCZ7F"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgM3n4FauF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TgM3n4UrmX",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAT05Jj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAT05Jj"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfTvvSVxlW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TfTvvCvufC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA1MOM2",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA1MOM2"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfYKKX7ZsM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TfYKKosiuv",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAZxGC4",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAZxGC4"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Tg4mGfFPes",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9Tg4mFdaNqu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAPA1cP",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAPA1cP"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgeP4jEcUR",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TgeP46Y2g9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAY3D7d",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAY3D7d"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgogYk4fwW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TgogYlMDpH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAb8oO9",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAb8oO9"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgvzAGlUyN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TgvzA7Ci85",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAIStvs",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAIStvs"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TePaPJOYwx",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAIStvs",
              "sourceEdgeId": "Y9TePaP7h5Yx",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAtSkua",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAtSkua"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Te9uZYt1vG",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAtSkua",
              "sourceEdgeId": "Y9Te9uZGqOdJ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA8pDzJ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA8pDzJ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTTLYmc4SE",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTTLYrE4W2",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA6q375",
              "priority": "4",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA6q375"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcaDTTNiJw",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TcaDTmDeTG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUACSIMD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUACSIMD"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcgUvGR6LW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TcgUvJ4wHg",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAvejDG",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAvejDG"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TbSxEkr0xI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TbSxE9fAwG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUATHjyo",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUATHjyo"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdhXWy50Qt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TdhXW9ZAJv",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAu4yBX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAu4yBX"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcYmCtm1iM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAu4yBX",
              "sourceEdgeId": "Y9TcYmCLr4vt",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAOnllD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAOnllD"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcIgyQ2ZHn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAu4yBX",
              "sourceEdgeId": "Y9TcIgyyNXoT",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUACKOuW",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUACKOuW"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTZMJHOOiB",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTZMJZEnsC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUASmPSY",
              "priority": "6",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUASmPSY"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwo1rAUEeM4",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "Ycwo1rz4ePWu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAavcqM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAavcqM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnFKpFi0eE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnFKpJiqBm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAYufzl",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAYufzl"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnV8ehmfP2",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnV8ewBcMC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUARanEy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUARanEy"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnqMGUnIlp",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnqMG1k6WV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA4kCVq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA4kCVq"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnuFtVSNg9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnuFtBTDc0",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAwTZeJ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAwTZeJ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnBzqmzaNi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnBzqJh0rw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAqEwRu",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAqEwRu"
          },
          {
            "newData": {
              "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAqEwRu",
              "sourceEdgeId": "Y9TKxsQYa3Fp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAKzB7W",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAKzB7W"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoxlFMUVIO",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwoxlFXTlnQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAP4nkO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAP4nkO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwolT0zNqaS",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAP4nkO",
              "sourceEdgeId": "YcwolT0su4S1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAkWDqq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAkWDqq"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwoqn8RaOtB",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAP4nkO",
              "sourceEdgeId": "Ycwoqn8mFSL8",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA6Hhho",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA6Hhho"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpgOjLkaMC",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwpgOjVTctj",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAcnx6P",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAcnx6P"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoO4ep0jVa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoO4eQuKVw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUArPVZA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUArPVZA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoSEAkfPBn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoSEAscusp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAJGYSk",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAJGYSk"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoGIQXqTbE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAJGYSk",
              "sourceEdgeId": "YcwoGIQ9rwlP",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAGUvdF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAGUvdF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoMap1LI2e",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAJGYSk",
              "sourceEdgeId": "YcwoMap1OBEz",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzuHFbQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzuHFbQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoVo2hiCVn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoVo2Hsa1J",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzjytZQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzjytZQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoYadHSsCb",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoYacmVwdi",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzpAFaV",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzpAFaV"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwp13o2PKIJ",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "Ycwp13o5mup3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzf5nVY",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzf5nVY"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpaGStHuSe",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwpaGSyI49j",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz9HTPO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz9HTPO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqvyTjYnxt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwqvyTme2dV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzoTCfR",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzoTCfR"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwq20poMoPU",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "Ycwq20oYam0l",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzyMPuu",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzyMPuu"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpG5820H98",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpG58ZroVA",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzzK9et",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzzK9et"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpIrQfItEu",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpIrQe4440",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzbvrwT",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzbvrwT"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpMrjpL9m1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpMrjoniYi",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz2gVqv",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz2gVqv"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpRoEeC7z0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpRoELsiUg",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUziAnWv",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUziAnWv"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpW8gNm6qi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpW8gkk9Ga",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzEEgpk",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzEEgpk"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpBc5lFqsy",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpBc4K1a2K",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzMvUQw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzMvUQw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqhF1WfPOD",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "YcwqhF1VRaXR",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzSlnP8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzSlnP8"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwqq42IyIvf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "Ycwqq42NW2al",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzWLp7m",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzWLp7m"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx1g9OKDUUO",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "Ycx1g9NnjXWd",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzjsbHz",
              "priority": "5",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzjsbHz"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx19cye5Xyw",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "Ycx19cy5G7Wv",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzBRnmc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzBRnmc"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0QegTUbav",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0QegP2z8L",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzKNgjq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzKNgjq"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0Vho9oTa9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0Vhohu7ov",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz58ULn",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz58ULn"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0J2XMaVvE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0J2XviYIk",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzZmSjf",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzZmSjf"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0LQY0TlvA",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0LQX18z62",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzzfdxF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzzfdxF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZ5yc6mW6f",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZ5yc2Q6eQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzEdmHw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzEdmHw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwUu4Y624Xt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwUu4XZPU0r",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUztdiRD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUztdiRD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXdSgt9rac",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXdSg99OjG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzlJHdX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzlJHdX"
          },
          {
            "newData": {
              "sourceClaimId": "YcwUTI4fcydo",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwUTI4WyqWS",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzrAvg8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzrAvg8"
          },
          {
            "newData": {
              "sourceClaimId": "YcwV9sRp7l19",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwV9sRZqrJW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzysKdc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzysKdc"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWfVedirgH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWfVemuLGe",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzj0MpD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzj0MpD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwVS2YZyXxC",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzj0MpD",
              "sourceEdgeId": "YcwVS2YTmr62",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzAhM99",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzAhM99"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWPE9z7lOa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWPE9f5C1G",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzIuDJM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzIuDJM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwV2clV4veG",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwV2clQPxDZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzrbadO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzrbadO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwY0PRuzUjd",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwY0PRziqQv",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz2Ff9b",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz2Ff9b"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXJhgqAP7J",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXJhgz0t8y",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzDhSqH",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzDhSqH"
          },
          {
            "newData": {
              "sourceClaimId": "YcwYsfQj9xi9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwYsfQHEPHV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzJoiQ3",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzJoiQ3"
          },
          {
            "newData": {
              "sourceClaimId": "YcwYSU9WijLa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwYSU9Ih1ex",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzefykc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzefykc"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZyHGKeHz0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZyHGsDdUO",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzZOjoR",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzZOjoR"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZiDRfVY3o",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZiDR9l2Qo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz7iyJF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz7iyJF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZn0N7jnEp",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZn0N4ZvQZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzhSNlN",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzhSNlN"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZqPoNIlvr",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZqPofCX4z",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUytCI7x",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUytCI7x"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0xUPPHT5h",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "Ycx0xUPdp9WF",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyaP0gM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyaP0gM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZKeBsf9le",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZKeAy7TIm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyobOrK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyobOrK"
          },
          {
            "newData": {
              "sourceClaimId": "YcwvEQ9d8Pc0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwvEQ9dtcV6",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyJtEUm",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyJtEUm"
          },
          {
            "newData": {
              "sourceClaimId": "YcwVBMUu8vEM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwVBMUlLQ6C",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy65xZA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy65xZA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWvmlpZY6R",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwWvmlOo0r9",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy6hAiw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy6hAiw"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Ui3Sg9m6Uu",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy6hAiw",
              "sourceEdgeId": "Y9Ui3SgbTPF5",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyJiq9y",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyJiq9y"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZNVsATvNN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZNVsPTx9x",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyrEnlE",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyrEnlE"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TGy49itihF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyrEnlE",
              "sourceEdgeId": "Y9TG5APIKaSs",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy9TOAW",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy9TOAW"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyrEnlE",
              "sourceEdgeId": "YcwZH9JA46iW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUywHHd8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUywHHd8"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZTwQAAfg5",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZTwQrVT2I",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUySfkY4",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUySfkY4"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx006j2uAng",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx006jmHwEH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyQ3R2S",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyQ3R2S"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZVA0YJbbi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyQ3R2S",
              "sourceEdgeId": "YcwZVA0BtDLA",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUytQUVV",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUytQUVV"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0cCOAbEul",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx0cCOJ8TYG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyXZOSj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyXZOSj"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx04LnNw302",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyXZOSj",
              "sourceEdgeId": "Ycx04LnwzyUr",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyxLRRy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyxLRRy"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx07h36VL0n",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyXZOSj",
              "sourceEdgeId": "Ycx07h21Y0uB",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy1PLs3",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy1PLs3"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0s5wgvcPj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx0s5wDyPk4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy1ZyEj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy1ZyEj"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy1ZyEj",
              "sourceEdgeId": "Ycx0iEWPnDjD",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyMGW7j",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyMGW7j"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0plRhl3zO",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy1ZyEj",
              "sourceEdgeId": "Ycx0plRP2JwW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyLuf81",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyLuf81"
          },
          {
            "newData": {
              "sourceClaimId": "YcwssONd3I42",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwssONiqZVZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUCMgGba",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUCMgGba"
          },
          {
            "newData": {
              "sourceClaimId": "YcwU4YhLrHhi",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwU4YhmbSj3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.2,
              "relevance": 1,
              "id": "Y6YsJUDpF3Rz",
              "priority": "2",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUDpF3Rz"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrnKbeEy2J",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwrnKbfpJdH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUCeeDI6",
              "priority": "1",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUCeeDI6"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTEwq0tQaS",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTEwqQTxN9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUBQZLFm",
              "priority": "3",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUBQZLFm"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTTLYmc4SE",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTTLYrE4W2",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUA6q375",
              "priority": "4",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUA6q375"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqvyTjYnxt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwqvyTme2dV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.3333333333333333,
              "relevance": 1,
              "id": "Y6YsJUzoTCfR",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzoTCfR"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTZMJHOOiB",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTZMJZEnsC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.9333333333333333,
              "relevance": 1,
              "id": "Y6YsJUASmPSY",
              "priority": "6",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUASmPSY"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWfVedirgH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWfVemuLGe",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUzj0MpD",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzj0MpD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXdSgt9rac",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXdSg99OjG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUzlJHdX",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzlJHdX"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZ5yc6mW6f",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZ5yc2Q6eQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.9545454545454546,
              "relevance": 1,
              "id": "Y6YsJUzEdmHw",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzEdmHw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWvmlpZY6R",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwWvmlOo0r9",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUy6hAiw",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUy6hAiw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZKeBsf9le",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZKeAy7TIm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUyobOrK",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUyobOrK"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx1g9OKDUUO",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "Ycx1g9NnjXWd",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.4832810867293626,
              "relevance": 1,
              "id": "Y6YsJUzjsbHz",
              "priority": "5",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzjsbHz"
          },
          {
            "newData": {
              "sourceClaimId": "Yk3JDShDv0lm",
              "topScoreId": "Yk3JDShDv0lm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.6079262509037966,
              "relevance": 1,
              "id": "topScore",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "topScore"
          }
        ],
        [
          {
            "newData": {
              "sourceClaimId": "YcwU4YhLrHhi",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwU4YhmbSj3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDpF3Rz",
              "priority": "2",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDpF3Rz"
          },
          {
            "newData": {
              "sourceClaimId": "YcwuSRkXdQ4q",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "YcwuSRjByl0V",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDs3FnS",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDs3FnS"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtABrWfOjj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtABr00yoo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUD4nXBK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUD4nXBK"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtI7AyIfN1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtI7AhOFxN",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDaom70",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDaom70"
          },
          {
            "newData": {
              "sourceClaimId": "YcwthB2ZAcwo",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwthB2GkxhY",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDlqtni",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDlqtni"
          },
          {
            "newData": {
              "sourceClaimId": "YcwtswpoYQrc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDs3FnS",
              "sourceEdgeId": "YcwtswpmBUlO",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDCGVtt",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDCGVtt"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TLlAsPn0SI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9TLlAsLsCVz",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDqkk4n",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDqkk4n"
          },
          {
            "newData": {
              "sourceClaimId": "Y9UgfJxErzpm",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9UgfJwAUmA1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDrH1ZG",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDrH1ZG"
          },
          {
            "newData": {
              "sourceClaimId": "Y9UgVY4AGr7W",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "Y9UgVY4ernKK",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUD7qw4O",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUD7qw4O"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TJF8IQDkMs",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUD7qw4O",
              "sourceEdgeId": "Y9TJF8IcKUnx",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDWTXJ1",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDWTXJ1"
          },
          {
            "newData": {
              "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUD7qw4O",
              "sourceEdgeId": "Y9UgJaGTrYix",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDJj2qD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDJj2qD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwubNjnLtJI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDpF3Rz",
              "sourceEdgeId": "YcwubNjpEiPs",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUDJSDdK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUDJSDdK"
          },
          {
            "newData": {
              "sourceClaimId": "Ycws7MzAX7X9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "Ycws7MzLbJ5c",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCbVh0h",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCbVh0h"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrREJFVhlc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCbVh0h",
              "sourceEdgeId": "YcwrREJZALVp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCocpOU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCocpOU"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrWu5ASVdH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCbVh0h",
              "sourceEdgeId": "YcwrWu5hgDN4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC4ENPA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC4ENPA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrGvlcLhN6",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwrGvlEgd9S",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCkEUHs",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCkEUHs"
          },
          {
            "newData": {
              "sourceClaimId": "YcwsdFi9AG6N",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwsdFicYATw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCwQYxQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCwQYxQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwssONd3I42",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwssONiqZVZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCMgGba",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCMgGba"
          },
          {
            "newData": {
              "sourceClaimId": "YcwsnlUgoOSN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCMgGba",
              "sourceEdgeId": "YcwsnlUAGAc0",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCLYypU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCLYypU"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwsykq5pyBn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwsykqaXqa3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCZknIw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCZknIw"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwt26WrEkp4",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "Ycwt26WGrWnD",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC38JEp",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC38JEp"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrnKbeEy2J",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwrnKbfpJdH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCeeDI6",
              "priority": "1",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCeeDI6"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TInryY9ZP1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TInryH9YRE",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCEFmaB",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCEFmaB"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFgrefra73",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFgrefupoq",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC9d4sC",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC9d4sC"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFjpl8AcGf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFjpld7i3Y",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCONYZH",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCONYZH"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFE5FYCgNl",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFE5F0K0FH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCr9Gnr",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCr9Gnr"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFoeyfkJzQ",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFoeyiYh6m",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC3ucqa",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC3ucqa"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFrXhEKC3C",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFrXhm1sEQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCHBYzw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCHBYzw"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TFxkO5qIqD",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCEFmaB",
              "sourceEdgeId": "Y9TFxkOIm3lp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCuYsIy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCuYsIy"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THYvSjQzlt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9THYvSqwPew",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUC4PHH5",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUC4PHH5"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THMxb0Bzuc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THMxbDj1yX",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUCu9TWP",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUCu9TWP"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TGy49itihF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCu9TWP",
              "sourceEdgeId": "Y9TGy492vxFR",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBPTDfB",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBPTDfB"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THQNrAgNMM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THQNrpo74z",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBiGxYy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBiGxYy"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THGf7ZPbu2",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THGf7o6Ie1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBj2AwX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBj2AwX"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBj2AwX",
              "sourceEdgeId": "Y9THbOMY2O7F",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBxiBT6",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBxiBT6"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THCbLLA2bj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THCbLQV0MK",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB1hCwE",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB1hCwE"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THxiUg3Kmc",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THxiUzqgKS",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBUwf7d",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBUwf7d"
          },
          {
            "newData": {
              "sourceClaimId": "Y9THpGwTiBHE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUC4PHH5",
              "sourceEdgeId": "Y9THpGwirriI",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBLSR1O",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBLSR1O"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TI7BmGwz0M",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TI7BmxxxIo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBmzz8Z",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBmzz8Z"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TIgyROLnx6",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUCeeDI6",
              "sourceEdgeId": "Y9TIgyR7x8ID",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB3aIy2",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB3aIy2"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TF30kibmU5",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB3aIy2",
              "sourceEdgeId": "Y9TF30kQhSu8",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBM1xmU",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBM1xmU"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TEIdq9R9sB",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB3aIy2",
              "sourceEdgeId": "Y9TEIdqMGRyY",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBXs7AS",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBXs7AS"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTEwq0tQaS",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTEwqQTxN9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBQZLFm",
              "priority": "3",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBQZLFm"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Tf6kJon28e",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9Tf6kJjfLuI",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBSNxsa",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBSNxsa"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdtyNBg7Ki",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBSNxsa",
              "sourceEdgeId": "Y9TdtyNmcBDy",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBElL9y",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBElL9y"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TeYlSlUprf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBSNxsa",
              "sourceEdgeId": "Y9TeYlS6Vst0",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUB7Srdl",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUB7Srdl"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdJ1HVW2nV",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUB7Srdl",
              "sourceEdgeId": "Y9TdJ1H3XbM4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUBRN1li",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUBRN1li"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfKgNVeWfs",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TfKgNWUXEm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUByDS4H",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUByDS4H"
          },
          {
            "newData": {
              "sourceClaimId": "Y9T41tcAuiFT",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUByDS4H",
              "sourceEdgeId": "Y9T41tcPxgYu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAKCZ7F",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAKCZ7F"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgM3n4FauF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TgM3n4UrmX",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAT05Jj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAT05Jj"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfTvvSVxlW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TfTvvCvufC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA1MOM2",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA1MOM2"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TfYKKX7ZsM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TfYKKosiuv",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAZxGC4",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAZxGC4"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Tg4mGfFPes",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9Tg4mFdaNqu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAPA1cP",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAPA1cP"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgeP4jEcUR",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TgeP46Y2g9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAY3D7d",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAY3D7d"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgogYk4fwW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAT05Jj",
              "sourceEdgeId": "Y9TgogYlMDpH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAb8oO9",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAb8oO9"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TgvzAGlUyN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUBQZLFm",
              "sourceEdgeId": "Y9TgvzA7Ci85",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAIStvs",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAIStvs"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TePaPJOYwx",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAIStvs",
              "sourceEdgeId": "Y9TePaP7h5Yx",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAtSkua",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAtSkua"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Te9uZYt1vG",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAtSkua",
              "sourceEdgeId": "Y9Te9uZGqOdJ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA8pDzJ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA8pDzJ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTTLYmc4SE",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTTLYrE4W2",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA6q375",
              "priority": "4",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA6q375"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcaDTTNiJw",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TcaDTmDeTG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUACSIMD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUACSIMD"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcgUvGR6LW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TcgUvJ4wHg",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAvejDG",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAvejDG"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TbSxEkr0xI",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TbSxE9fAwG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUATHjyo",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUATHjyo"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TdhXWy50Qt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUA6q375",
              "sourceEdgeId": "Y9TdhXW9ZAJv",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAu4yBX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAu4yBX"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcYmCtm1iM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAu4yBX",
              "sourceEdgeId": "Y9TcYmCLr4vt",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAOnllD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAOnllD"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TcIgyQ2ZHn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAu4yBX",
              "sourceEdgeId": "Y9TcIgyyNXoT",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUACKOuW",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUACKOuW"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTZMJHOOiB",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTZMJZEnsC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUASmPSY",
              "priority": "6",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUASmPSY"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwo1rAUEeM4",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "Ycwo1rz4ePWu",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAavcqM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAavcqM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnFKpFi0eE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnFKpJiqBm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAYufzl",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAYufzl"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnV8ehmfP2",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnV8ewBcMC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUARanEy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUARanEy"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnqMGUnIlp",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnqMG1k6WV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA4kCVq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA4kCVq"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnuFtVSNg9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnuFtBTDc0",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAwTZeJ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAwTZeJ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwnBzqmzaNi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAavcqM",
              "sourceEdgeId": "YcwnBzqJh0rw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAqEwRu",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAqEwRu"
          },
          {
            "newData": {
              "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAqEwRu",
              "sourceEdgeId": "Y9TKxsQYa3Fp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAKzB7W",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAKzB7W"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoxlFMUVIO",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwoxlFXTlnQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAP4nkO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAP4nkO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwolT0zNqaS",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAP4nkO",
              "sourceEdgeId": "YcwolT0su4S1",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAkWDqq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAkWDqq"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwoqn8RaOtB",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAP4nkO",
              "sourceEdgeId": "Ycwoqn8mFSL8",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUA6Hhho",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUA6Hhho"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpgOjLkaMC",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwpgOjVTctj",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAcnx6P",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAcnx6P"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoO4ep0jVa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoO4eQuKVw",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUArPVZA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUArPVZA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoSEAkfPBn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoSEAscusp",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAJGYSk",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAJGYSk"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoGIQXqTbE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAJGYSk",
              "sourceEdgeId": "YcwoGIQ9rwlP",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUAGUvdF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUAGUvdF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoMap1LI2e",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAJGYSk",
              "sourceEdgeId": "YcwoMap1OBEz",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzuHFbQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzuHFbQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoVo2hiCVn",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoVo2Hsa1J",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzjytZQ",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzjytZQ"
          },
          {
            "newData": {
              "sourceClaimId": "YcwoYadHSsCb",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwoYacmVwdi",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzpAFaV",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzpAFaV"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwp13o2PKIJ",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "Ycwp13o5mup3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzf5nVY",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzf5nVY"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpaGStHuSe",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUAcnx6P",
              "sourceEdgeId": "YcwpaGSyI49j",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz9HTPO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz9HTPO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqvyTjYnxt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwqvyTme2dV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzoTCfR",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzoTCfR"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwq20poMoPU",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "Ycwq20oYam0l",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzyMPuu",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzyMPuu"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpG5820H98",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpG58ZroVA",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzzK9et",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzzK9et"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpIrQfItEu",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpIrQe4440",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzbvrwT",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzbvrwT"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpMrjpL9m1",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpMrjoniYi",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz2gVqv",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz2gVqv"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpRoEeC7z0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpRoELsiUg",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUziAnWv",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUziAnWv"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpW8gNm6qi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpW8gkk9Ga",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzEEgpk",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzEEgpk"
          },
          {
            "newData": {
              "sourceClaimId": "YcwpBc5lFqsy",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzyMPuu",
              "sourceEdgeId": "YcwpBc4K1a2K",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzMvUQw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzMvUQw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqhF1WfPOD",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "YcwqhF1VRaXR",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzSlnP8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzSlnP8"
          },
          {
            "newData": {
              "sourceClaimId": "Ycwqq42IyIvf",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzoTCfR",
              "sourceEdgeId": "Ycwqq42NW2al",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzWLp7m",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzWLp7m"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx1g9OKDUUO",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "Ycx1g9NnjXWd",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzjsbHz",
              "priority": "5",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzjsbHz"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx19cye5Xyw",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "Ycx19cy5G7Wv",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzBRnmc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzBRnmc"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0QegTUbav",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0QegP2z8L",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzKNgjq",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzKNgjq"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0Vho9oTa9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0Vhohu7ov",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz58ULn",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz58ULn"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0J2XMaVvE",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0J2XviYIk",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzZmSjf",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzZmSjf"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0LQY0TlvA",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzBRnmc",
              "sourceEdgeId": "Ycx0LQX18z62",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzzfdxF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzzfdxF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZ5yc6mW6f",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZ5yc2Q6eQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzEdmHw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzEdmHw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwUu4Y624Xt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwUu4XZPU0r",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUztdiRD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUztdiRD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXdSgt9rac",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXdSg99OjG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzlJHdX",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzlJHdX"
          },
          {
            "newData": {
              "sourceClaimId": "YcwUTI4fcydo",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwUTI4WyqWS",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzrAvg8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzrAvg8"
          },
          {
            "newData": {
              "sourceClaimId": "YcwV9sRp7l19",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwV9sRZqrJW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzysKdc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzysKdc"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWfVedirgH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWfVemuLGe",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzj0MpD",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzj0MpD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwVS2YZyXxC",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzj0MpD",
              "sourceEdgeId": "YcwVS2YTmr62",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzAhM99",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzAhM99"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWPE9z7lOa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWPE9f5C1G",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzIuDJM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzIuDJM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwV2clV4veG",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwV2clQPxDZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzrbadO",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzrbadO"
          },
          {
            "newData": {
              "sourceClaimId": "YcwY0PRuzUjd",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwY0PRziqQv",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz2Ff9b",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz2Ff9b"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXJhgqAP7J",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXJhgz0t8y",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzDhSqH",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzDhSqH"
          },
          {
            "newData": {
              "sourceClaimId": "YcwYsfQj9xi9",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwYsfQHEPHV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzJoiQ3",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzJoiQ3"
          },
          {
            "newData": {
              "sourceClaimId": "YcwYSU9WijLa",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwYSU9Ih1ex",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzefykc",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzefykc"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZyHGKeHz0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZyHGsDdUO",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzZOjoR",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzZOjoR"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZiDRfVY3o",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZiDR9l2Qo",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUz7iyJF",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUz7iyJF"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZn0N7jnEp",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZn0N4ZvQZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUzhSNlN",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUzhSNlN"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZqPoNIlvr",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzZOjoR",
              "sourceEdgeId": "YcwZqPofCX4z",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUytCI7x",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUytCI7x"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0xUPPHT5h",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "Ycx0xUPdp9WF",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyaP0gM",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyaP0gM"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZKeBsf9le",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZKeAy7TIm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyobOrK",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyobOrK"
          },
          {
            "newData": {
              "sourceClaimId": "YcwvEQ9d8Pc0",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwvEQ9dtcV6",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyJtEUm",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyJtEUm"
          },
          {
            "newData": {
              "sourceClaimId": "YcwVBMUu8vEM",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwVBMUlLQ6C",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy65xZA",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy65xZA"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWvmlpZY6R",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwWvmlOo0r9",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy6hAiw",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy6hAiw"
          },
          {
            "newData": {
              "sourceClaimId": "Y9Ui3Sg9m6Uu",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy6hAiw",
              "sourceEdgeId": "Y9Ui3SgbTPF5",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyJiq9y",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyJiq9y"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZNVsATvNN",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZNVsPTx9x",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyrEnlE",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyrEnlE"
          },
          {
            "newData": {
              "sourceClaimId": "Y9TGy49itihF",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyrEnlE",
              "sourceEdgeId": "Y9TG5APIKaSs",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy9TOAW",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy9TOAW"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyrEnlE",
              "sourceEdgeId": "YcwZH9JA46iW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUywHHd8",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUywHHd8"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZTwQAAfg5",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZTwQrVT2I",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUySfkY4",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUySfkY4"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx006j2uAng",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx006jmHwEH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyQ3R2S",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyQ3R2S"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZVA0YJbbi",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyQ3R2S",
              "sourceEdgeId": "YcwZVA0BtDLA",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUytQUVV",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUytQUVV"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0cCOAbEul",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx0cCOJ8TYG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyXZOSj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyXZOSj"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx04LnNw302",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyXZOSj",
              "sourceEdgeId": "Ycx04LnwzyUr",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyxLRRy",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyxLRRy"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx07h36VL0n",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyXZOSj",
              "sourceEdgeId": "Ycx07h21Y0uB",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy1PLs3",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy1PLs3"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0s5wgvcPj",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "Ycx0s5wDyPk4",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUy1ZyEj",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUy1ZyEj"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0iEXq9xoW",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy1ZyEj",
              "sourceEdgeId": "Ycx0iEWPnDjD",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyMGW7j",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyMGW7j"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx0plRhl3zO",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUy1ZyEj",
              "sourceEdgeId": "Ycx0plRP2JwW",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 1,
              "relevance": 1,
              "id": "Y6YsJUyLuf81",
              "priority": "",
              "type": "score"
            },
            "type": "add_score",
            "dataId": "Y6YsJUyLuf81"
          },
          {
            "newData": {
              "sourceClaimId": "YcwssONd3I42",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUDJSDdK",
              "sourceEdgeId": "YcwssONiqZVZ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUCMgGba",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUCMgGba"
          },
          {
            "newData": {
              "sourceClaimId": "YcwU4YhLrHhi",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwU4YhmbSj3",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.2,
              "relevance": 1,
              "id": "Y6YsJUDpF3Rz",
              "priority": "2",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUDpF3Rz"
          },
          {
            "newData": {
              "sourceClaimId": "YcwrnKbeEy2J",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwrnKbfpJdH",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUCeeDI6",
              "priority": "1",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUCeeDI6"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTEwq0tQaS",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTEwqQTxN9",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUBQZLFm",
              "priority": "3",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUBQZLFm"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTTLYmc4SE",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTTLYrE4W2",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUA6q375",
              "priority": "4",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUA6q375"
          },
          {
            "newData": {
              "sourceClaimId": "YcwqvyTjYnxt",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUASmPSY",
              "sourceEdgeId": "YcwqvyTme2dV",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.3333333333333333,
              "relevance": 1,
              "id": "Y6YsJUzoTCfR",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzoTCfR"
          },
          {
            "newData": {
              "sourceClaimId": "YcwTZMJHOOiB",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "YcwTZMJZEnsC",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.9333333333333333,
              "relevance": 1,
              "id": "Y6YsJUASmPSY",
              "priority": "6",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUASmPSY"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWfVedirgH",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzlJHdX",
              "sourceEdgeId": "YcwWfVemuLGe",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUzj0MpD",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzj0MpD"
          },
          {
            "newData": {
              "sourceClaimId": "YcwXdSgt9rac",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzEdmHw",
              "sourceEdgeId": "YcwXdSg99OjG",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.5,
              "relevance": 1,
              "id": "Y6YsJUzlJHdX",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzlJHdX"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZ5yc6mW6f",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUzjsbHz",
              "sourceEdgeId": "YcwZ5yc2Q6eQ",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.9545454545454546,
              "relevance": 1,
              "id": "Y6YsJUzEdmHw",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzEdmHw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwWvmlpZY6R",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyobOrK",
              "sourceEdgeId": "YcwWvmlOo0r9",
              "reversible": false,
              "pro": false,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUy6hAiw",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUy6hAiw"
          },
          {
            "newData": {
              "sourceClaimId": "YcwZKeBsf9le",
              "topScoreId": "topScore",
              "parentScoreId": "Y6YsJUyaP0gM",
              "sourceEdgeId": "YcwZKeAy7TIm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0,
              "relevance": 1,
              "id": "Y6YsJUyobOrK",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUyobOrK"
          },
          {
            "newData": {
              "sourceClaimId": "Ycx1g9OKDUUO",
              "topScoreId": "topScore",
              "parentScoreId": "topScore",
              "sourceEdgeId": "Ycx1g9NnjXWd",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.4832810867293626,
              "relevance": 1,
              "id": "Y6YsJUzjsbHz",
              "priority": "5",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "Y6YsJUzjsbHz"
          },
          {
            "newData": {
              "sourceClaimId": "Yk3JDShDv0lm",
              "topScoreId": "Yk3JDShDv0lm",
              "reversible": false,
              "pro": true,
              "affects": "confidence",
              "confidence": 0.6079262509037966,
              "relevance": 1,
              "id": "topScore",
              "priority": "",
              "type": "score"
            },
            "type": "modify_score",
            "dataId": "topScore"
          }
        ]
      ],
      "items": {
        "Y9T41tcPxgYu": {
          "parentId": "Y9TfKgNVeWfs",
          "childId": "Y9T41tcAuiFT",
          "affects": "confidence",
          "pro": true,
          "id": "Y9T41tcPxgYu",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9T41tcAuiFT": {
          "content": "New intermodal, sub-shipping-container standards are being used.",
          "id": "Y9T41tcAuiFT",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFgrefra73": {
          "content": "Upgrade Costs are $___.",
          "id": "Y9TFgrefra73",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFgrefupoq": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFgrefra73",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFgrefupoq",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TFjpl8AcGf": {
          "content": "Pauseway Costs are $___.",
          "id": "Y9TFjpl8AcGf",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFjpld7i3Y": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFjpl8AcGf",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFjpld7i3Y",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TFE5FYCgNl": {
          "content": "Flyway Costs are $___.",
          "id": "Y9TFE5FYCgNl",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFE5F0K0FH": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFE5FYCgNl",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFE5F0K0FH",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TFoeyfkJzQ": {
          "content": "Places Costs are $___.",
          "id": "Y9TFoeyfkJzQ",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFoeyiYh6m": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFoeyfkJzQ",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFoeyiYh6m",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TFrXhEKC3C": {
          "content": "Operations Costs are $___.",
          "id": "Y9TFrXhEKC3C",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFrXhm1sEQ": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFrXhEKC3C",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFrXhm1sEQ",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TFxkO5qIqD": {
          "content": "Ride Style Costs are $___.",
          "id": "Y9TFxkO5qIqD",
          "reversible": false,
          "type": "claim"
        },
        "Y9TFxkOIm3lp": {
          "parentId": "Y9TInryY9ZP1",
          "childId": "Y9TFxkO5qIqD",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TFxkOIm3lp",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TInryY9ZP1": {
          "content": "The Overall Costs are reasonable.",
          "id": "Y9TInryY9ZP1",
          "reversible": false,
          "type": "claim"
        },
        "Y9TInryH9YRE": {
          "parentId": "YcwrnKbeEy2J",
          "childId": "Y9TInryY9ZP1",
          "affects": "confidence",
          "pro": false,
          "id": "Y9TInryH9YRE",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwuSRjByl0V": {
          "parentId": "YcwU4YhLrHhi",
          "childId": "YcwuSRkXdQ4q",
          "affects": "confidence",
          "pro": false,
          "id": "YcwuSRjByl0V",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwuSRkXdQ4q": {
          "content": "The Ride Styles costs are reasonable at $______ in total.",
          "id": "YcwuSRkXdQ4q",
          "reversible": false,
          "type": "claim"
        },
        "Y9THYvSjQzlt": {
          "content": "The Overall Impact on the community is healthy.",
          "id": "Y9THYvSjQzlt",
          "reversible": false,
          "type": "claim"
        },
        "Y9THYvSqwPew": {
          "parentId": "YcwrnKbeEy2J",
          "childId": "Y9THYvSjQzlt",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THYvSqwPew",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TF30kibmU5": {
          "content": "Overall, the Flyway supports Business by lowering the financial and administrative costs of transportation of people and goods.",
          "id": "Y9TF30kibmU5",
          "reversible": false,
          "type": "claim"
        },
        "Y9TF30kQhSu8": {
          "parentId": "Y9TIgyROLnx6",
          "childId": "Y9TF30kibmU5",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TF30kQhSu8",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TEIdqMGRyY": {
          "parentId": "Y9TIgyROLnx6",
          "childId": "Y9TEIdq9R9sB",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TEIdqMGRyY",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TEIdq9R9sB": {
          "content": "Overall, the Flyway supports Recreational Activities by increasing the accessibility for all people.",
          "id": "Y9TEIdq9R9sB",
          "reversible": false,
          "type": "claim"
        },
        "Y9TG5APIKaSs": {
          "parentId": "YcwZNVsATvNN",
          "childId": "Y9TGy49itihF",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TG5APIKaSs",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THbOMY2O7F": {
          "parentId": "Y9THGf7ZPbu2",
          "childId": "Ycx0iEXq9xoW",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THbOMY2O7F",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TGy492vxFR": {
          "parentId": "Y9THMxb0Bzuc",
          "childId": "Y9TGy49itihF",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TGy492vxFR",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TGy49itihF": {
          "content": "• Appropriate School activities are available to Students",
          "id": "Y9TGy49itihF",
          "reversible": false,
          "type": "claim"
        },
        "Y9THMxb0Bzuc": {
          "content": "For Adolescents...",
          "id": "Y9THMxb0Bzuc",
          "reversible": false,
          "type": "claim"
        },
        "Y9THMxbDj1yX": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THMxb0Bzuc",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THMxbDj1yX",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THQNrpo74z": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THQNrAgNMM",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THQNrpo74z",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THQNrAgNMM": {
          "content": "For Children...",
          "id": "Y9THQNrAgNMM",
          "reversible": false,
          "type": "claim"
        },
        "Y9THGf7o6Ie1": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THGf7ZPbu2",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THGf7o6Ie1",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THGf7ZPbu2": {
          "content": "For Adults...",
          "id": "Y9THGf7ZPbu2",
          "reversible": false,
          "type": "claim"
        },
        "Y9THCbLLA2bj": {
          "content": "\nFor the Elderly...",
          "id": "Y9THCbLLA2bj",
          "reversible": false,
          "type": "claim"
        },
        "Y9THCbLQV0MK": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THCbLLA2bj",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THCbLQV0MK",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THxiUzqgKS": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THxiUg3Kmc",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THxiUzqgKS",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THxiUg3Kmc": {
          "content": "\nOn the Environment...",
          "id": "Y9THxiUg3Kmc",
          "reversible": false,
          "type": "claim"
        },
        "Y9THpGwirriI": {
          "parentId": "Y9THYvSjQzlt",
          "childId": "Y9THpGwTiBHE",
          "affects": "confidence",
          "pro": true,
          "id": "Y9THpGwirriI",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9THpGwTiBHE": {
          "content": "\nOther impacts on the Overall Community...",
          "id": "Y9THpGwTiBHE",
          "reversible": false,
          "type": "claim"
        },
        "Y9TI7BmxxxIo": {
          "parentId": "YcwrnKbeEy2J",
          "childId": "Y9TI7BmGwz0M",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TI7BmxxxIo",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TI7BmGwz0M": {
          "content": "The Overall Effects are technologically feasible.",
          "id": "Y9TI7BmGwz0M",
          "reversible": false,
          "type": "claim"
        },
        "Y9TIgyROLnx6": {
          "content": "The Overall Effects are desirable as a Common good.",
          "id": "Y9TIgyROLnx6",
          "reversible": false,
          "type": "claim"
        },
        "Y9TIgyR7x8ID": {
          "parentId": "YcwrnKbeEy2J",
          "childId": "Y9TIgyROLnx6",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TIgyR7x8ID",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZH9JA46iW": {
          "parentId": "YcwZNVsATvNN",
          "childId": "Ycx0iEXq9xoW",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZH9JA46iW",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0iEXq9xoW": {
          "content": "• Appropriate employment is more accessible to Residents(1).",
          "id": "Ycx0iEXq9xoW",
          "reversible": false,
          "type": "claim"
        },
        "Y9TJF8IcKUnx": {
          "parentId": "Y9UgVY4AGr7W",
          "childId": "Y9TJF8IQDkMs",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TJF8IcKUnx",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TJF8IQDkMs": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9TJF8IQDkMs",
          "reversible": false,
          "type": "claim"
        },
        "Y9TJVX1bnnDR": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9TJVX1bnnDR",
          "reversible": false,
          "type": "claim"
        },
        "Y9TJVX1kWysP": {
          "parentId": "Y9TK8oO0uaDV",
          "childId": "Y9TJVX1bnnDR",
          "affects": "confidence",
          "pro": false,
          "id": "Y9TJVX1kWysP",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TKxsQYa3Fp": {
          "parentId": "YcwnBzqmzaNi",
          "childId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TKxsQYa3Fp",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TJZrzuAYW4": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9TJZrzuAYW4",
          "reversible": false,
          "type": "claim"
        },
        "Ycx19cy5G7Wv": {
          "parentId": "Ycx1g9OKDUUO",
          "childId": "Ycx19cye5Xyw",
          "affects": "confidence",
          "pro": false,
          "id": "Ycx19cy5G7Wv",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx19cye5Xyw": {
          "content": "The Flyway costs are reasonable.",
          "id": "Ycx19cye5Xyw",
          "reversible": false,
          "type": "claim"
        },
        "Y9UgJaGTrYix": {
          "parentId": "Y9UgVY4AGr7W",
          "childId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "affects": "confidence",
          "pro": true,
          "id": "Y9UgJaGTrYix",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TK74YNQCmH": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.2",
          "id": "Y9TK74YNQCmH",
          "reversible": false,
          "type": "claim"
        },
        "Y9TKbfW43fkb": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9TKbfW43fkb",
          "reversible": false,
          "type": "claim"
        },
        "Y9TKgOAjZUUg": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9TKgOAjZUUg",
          "reversible": false,
          "type": "claim"
        },
        "Y9TKtuN2qlRR": {
          "content": "",
          "id": "Y9TKtuN2qlRR",
          "reversible": false,
          "type": "claim"
        },
        "Ycwq20oYam0l": {
          "parentId": "YcwqvyTjYnxt",
          "childId": "Ycwq20poMoPU",
          "affects": "confidence",
          "pro": false,
          "id": "Ycwq20oYam0l",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwq20poMoPU": {
          "content": "Maintenance costs: $___",
          "id": "Ycwq20poMoPU",
          "reversible": false,
          "type": "claim"
        },
        "Y9TLlAsLsCVz": {
          "parentId": "YcwU4YhLrHhi",
          "childId": "Y9TLlAsPn0SI",
          "affects": "confidence",
          "pro": false,
          "id": "Y9TLlAsLsCVz",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TLlAsPn0SI": {
          "content": "Other issues about Rides Styles",
          "id": "Y9TLlAsPn0SI",
          "reversible": false,
          "type": "claim"
        },
        "Y9TcaDTmDeTG": {
          "parentId": "YcwTTLYmc4SE",
          "childId": "Y9TcaDTTNiJw",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TcaDTmDeTG",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TcaDTTNiJw": {
          "content": "New zoning and revenue collection methods in each Place are technologically feasible.",
          "id": "Y9TcaDTTNiJw",
          "reversible": false,
          "type": "claim"
        },
        "Y9TcgUvJ4wHg": {
          "parentId": "YcwTTLYmc4SE",
          "childId": "Y9TcgUvGR6LW",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TcgUvJ4wHg",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TcgUvGR6LW": {
          "content": "The Places become more desirable with increased amenities.",
          "id": "Y9TcgUvGR6LW",
          "reversible": false,
          "type": "claim"
        },
        "Y9TbSxEkr0xI": {
          "content": "The impact of amenity saturated Places is healthy for the community.",
          "id": "Y9TbSxEkr0xI",
          "reversible": false,
          "type": "claim"
        },
        "Y9TbSxE9fAwG": {
          "parentId": "YcwTTLYmc4SE",
          "childId": "Y9TbSxEkr0xI",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TbSxE9fAwG",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TcYmCtm1iM": {
          "content": "Zoning Changes within 5000' radius are changed which will cost $___.",
          "id": "Y9TcYmCtm1iM",
          "reversible": false,
          "type": "claim"
        },
        "Y9TcYmCLr4vt": {
          "parentId": "Y9TdhXWy50Qt",
          "childId": "Y9TcYmCtm1iM",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TcYmCLr4vt",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TcIgyyNXoT": {
          "parentId": "Y9TdhXWy50Qt",
          "childId": "Y9TcIgyQ2ZHn",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TcIgyyNXoT",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TcIgyQ2ZHn": {
          "content": "Revenue collecting system, from buildings occupying the above-ground commons, will cost $___.",
          "id": "Y9TcIgyQ2ZHn",
          "reversible": false,
          "type": "claim"
        },
        "Y9TdhXW9ZAJv": {
          "parentId": "YcwTTLYmc4SE",
          "childId": "Y9TdhXWy50Qt",
          "affects": "confidence",
          "pro": false,
          "id": "Y9TdhXW9ZAJv",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TdhXWy50Qt": {
          "content": "The costs to adapt Places is reasonable @ $____.",
          "id": "Y9TdhXWy50Qt",
          "reversible": false,
          "type": "claim"
        },
        "Y9TdJ1H3XbM4": {
          "parentId": "Y9TeYlSlUprf",
          "childId": "Y9TdJ1HVW2nV",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TdJ1H3XbM4",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TdJ1HVW2nV": {
          "content": "For Adolescents...",
          "id": "Y9TdJ1HVW2nV",
          "reversible": false,
          "type": "claim"
        },
        "Y9Te9uZGqOdJ": {
          "parentId": "Y9TePaPJOYwx",
          "childId": "Y9Te9uZYt1vG",
          "affects": "confidence",
          "pro": true,
          "id": "Y9Te9uZGqOdJ",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9Te9uZYt1vG": {
          "content": "More specializations of work accommodate higher-quality production, increasing the relevance of the community in a global marketplace.",
          "id": "Y9Te9uZYt1vG",
          "reversible": false,
          "type": "claim"
        },
        "Y9TdtyNmcBDy": {
          "parentId": "Y9Tf6kJon28e",
          "childId": "Y9TdtyNBg7Ki",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TdtyNmcBDy",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TdtyNBg7Ki": {
          "content": "For Adolescents...",
          "id": "Y9TdtyNBg7Ki",
          "reversible": false,
          "type": "claim"
        },
        "Y9TeYlS6Vst0": {
          "parentId": "Y9Tf6kJon28e",
          "childId": "Y9TeYlSlUprf",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TeYlS6Vst0",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TeYlSlUprf": {
          "content": "For Children...",
          "id": "Y9TeYlSlUprf",
          "reversible": false,
          "type": "claim"
        },
        "Y9TePaPJOYwx": {
          "content": "For businesses, the Pauseway supports entrepreneurial shops which can be rented, which supports new amenity testing to validate community desired amenities in each Place.",
          "id": "Y9TePaPJOYwx",
          "reversible": false,
          "type": "claim"
        },
        "Y9TePaP7h5Yx": {
          "parentId": "Y9TgvzAGlUyN",
          "childId": "Y9TePaPJOYwx",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TePaP7h5Yx",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9Tf6kJjfLuI": {
          "parentId": "YcwTEwq0tQaS",
          "childId": "Y9Tf6kJon28e",
          "affects": "confidence",
          "pro": true,
          "id": "Y9Tf6kJjfLuI",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9Tf6kJon28e": {
          "content": "The Pauseway's impact on the community is healthy.",
          "id": "Y9Tf6kJon28e",
          "reversible": false,
          "type": "claim"
        },
        "Y9TfKgNWUXEm": {
          "parentId": "YcwTEwq0tQaS",
          "childId": "Y9TfKgNVeWfs",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TfKgNWUXEm",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TfKgNVeWfs": {
          "content": "Building the Pauseways is technologically feasible using a design competition, followed by a developer turn-key construction process.",
          "id": "Y9TfKgNVeWfs",
          "reversible": false,
          "type": "claim"
        },
        "Y9TfTvvCvufC": {
          "parentId": "Y9TgM3n4FauF",
          "childId": "Y9TfTvvSVxlW",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TfTvvCvufC",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TfTvvSVxlW": {
          "content": "The Pauseway Maintenance costs are $___.",
          "id": "Y9TfTvvSVxlW",
          "reversible": false,
          "type": "claim"
        },
        "Y9TfYKKosiuv": {
          "parentId": "Y9TgM3n4FauF",
          "childId": "Y9TfYKKX7ZsM",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TfYKKosiuv",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TfYKKX7ZsM": {
          "content": "The goods distribution center costs are $____.",
          "id": "Y9TfYKKX7ZsM",
          "reversible": false,
          "type": "claim"
        },
        "Y9Tg4mGfFPes": {
          "content": "The Pauseway Pavillion costs are $____.",
          "id": "Y9Tg4mGfFPes",
          "reversible": false,
          "type": "claim"
        },
        "Y9Tg4mFdaNqu": {
          "parentId": "Y9TgM3n4FauF",
          "childId": "Y9Tg4mGfFPes",
          "affects": "confidence",
          "pro": true,
          "id": "Y9Tg4mFdaNqu",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TgeP4jEcUR": {
          "content": "The Plaza Costs are $____. ",
          "id": "Y9TgeP4jEcUR",
          "reversible": false,
          "type": "claim"
        },
        "Y9TgeP46Y2g9": {
          "parentId": "Y9TgM3n4FauF",
          "childId": "Y9TgeP4jEcUR",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TgeP46Y2g9",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TgM3n4UrmX": {
          "parentId": "YcwTEwq0tQaS",
          "childId": "Y9TgM3n4FauF",
          "affects": "confidence",
          "pro": false,
          "id": "Y9TgM3n4UrmX",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TgM3n4FauF": {
          "content": "The Pauseway costs are reasonable @ $___.",
          "id": "Y9TgM3n4FauF",
          "reversible": false,
          "type": "claim"
        },
        "Y9TgogYlMDpH": {
          "parentId": "Y9TgM3n4FauF",
          "childId": "Y9TgogYk4fwW",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TgogYlMDpH",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TgogYk4fwW": {
          "content": "Property Costs are negotiated with ___.",
          "id": "Y9TgogYk4fwW",
          "reversible": false,
          "type": "claim"
        },
        "Y9TgvzA7Ci85": {
          "parentId": "YcwTEwq0tQaS",
          "childId": "Y9TgvzAGlUyN",
          "affects": "confidence",
          "pro": true,
          "id": "Y9TgvzA7Ci85",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9TgvzAGlUyN": {
          "content": "The Pauseways are desirable.",
          "id": "Y9TgvzAGlUyN",
          "reversible": false,
          "type": "claim"
        },
        "Y9UgfJxErzpm": {
          "content": "It is technologically feasible to provide modular Ride Styles in a single-vehicle. (also with provisions for intermodal goods distribution)",
          "id": "Y9UgfJxErzpm",
          "reversible": false,
          "type": "claim"
        },
        "Y9UgfJwAUmA1": {
          "parentId": "YcwU4YhLrHhi",
          "childId": "Y9UgfJxErzpm",
          "affects": "confidence",
          "pro": true,
          "id": "Y9UgfJwAUmA1",
          "priority": "",
          "type": "claimEdge"
        },
        "Y9UgJaGX1Unz": {
          "content": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "id": "Y9UgJaGX1Unz",
          "reversible": false,
          "type": "claim"
        },
        "Y9UgVY4AGr7W": {
          "content": "The Ride Styles increase community health.",
          "id": "Y9UgVY4AGr7W",
          "reversible": false,
          "type": "claim"
        },
        "Y9UgVY4ernKK": {
          "parentId": "YcwU4YhLrHhi",
          "childId": "Y9UgVY4AGr7W",
          "affects": "confidence",
          "pro": true,
          "id": "Y9UgVY4ernKK",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwU4YhmbSj3": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "YcwU4YhLrHhi",
          "affects": "confidence",
          "pro": true,
          "id": "YcwU4YhmbSj3",
          "priority": "2",
          "type": "claimEdge"
        },
        "YcwU4YhLrHhi": {
          "content": "The Ride Styles (level 2) provide increased comfort to travelers.",
          "id": "YcwU4YhLrHhi",
          "reversible": false,
          "type": "claim"
        },
        "Y9Ui3Sg9m6Uu": {
          "content": "Many areas around existing highways are ugly, however, the infiniteTransit flyway is significantly more slender and eliminates the dirt and grime caused by rubber wheels on asphalt roadways.",
          "id": "Y9Ui3Sg9m6Uu",
          "reversible": false,
          "type": "claim"
        },
        "Y9Ui3SgbTPF5": {
          "parentId": "YcwWvmlpZY6R",
          "childId": "Y9Ui3Sg9m6Uu",
          "affects": "confidence",
          "pro": false,
          "id": "Y9Ui3SgbTPF5",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwrnKbfpJdH": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "YcwrnKbeEy2J",
          "affects": "confidence",
          "pro": true,
          "id": "YcwrnKbfpJdH",
          "priority": "1",
          "type": "claimEdge"
        },
        "YcwrnKbeEy2J": {
          "content": "The Overall Effects (level 1) will provide common value to most people, most of the time.",
          "id": "YcwrnKbeEy2J",
          "reversible": false,
          "type": "claim"
        },
        "YcwTEwq0tQaS": {
          "content": "The Pauseways (level 3) provide value to local entrepreneurs.",
          "id": "YcwTEwq0tQaS",
          "reversible": false,
          "type": "claim"
        },
        "YcwTEwqQTxN9": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "YcwTEwq0tQaS",
          "affects": "confidence",
          "pro": true,
          "id": "YcwTEwqQTxN9",
          "priority": "3",
          "type": "claimEdge"
        },
        "YcwTTLYmc4SE": {
          "content": "New renovations and construction in Places (level 4) will create amenity-saturated environments",
          "id": "YcwTTLYmc4SE",
          "reversible": false,
          "type": "claim"
        },
        "YcwTTLYrE4W2": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "YcwTTLYmc4SE",
          "affects": "confidence",
          "pro": true,
          "id": "YcwTTLYrE4W2",
          "priority": "4",
          "type": "claimEdge"
        },
        "YcwTZMJHOOiB": {
          "content": "The Operations (level 6) are socio-economically sustainable.",
          "id": "YcwTZMJHOOiB",
          "reversible": false,
          "type": "claim"
        },
        "YcwTZMJZEnsC": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "YcwTZMJHOOiB",
          "affects": "confidence",
          "pro": true,
          "id": "YcwTZMJZEnsC",
          "priority": "6",
          "type": "claimEdge"
        },
        "Ycx1g9NnjXWd": {
          "parentId": "Yk3JDShDv0lm",
          "childId": "Ycx1g9OKDUUO",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx1g9NnjXWd",
          "priority": "5",
          "type": "claimEdge"
        },
        "Ycx1g9OKDUUO": {
          "content": "The Flyway (level5) will add to metropolis-wide economic vitality.",
          "id": "Ycx1g9OKDUUO",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0QegTUbav": {
          "content": "Design Costs: $______",
          "id": "Ycx0QegTUbav",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0QegP2z8L": {
          "parentId": "Ycx19cye5Xyw",
          "childId": "Ycx0QegTUbav",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0QegP2z8L",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0Vhohu7ov": {
          "parentId": "Ycx19cye5Xyw",
          "childId": "Ycx0Vho9oTa9",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0Vhohu7ov",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0Vho9oTa9": {
          "content": "Right of Way Costs: $______",
          "id": "Ycx0Vho9oTa9",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0J2XMaVvE": {
          "content": "Testing and Commissioning Costs: $______",
          "id": "Ycx0J2XMaVvE",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0J2XviYIk": {
          "parentId": "Ycx19cye5Xyw",
          "childId": "Ycx0J2XMaVvE",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0J2XviYIk",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0LQY0TlvA": {
          "content": "Construction Costs: $______",
          "id": "Ycx0LQY0TlvA",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0LQX18z62": {
          "parentId": "Ycx19cye5Xyw",
          "childId": "Ycx0LQY0TlvA",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0LQX18z62",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwUTI4WyqWS": {
          "parentId": "YcwXdSgt9rac",
          "childId": "YcwUTI4fcydo",
          "affects": "confidence",
          "pro": true,
          "id": "YcwUTI4WyqWS",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwUTI4fcydo": {
          "content": "• The Flyway will have less impact than drones, because it is not intrusive.",
          "id": "YcwUTI4fcydo",
          "reversible": false,
          "type": "claim"
        },
        "YcwUu4XZPU0r": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwUu4Y624Xt",
          "affects": "confidence",
          "pro": true,
          "id": "YcwUu4XZPU0r",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwUu4Y624Xt": {
          "content": "For Others, ...",
          "id": "YcwUu4Y624Xt",
          "reversible": false,
          "type": "claim"
        },
        "YcwV9sRp7l19": {
          "content": "The Flyway will have less impact than concrete roadways.",
          "id": "YcwV9sRp7l19",
          "reversible": false,
          "type": "claim"
        },
        "YcwV9sRZqrJW": {
          "parentId": "YcwXdSgt9rac",
          "childId": "YcwV9sRp7l19",
          "affects": "confidence",
          "pro": true,
          "id": "YcwV9sRZqrJW",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwVS2YTmr62": {
          "parentId": "YcwWfVedirgH",
          "childId": "YcwVS2YZyXxC",
          "affects": "confidence",
          "pro": false,
          "id": "YcwVS2YTmr62",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwVS2YZyXxC": {
          "content": "infiniteTransit operating noise will be below ___dB, which is equivalent to a windy day.",
          "id": "YcwVS2YZyXxC",
          "reversible": false,
          "type": "claim"
        },
        "YcwWfVedirgH": {
          "content": "infiniteTransit will cause noise pollution.",
          "id": "YcwWfVedirgH",
          "reversible": false,
          "type": "claim"
        },
        "YcwWfVemuLGe": {
          "parentId": "YcwXdSgt9rac",
          "childId": "YcwWfVedirgH",
          "affects": "confidence",
          "pro": false,
          "id": "YcwWfVemuLGe",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwXdSgt9rac": {
          "content": "For the environment, infiniteTransit reduces the amount of energy requires to distribute goods and people's travel needs. ",
          "id": "YcwXdSgt9rac",
          "reversible": false,
          "type": "claim"
        },
        "YcwXdSg99OjG": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwXdSgt9rac",
          "affects": "confidence",
          "pro": true,
          "id": "YcwXdSg99OjG",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwWPE9f5C1G": {
          "parentId": "YcwXdSgt9rac",
          "childId": "YcwWPE9z7lOa",
          "affects": "confidence",
          "pro": false,
          "id": "YcwWPE9f5C1G",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwWPE9z7lOa": {
          "content": "infiniteTransit will require building infrastructure in above wetlands.",
          "id": "YcwWPE9z7lOa",
          "reversible": false,
          "type": "claim"
        },
        "YcwY0PRuzUjd": {
          "content": "For adults, infiniteTransit provides different Rides for different travel needs, without the hassles of parking.",
          "id": "YcwY0PRuzUjd",
          "reversible": false,
          "type": "claim"
        },
        "YcwY0PRziqQv": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwY0PRuzUjd",
          "affects": "confidence",
          "pro": true,
          "id": "YcwY0PRziqQv",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwXJhgqAP7J": {
          "content": "For the elderly, infiniteTransit allows traveling without the need to drive and accommodates pedestrian accessories like wheelchairs.",
          "id": "YcwXJhgqAP7J",
          "reversible": false,
          "type": "claim"
        },
        "YcwXJhgz0t8y": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwXJhgqAP7J",
          "affects": "confidence",
          "pro": true,
          "id": "YcwXJhgz0t8y",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwYsfQj9xi9": {
          "content": "For adolescents, the \"Learning-Ride\" provides an extremely safe, trackable, travel experience where they can learn about people and places.",
          "id": "YcwYsfQj9xi9",
          "reversible": false,
          "type": "claim"
        },
        "YcwYsfQHEPHV": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwYsfQj9xi9",
          "affects": "confidence",
          "pro": true,
          "id": "YcwYsfQHEPHV",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwYSU9WijLa": {
          "content": "For children, it is more civilized to travel on infiniteTransit than to be tied down in a \"Car-Seat\"",
          "id": "YcwYSU9WijLa",
          "reversible": false,
          "type": "claim"
        },
        "YcwYSU9Ih1ex": {
          "parentId": "YcwZ5yc6mW6f",
          "childId": "YcwYSU9WijLa",
          "affects": "confidence",
          "pro": true,
          "id": "YcwYSU9Ih1ex",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZ5yc6mW6f": {
          "content": "The Flyway's impact on the community is healthy.",
          "id": "YcwZ5yc6mW6f",
          "reversible": false,
          "type": "claim"
        },
        "YcwZ5yc2Q6eQ": {
          "parentId": "Ycx1g9OKDUUO",
          "childId": "YcwZ5yc6mW6f",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZ5yc2Q6eQ",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZH9JFpcRF": {
          "content": "• Appropriate school activities are more accessible to Students(2).",
          "id": "YcwZH9JFpcRF",
          "reversible": false,
          "type": "claim"
        },
        "YcwZKeAy7TIm": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "YcwZKeBsf9le",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZKeAy7TIm",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZKeBsf9le": {
          "content": "Other…",
          "id": "YcwZKeBsf9le",
          "reversible": false,
          "type": "claim"
        },
        "YcwZNVsATvNN": {
          "content": "Education will improve as Schools can share higher-quality, specialized programs with focused students from across the metropolis.",
          "id": "YcwZNVsATvNN",
          "reversible": false,
          "type": "claim"
        },
        "YcwZNVsPTx9x": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "YcwZNVsATvNN",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZNVsPTx9x",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZTwQrVT2I": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "YcwZTwQAAfg5",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZTwQrVT2I",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZTwQAAfg5": {
          "content": "Health is improved by providing more useable walkable environments.",
          "id": "YcwZTwQAAfg5",
          "reversible": false,
          "type": "claim"
        },
        "YcwZVA0BtDLA": {
          "parentId": "Ycx006j2uAng",
          "childId": "YcwZVA0YJbbi",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZVA0BtDLA",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZVA0YJbbi": {
          "content": "People who live in one Place and work in a different Place, can express strong interests in both places.",
          "id": "YcwZVA0YJbbi",
          "reversible": false,
          "type": "claim"
        },
        "Ycx006j2uAng": {
          "content": "Governance Facilities are more visibly associated with the Places they serve.",
          "id": "Ycx006j2uAng",
          "reversible": false,
          "type": "claim"
        },
        "Ycx006jmHwEH": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "Ycx006j2uAng",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx006jmHwEH",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZiDR9l2Qo": {
          "parentId": "YcwZyHGKeHz0",
          "childId": "YcwZiDRfVY3o",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZiDR9l2Qo",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZiDRfVY3o": {
          "content": "Latest Long-Span Flyway Structures",
          "id": "YcwZiDRfVY3o",
          "reversible": false,
          "type": "claim"
        },
        "YcwZn0N4ZvQZ": {
          "parentId": "YcwZyHGKeHz0",
          "childId": "YcwZn0N7jnEp",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZn0N4ZvQZ",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZn0N7jnEp": {
          "content": "Innovative Assemblies",
          "id": "YcwZn0N7jnEp",
          "reversible": false,
          "type": "claim"
        },
        "YcwZqPoNIlvr": {
          "content": "Latest Vehicle Technology",
          "id": "YcwZqPoNIlvr",
          "reversible": false,
          "type": "claim"
        },
        "YcwZqPofCX4z": {
          "parentId": "YcwZyHGKeHz0",
          "childId": "YcwZqPoNIlvr",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZqPofCX4z",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwZyHGKeHz0": {
          "content": "The Flyway is technologically feasible.",
          "id": "YcwZyHGKeHz0",
          "reversible": false,
          "type": "claim"
        },
        "YcwZyHGsDdUO": {
          "parentId": "Ycx1g9OKDUUO",
          "childId": "YcwZyHGKeHz0",
          "affects": "confidence",
          "pro": true,
          "id": "YcwZyHGsDdUO",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnFKpJiqBm": {
          "parentId": "Ycwo1rAUEeM4",
          "childId": "YcwnFKpFi0eE",
          "affects": "confidence",
          "pro": true,
          "id": "YcwnFKpJiqBm",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnFKpFi0eE": {
          "content": "For adolescents ",
          "id": "YcwnFKpFi0eE",
          "reversible": false,
          "type": "claim"
        },
        "YcwnV8ewBcMC": {
          "parentId": "Ycwo1rAUEeM4",
          "childId": "YcwnV8ehmfP2",
          "affects": "confidence",
          "pro": true,
          "id": "YcwnV8ewBcMC",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnV8ehmfP2": {
          "content": "For children traveling with adults.",
          "id": "YcwnV8ehmfP2",
          "reversible": false,
          "type": "claim"
        },
        "Ycwo1rAUEeM4": {
          "content": "The Operations' impact on the community is healthy.",
          "id": "Ycwo1rAUEeM4",
          "reversible": false,
          "type": "claim"
        },
        "Ycwo1rz4ePWu": {
          "parentId": "YcwTZMJHOOiB",
          "childId": "Ycwo1rAUEeM4",
          "affects": "confidence",
          "pro": true,
          "id": "Ycwo1rz4ePWu",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnqMGUnIlp": {
          "content": "On the envirionment",
          "id": "YcwnqMGUnIlp",
          "reversible": false,
          "type": "claim"
        },
        "YcwnqMG1k6WV": {
          "parentId": "Ycwo1rAUEeM4",
          "childId": "YcwnqMGUnIlp",
          "affects": "confidence",
          "pro": true,
          "id": "YcwnqMG1k6WV",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnuFtVSNg9": {
          "content": "For the elderly",
          "id": "YcwnuFtVSNg9",
          "reversible": false,
          "type": "claim"
        },
        "YcwnuFtBTDc0": {
          "parentId": "Ycwo1rAUEeM4",
          "childId": "YcwnuFtVSNg9",
          "affects": "confidence",
          "pro": true,
          "id": "YcwnuFtBTDc0",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnBzqJh0rw": {
          "parentId": "Ycwo1rAUEeM4",
          "childId": "YcwnBzqmzaNi",
          "affects": "confidence",
          "pro": true,
          "id": "YcwnBzqJh0rw",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwnBzqmzaNi": {
          "content": "For adults interacting with each other.",
          "id": "YcwnBzqmzaNi",
          "reversible": false,
          "type": "claim"
        },
        "YcwoGIQXqTbE": {
          "content": "Concierge/ethnography is essential to Travel Services Feedback",
          "id": "YcwoGIQXqTbE",
          "reversible": false,
          "type": "claim"
        },
        "YcwoGIQ9rwlP": {
          "parentId": "YcwoSEAkfPBn",
          "childId": "YcwoGIQXqTbE",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoGIQ9rwlP",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoMap1LI2e": {
          "content": "These new jobs can be staffed by people knowledgeable about the metropolis and helpful demeanor. Pensions are included and old and young can apply.",
          "id": "YcwoMap1LI2e",
          "reversible": false,
          "type": "claim"
        },
        "YcwoMap1OBEz": {
          "parentId": "YcwoSEAkfPBn",
          "childId": "YcwoMap1LI2e",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoMap1OBEz",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoO4eQuKVw": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "YcwoO4ep0jVa",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoO4eQuKVw",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoO4ep0jVa": {
          "content": "Other…",
          "id": "YcwoO4ep0jVa",
          "reversible": false,
          "type": "claim"
        },
        "YcwoSEAscusp": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "YcwoSEAkfPBn",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoSEAscusp",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoSEAkfPBn": {
          "content": "Education is provided by many service personnel at each Pauseway.",
          "id": "YcwoSEAkfPBn",
          "reversible": false,
          "type": "claim"
        },
        "YcwoVo2Hsa1J": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "YcwoVo2hiCVn",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoVo2Hsa1J",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoVo2hiCVn": {
          "content": "Healthy funding includes incentives that lower fares, increase desirability, and increase real-estate value to a Pauseway's 1-mile radius.",
          "id": "YcwoVo2hiCVn",
          "reversible": false,
          "type": "claim"
        },
        "YcwoYacmVwdi": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "YcwoYadHSsCb",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoYacmVwdi",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoYadHSsCb": {
          "content": "InfiniteTransit Governance is a consortium of entities incentivized to provide excellent travel services.",
          "id": "YcwoYadHSsCb",
          "reversible": false,
          "type": "claim"
        },
        "Ycwp13o5mup3": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "Ycwp13o2PKIJ",
          "affects": "confidence",
          "pro": true,
          "id": "Ycwp13o5mup3",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwp13o2PKIJ": {
          "content": "Funding includes Upgrade provisions and open systems to maintain desirability across changing fads, trends, and generations",
          "id": "Ycwp13o2PKIJ",
          "reversible": false,
          "type": "claim"
        },
        "YcwolT0su4S1": {
          "parentId": "YcwoxlFMUVIO",
          "childId": "YcwolT0zNqaS",
          "affects": "confidence",
          "pro": true,
          "id": "YcwolT0su4S1",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwolT0zNqaS": {
          "content": "Smart-Contract Incremental Real-Estate Revenue",
          "id": "YcwolT0zNqaS",
          "reversible": false,
          "type": "claim"
        },
        "Ycwoqn8RaOtB": {
          "content": "Latest Digital Tracking",
          "id": "Ycwoqn8RaOtB",
          "reversible": false,
          "type": "claim"
        },
        "Ycwoqn8mFSL8": {
          "parentId": "YcwoxlFMUVIO",
          "childId": "Ycwoqn8RaOtB",
          "affects": "confidence",
          "pro": true,
          "id": "Ycwoqn8mFSL8",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoxlFXTlnQ": {
          "parentId": "YcwTZMJHOOiB",
          "childId": "YcwoxlFMUVIO",
          "affects": "confidence",
          "pro": true,
          "id": "YcwoxlFXTlnQ",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwoxlFMUVIO": {
          "content": "The Operations are technologically feasible.",
          "id": "YcwoxlFMUVIO",
          "reversible": false,
          "type": "claim"
        },
        "YcwpgOjLkaMC": {
          "content": "The Operations are desirable.",
          "id": "YcwpgOjLkaMC",
          "reversible": false,
          "type": "claim"
        },
        "YcwpgOjVTctj": {
          "parentId": "YcwTZMJHOOiB",
          "childId": "YcwpgOjLkaMC",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpgOjVTctj",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpaGSyI49j": {
          "parentId": "YcwpgOjLkaMC",
          "childId": "YcwpaGStHuSe",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpaGSyI49j",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpaGStHuSe": {
          "content": "Business investors receive market-rate returns and no more.",
          "id": "YcwpaGStHuSe",
          "reversible": false,
          "type": "claim"
        },
        "YcwpG58ZroVA": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpG5820H98",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpG58ZroVA",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpG5820H98": {
          "content": "Pauseway Maintenance: $___",
          "id": "YcwpG5820H98",
          "reversible": false,
          "type": "claim"
        },
        "YcwpIrQe4440": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpIrQfItEu",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpIrQe4440",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpIrQfItEu": {
          "content": "Places Maintenance: $___",
          "id": "YcwpIrQfItEu",
          "reversible": false,
          "type": "claim"
        },
        "YcwpMrjpL9m1": {
          "content": "Operations Maintenance: $___",
          "id": "YcwpMrjpL9m1",
          "reversible": false,
          "type": "claim"
        },
        "YcwpMrjoniYi": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpMrjpL9m1",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpMrjoniYi",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpRoELsiUg": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpRoEeC7z0",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpRoELsiUg",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpRoEeC7z0": {
          "content": "Ride Maintenance: $___",
          "id": "YcwpRoEeC7z0",
          "reversible": false,
          "type": "claim"
        },
        "YcwpW8gkk9Ga": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpW8gNm6qi",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpW8gkk9Ga",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpW8gNm6qi": {
          "content": "Flyway Maintenance: $___",
          "id": "YcwpW8gNm6qi",
          "reversible": false,
          "type": "claim"
        },
        "YcwpBc4K1a2K": {
          "parentId": "Ycwq20poMoPU",
          "childId": "YcwpBc5lFqsy",
          "affects": "confidence",
          "pro": true,
          "id": "YcwpBc4K1a2K",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwpBc5lFqsy": {
          "content": "Upgrade Planning: $___",
          "id": "YcwpBc5lFqsy",
          "reversible": false,
          "type": "claim"
        },
        "YcwqhF1WfPOD": {
          "content": "Systems Development and Upgrade costs: $___",
          "id": "YcwqhF1WfPOD",
          "reversible": false,
          "type": "claim"
        },
        "YcwqhF1VRaXR": {
          "parentId": "YcwqvyTjYnxt",
          "childId": "YcwqhF1WfPOD",
          "affects": "confidence",
          "pro": true,
          "id": "YcwqhF1VRaXR",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwqq42NW2al": {
          "parentId": "YcwqvyTjYnxt",
          "childId": "Ycwqq42IyIvf",
          "affects": "confidence",
          "pro": true,
          "id": "Ycwqq42NW2al",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwqq42IyIvf": {
          "content": "Consortium Management costs: $___",
          "id": "Ycwqq42IyIvf",
          "reversible": false,
          "type": "claim"
        },
        "YcwqvyTme2dV": {
          "parentId": "YcwTZMJHOOiB",
          "childId": "YcwqvyTjYnxt",
          "affects": "confidence",
          "pro": true,
          "id": "YcwqvyTme2dV",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwqvyTjYnxt": {
          "content": "The Operations costs are reasonable.",
          "id": "YcwqvyTjYnxt",
          "reversible": false,
          "type": "claim"
        },
        "YcwrREJFVhlc": {
          "content": "Older people may enjoy taking the Learning Rides because it keeps them aware of community events.",
          "id": "YcwrREJFVhlc",
          "reversible": false,
          "type": "claim"
        },
        "YcwrREJZALVp": {
          "parentId": "Ycws7MzAX7X9",
          "childId": "YcwrREJFVhlc",
          "affects": "confidence",
          "pro": true,
          "id": "YcwrREJZALVp",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwrWu5hgDN4": {
          "parentId": "Ycws7MzAX7X9",
          "childId": "YcwrWu5ASVdH",
          "affects": "confidence",
          "pro": true,
          "id": "YcwrWu5hgDN4",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwrWu5ASVdH": {
          "content": "• Younger people can safely travel in the Learning Ride, with the toughest safety restrictions and coordination of before and after-Ride secure continuation of safety.",
          "id": "YcwrWu5ASVdH",
          "reversible": false,
          "type": "claim"
        },
        "Ycws7MzLbJ5c": {
          "parentId": "YcwubNjnLtJI",
          "childId": "Ycws7MzAX7X9",
          "affects": "confidence",
          "pro": true,
          "id": "Ycws7MzLbJ5c",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycws7MzAX7X9": {
          "content": "Education about the opportunities for living in Houston are visible when people take the Learning Rides.",
          "id": "Ycws7MzAX7X9",
          "reversible": false,
          "type": "claim"
        },
        "YcwrGvlEgd9S": {
          "parentId": "YcwubNjnLtJI",
          "childId": "YcwrGvlcLhN6",
          "affects": "confidence",
          "pro": true,
          "id": "YcwrGvlEgd9S",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwrGvlcLhN6": {
          "content": "Other… It's a great way to show visitors around the city.",
          "id": "YcwrGvlcLhN6",
          "reversible": false,
          "type": "claim"
        },
        "YcwsdFi9AG6N": {
          "content": "Healthy interactions with fellow residents is more possible when people in similar moods travel in a comfortable environment.",
          "id": "YcwsdFi9AG6N",
          "reversible": false,
          "type": "claim"
        },
        "YcwsdFicYATw": {
          "parentId": "YcwubNjnLtJI",
          "childId": "YcwsdFi9AG6N",
          "affects": "confidence",
          "pro": true,
          "id": "YcwsdFicYATw",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwsnlUAGAc0": {
          "parentId": "YcwssONd3I42",
          "childId": "YcwsnlUgoOSN",
          "affects": "confidence",
          "pro": false,
          "id": "YcwsnlUAGAc0",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwsnlUgoOSN": {
          "content": "Existing transit companies don't want the competition.",
          "id": "YcwsnlUgoOSN",
          "reversible": false,
          "type": "claim"
        },
        "YcwssONd3I42": {
          "content": "Local government officials will support increased resident cooperation.",
          "id": "YcwssONd3I42",
          "reversible": false,
          "type": "claim"
        },
        "YcwssONiqZVZ": {
          "parentId": "YcwubNjnLtJI",
          "childId": "YcwssONd3I42",
          "affects": "confidence",
          "pro": true,
          "id": "YcwssONiqZVZ",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwsykq5pyBn": {
          "content": "Recreational activities are supported by the Playing Rides, which support carrying sporting gear.",
          "id": "Ycwsykq5pyBn",
          "reversible": false,
          "type": "claim"
        },
        "YcwsykqaXqa3": {
          "parentId": "YcwubNjnLtJI",
          "childId": "Ycwsykq5pyBn",
          "affects": "confidence",
          "pro": true,
          "id": "YcwsykqaXqa3",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycwt26WrEkp4": {
          "content": "Business opportunities for local companies to provide goods and services are available in the Working Rides.",
          "id": "Ycwt26WrEkp4",
          "reversible": false,
          "type": "claim"
        },
        "Ycwt26WGrWnD": {
          "parentId": "YcwubNjnLtJI",
          "childId": "Ycwt26WrEkp4",
          "affects": "confidence",
          "pro": true,
          "id": "Ycwt26WGrWnD",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwtABr00yoo": {
          "parentId": "YcwuSRkXdQ4q",
          "childId": "YcwtABrWfOjj",
          "affects": "confidence",
          "pro": true,
          "id": "YcwtABr00yoo",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwtABrWfOjj": {
          "content": "Ride Adaptations cost $____ per vehicle.",
          "id": "YcwtABrWfOjj",
          "reversible": false,
          "type": "claim"
        },
        "YcwtI7AhOFxN": {
          "parentId": "YcwuSRkXdQ4q",
          "childId": "YcwtI7AyIfN1",
          "affects": "confidence",
          "pro": true,
          "id": "YcwtI7AhOFxN",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwtI7AyIfN1": {
          "content": "The Ride vehicles cost $______ per vehicle.",
          "id": "YcwtI7AyIfN1",
          "reversible": false,
          "type": "claim"
        },
        "YcwubNjnLtJI": {
          "content": "The Rides are desireable.",
          "id": "YcwubNjnLtJI",
          "reversible": false,
          "type": "claim"
        },
        "YcwubNjpEiPs": {
          "parentId": "YcwU4YhLrHhi",
          "childId": "YcwubNjnLtJI",
          "affects": "confidence",
          "pro": true,
          "id": "YcwubNjpEiPs",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwthB2ZAcwo": {
          "content": "The Rides Digital Management cost $___.)",
          "id": "YcwthB2ZAcwo",
          "reversible": false,
          "type": "claim"
        },
        "YcwthB2GkxhY": {
          "parentId": "YcwuSRkXdQ4q",
          "childId": "YcwthB2ZAcwo",
          "affects": "confidence",
          "pro": true,
          "id": "YcwthB2GkxhY",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwtswpoYQrc": {
          "content": "Ride Intermodal transfer technology cost $____ in total.",
          "id": "YcwtswpoYQrc",
          "reversible": false,
          "type": "claim"
        },
        "YcwtswpmBUlO": {
          "parentId": "YcwuSRkXdQ4q",
          "childId": "YcwtswpoYQrc",
          "affects": "confidence",
          "pro": true,
          "id": "YcwtswpmBUlO",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwV2clV4veG": {
          "content": "• The Flyway will have less light-pollution (_____lumens at ground level) than roadway streetlights (_____lumens at ground level).",
          "id": "YcwV2clV4veG",
          "reversible": false,
          "type": "claim"
        },
        "YcwV2clQPxDZ": {
          "parentId": "YcwXdSgt9rac",
          "childId": "YcwV2clV4veG",
          "affects": "confidence",
          "pro": true,
          "id": "YcwV2clQPxDZ",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwvEQ9d8Pc0": {
          "content": "• infiniteTransit makes living more affordable with no need to buy a car.",
          "id": "YcwvEQ9d8Pc0",
          "reversible": false,
          "type": "claim"
        },
        "YcwvEQ9dtcV6": {
          "parentId": "YcwZKeBsf9le",
          "childId": "YcwvEQ9d8Pc0",
          "affects": "confidence",
          "pro": true,
          "id": "YcwvEQ9dtcV6",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwVBMUu8vEM": {
          "content": "infiniteTransit will cause disagreeable shadows decreasing land value below.",
          "id": "YcwVBMUu8vEM",
          "reversible": false,
          "type": "claim"
        },
        "YcwVBMUlLQ6C": {
          "parentId": "YcwZKeBsf9le",
          "childId": "YcwVBMUu8vEM",
          "affects": "confidence",
          "pro": false,
          "id": "YcwVBMUlLQ6C",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwWvmlOo0r9": {
          "parentId": "YcwZKeBsf9le",
          "childId": "YcwWvmlpZY6R",
          "affects": "confidence",
          "pro": false,
          "id": "YcwWvmlOo0r9",
          "priority": "",
          "type": "claimEdge"
        },
        "YcwWvmlpZY6R": {
          "content": "infiniteTransit will be ugly devaluing our community.",
          "id": "YcwWvmlpZY6R",
          "reversible": false,
          "type": "claim"
        },
        "Ycx04LnNw302": {
          "content": "Cultural institutions become more reachable to all people with reduced travel times.",
          "id": "Ycx04LnNw302",
          "reversible": false,
          "type": "claim"
        },
        "Ycx04LnwzyUr": {
          "parentId": "Ycx0cCOAbEul",
          "childId": "Ycx04LnNw302",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx04LnwzyUr",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx07h36VL0n": {
          "content": "Sports stadiums can be easily accessed to all in the metropolis.",
          "id": "Ycx07h36VL0n",
          "reversible": false,
          "type": "claim"
        },
        "Ycx07h21Y0uB": {
          "parentId": "Ycx0cCOAbEul",
          "childId": "Ycx07h36VL0n",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx07h21Y0uB",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0cCOAbEul": {
          "content": "Recreational facilities can be distinguished and accessible to the full metropolis, whether they are located near the Pauseway (Park District Facilities), or in the vast space between Pauseways (forests).",
          "id": "Ycx0cCOAbEul",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0cCOJ8TYG": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "Ycx0cCOAbEul",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0cCOJ8TYG",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0iEWPnDjD": {
          "parentId": "Ycx0s5wgvcPj",
          "childId": "Ycx0iEXq9xoW",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0iEWPnDjD",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0plRP2JwW": {
          "parentId": "Ycx0s5wgvcPj",
          "childId": "Ycx0plRhl3zO",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0plRP2JwW",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0plRhl3zO": {
          "content": "More specializations of work, increase quality services provided to a larger audience (5). [iTf whole]",
          "id": "Ycx0plRhl3zO",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0s5wDyPk4": {
          "parentId": "Ycx0xUPPHT5h",
          "childId": "Ycx0s5wgvcPj",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0s5wDyPk4",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0s5wgvcPj": {
          "content": "Businesses benefit with increasing accessibility (commutable time frames) to all areas of the metropolis.",
          "id": "Ycx0s5wgvcPj",
          "reversible": false,
          "type": "claim"
        },
        "Ycx0xUPdp9WF": {
          "parentId": "Ycx1g9OKDUUO",
          "childId": "Ycx0xUPPHT5h",
          "affects": "confidence",
          "pro": true,
          "id": "Ycx0xUPdp9WF",
          "priority": "",
          "type": "claimEdge"
        },
        "Ycx0xUPPHT5h": {
          "content": "The Flyway is desireable.",
          "id": "Ycx0xUPPHT5h",
          "reversible": false,
          "type": "claim"
        },
        "Yk3JDShDv0lm": {
          "content": "The infiniteTransit Flyway will provide value for Houston's future.",
          "id": "Yk3JDShDv0lm",
          "reversible": false,
          "type": "claim"
        },
        "topScore": {
          "sourceClaimId": "Yk3JDShDv0lm",
          "topScoreId": "Yk3JDShDv0lm",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.6079262509037966,
          "relevance": 1,
          "id": "topScore",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDpF3Rz": {
          "sourceClaimId": "YcwU4YhLrHhi",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "YcwU4YhmbSj3",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.2,
          "relevance": 1,
          "id": "Y6YsJUDpF3Rz",
          "priority": "2",
          "type": "score"
        },
        "Y6YsJUDs3FnS": {
          "sourceClaimId": "YcwuSRkXdQ4q",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDpF3Rz",
          "sourceEdgeId": "YcwuSRjByl0V",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDs3FnS",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUD4nXBK": {
          "sourceClaimId": "YcwtABrWfOjj",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDs3FnS",
          "sourceEdgeId": "YcwtABr00yoo",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUD4nXBK",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDaom70": {
          "sourceClaimId": "YcwtI7AyIfN1",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDs3FnS",
          "sourceEdgeId": "YcwtI7AhOFxN",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDaom70",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDlqtni": {
          "sourceClaimId": "YcwthB2ZAcwo",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDs3FnS",
          "sourceEdgeId": "YcwthB2GkxhY",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDlqtni",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDCGVtt": {
          "sourceClaimId": "YcwtswpoYQrc",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDs3FnS",
          "sourceEdgeId": "YcwtswpmBUlO",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDCGVtt",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDqkk4n": {
          "sourceClaimId": "Y9TLlAsPn0SI",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDpF3Rz",
          "sourceEdgeId": "Y9TLlAsLsCVz",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDqkk4n",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDrH1ZG": {
          "sourceClaimId": "Y9UgfJxErzpm",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDpF3Rz",
          "sourceEdgeId": "Y9UgfJwAUmA1",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDrH1ZG",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUD7qw4O": {
          "sourceClaimId": "Y9UgVY4AGr7W",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDpF3Rz",
          "sourceEdgeId": "Y9UgVY4ernKK",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUD7qw4O",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDWTXJ1": {
          "sourceClaimId": "Y9TJF8IQDkMs",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUD7qw4O",
          "sourceEdgeId": "Y9TJF8IcKUnx",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDWTXJ1",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDJj2qD": {
          "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUD7qw4O",
          "sourceEdgeId": "Y9UgJaGTrYix",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDJj2qD",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUDJSDdK": {
          "sourceClaimId": "YcwubNjnLtJI",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDpF3Rz",
          "sourceEdgeId": "YcwubNjpEiPs",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUDJSDdK",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCbVh0h": {
          "sourceClaimId": "Ycws7MzAX7X9",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "Ycws7MzLbJ5c",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCbVh0h",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCocpOU": {
          "sourceClaimId": "YcwrREJFVhlc",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCbVh0h",
          "sourceEdgeId": "YcwrREJZALVp",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCocpOU",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUC4ENPA": {
          "sourceClaimId": "YcwrWu5ASVdH",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCbVh0h",
          "sourceEdgeId": "YcwrWu5hgDN4",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUC4ENPA",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCkEUHs": {
          "sourceClaimId": "YcwrGvlcLhN6",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "YcwrGvlEgd9S",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCkEUHs",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCwQYxQ": {
          "sourceClaimId": "YcwsdFi9AG6N",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "YcwsdFicYATw",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCwQYxQ",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCMgGba": {
          "sourceClaimId": "YcwssONd3I42",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "YcwssONiqZVZ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0,
          "relevance": 1,
          "id": "Y6YsJUCMgGba",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCLYypU": {
          "sourceClaimId": "YcwsnlUgoOSN",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCMgGba",
          "sourceEdgeId": "YcwsnlUAGAc0",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCLYypU",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCZknIw": {
          "sourceClaimId": "Ycwsykq5pyBn",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "YcwsykqaXqa3",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCZknIw",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUC38JEp": {
          "sourceClaimId": "Ycwt26WrEkp4",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUDJSDdK",
          "sourceEdgeId": "Ycwt26WGrWnD",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUC38JEp",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCeeDI6": {
          "sourceClaimId": "YcwrnKbeEy2J",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "YcwrnKbfpJdH",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.5,
          "relevance": 1,
          "id": "Y6YsJUCeeDI6",
          "priority": "1",
          "type": "score"
        },
        "Y6YsJUCEFmaB": {
          "sourceClaimId": "Y9TInryY9ZP1",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCeeDI6",
          "sourceEdgeId": "Y9TInryH9YRE",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCEFmaB",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUC9d4sC": {
          "sourceClaimId": "Y9TFgrefra73",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFgrefupoq",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUC9d4sC",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCONYZH": {
          "sourceClaimId": "Y9TFjpl8AcGf",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFjpld7i3Y",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCONYZH",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCr9Gnr": {
          "sourceClaimId": "Y9TFE5FYCgNl",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFE5F0K0FH",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCr9Gnr",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUC3ucqa": {
          "sourceClaimId": "Y9TFoeyfkJzQ",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFoeyiYh6m",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUC3ucqa",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCHBYzw": {
          "sourceClaimId": "Y9TFrXhEKC3C",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFrXhm1sEQ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCHBYzw",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCuYsIy": {
          "sourceClaimId": "Y9TFxkO5qIqD",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCEFmaB",
          "sourceEdgeId": "Y9TFxkOIm3lp",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCuYsIy",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUC4PHH5": {
          "sourceClaimId": "Y9THYvSjQzlt",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCeeDI6",
          "sourceEdgeId": "Y9THYvSqwPew",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUC4PHH5",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUCu9TWP": {
          "sourceClaimId": "Y9THMxb0Bzuc",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THMxbDj1yX",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUCu9TWP",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBPTDfB": {
          "sourceClaimId": "Y9TGy49itihF",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCu9TWP",
          "sourceEdgeId": "Y9TGy492vxFR",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBPTDfB",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBiGxYy": {
          "sourceClaimId": "Y9THQNrAgNMM",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THQNrpo74z",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBiGxYy",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBj2AwX": {
          "sourceClaimId": "Y9THGf7ZPbu2",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THGf7o6Ie1",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBj2AwX",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBxiBT6": {
          "sourceClaimId": "Ycx0iEXq9xoW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBj2AwX",
          "sourceEdgeId": "Y9THbOMY2O7F",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBxiBT6",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUB1hCwE": {
          "sourceClaimId": "Y9THCbLLA2bj",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THCbLQV0MK",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUB1hCwE",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBUwf7d": {
          "sourceClaimId": "Y9THxiUg3Kmc",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THxiUzqgKS",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBUwf7d",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBLSR1O": {
          "sourceClaimId": "Y9THpGwTiBHE",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUC4PHH5",
          "sourceEdgeId": "Y9THpGwirriI",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBLSR1O",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBmzz8Z": {
          "sourceClaimId": "Y9TI7BmGwz0M",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCeeDI6",
          "sourceEdgeId": "Y9TI7BmxxxIo",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBmzz8Z",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUB3aIy2": {
          "sourceClaimId": "Y9TIgyROLnx6",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUCeeDI6",
          "sourceEdgeId": "Y9TIgyR7x8ID",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUB3aIy2",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBM1xmU": {
          "sourceClaimId": "Y9TF30kibmU5",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUB3aIy2",
          "sourceEdgeId": "Y9TF30kQhSu8",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBM1xmU",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBXs7AS": {
          "sourceClaimId": "Y9TEIdq9R9sB",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUB3aIy2",
          "sourceEdgeId": "Y9TEIdqMGRyY",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBXs7AS",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBQZLFm": {
          "sourceClaimId": "YcwTEwq0tQaS",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "YcwTEwqQTxN9",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.5,
          "relevance": 1,
          "id": "Y6YsJUBQZLFm",
          "priority": "3",
          "type": "score"
        },
        "Y6YsJUBSNxsa": {
          "sourceClaimId": "Y9Tf6kJon28e",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBQZLFm",
          "sourceEdgeId": "Y9Tf6kJjfLuI",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBSNxsa",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBElL9y": {
          "sourceClaimId": "Y9TdtyNBg7Ki",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBSNxsa",
          "sourceEdgeId": "Y9TdtyNmcBDy",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBElL9y",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUB7Srdl": {
          "sourceClaimId": "Y9TeYlSlUprf",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBSNxsa",
          "sourceEdgeId": "Y9TeYlS6Vst0",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUB7Srdl",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUBRN1li": {
          "sourceClaimId": "Y9TdJ1HVW2nV",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUB7Srdl",
          "sourceEdgeId": "Y9TdJ1H3XbM4",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUBRN1li",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUByDS4H": {
          "sourceClaimId": "Y9TfKgNVeWfs",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBQZLFm",
          "sourceEdgeId": "Y9TfKgNWUXEm",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUByDS4H",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAKCZ7F": {
          "sourceClaimId": "Y9T41tcAuiFT",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUByDS4H",
          "sourceEdgeId": "Y9T41tcPxgYu",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAKCZ7F",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAT05Jj": {
          "sourceClaimId": "Y9TgM3n4FauF",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBQZLFm",
          "sourceEdgeId": "Y9TgM3n4UrmX",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAT05Jj",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUA1MOM2": {
          "sourceClaimId": "Y9TfTvvSVxlW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAT05Jj",
          "sourceEdgeId": "Y9TfTvvCvufC",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUA1MOM2",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAZxGC4": {
          "sourceClaimId": "Y9TfYKKX7ZsM",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAT05Jj",
          "sourceEdgeId": "Y9TfYKKosiuv",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAZxGC4",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAPA1cP": {
          "sourceClaimId": "Y9Tg4mGfFPes",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAT05Jj",
          "sourceEdgeId": "Y9Tg4mFdaNqu",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAPA1cP",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAY3D7d": {
          "sourceClaimId": "Y9TgeP4jEcUR",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAT05Jj",
          "sourceEdgeId": "Y9TgeP46Y2g9",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAY3D7d",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAb8oO9": {
          "sourceClaimId": "Y9TgogYk4fwW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAT05Jj",
          "sourceEdgeId": "Y9TgogYlMDpH",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAb8oO9",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAIStvs": {
          "sourceClaimId": "Y9TgvzAGlUyN",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUBQZLFm",
          "sourceEdgeId": "Y9TgvzA7Ci85",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAIStvs",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAtSkua": {
          "sourceClaimId": "Y9TePaPJOYwx",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAIStvs",
          "sourceEdgeId": "Y9TePaP7h5Yx",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAtSkua",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUA8pDzJ": {
          "sourceClaimId": "Y9Te9uZYt1vG",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAtSkua",
          "sourceEdgeId": "Y9Te9uZGqOdJ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUA8pDzJ",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUA6q375": {
          "sourceClaimId": "YcwTTLYmc4SE",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "YcwTTLYrE4W2",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.5,
          "relevance": 1,
          "id": "Y6YsJUA6q375",
          "priority": "4",
          "type": "score"
        },
        "Y6YsJUACSIMD": {
          "sourceClaimId": "Y9TcaDTTNiJw",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUA6q375",
          "sourceEdgeId": "Y9TcaDTmDeTG",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUACSIMD",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAvejDG": {
          "sourceClaimId": "Y9TcgUvGR6LW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUA6q375",
          "sourceEdgeId": "Y9TcgUvJ4wHg",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAvejDG",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUATHjyo": {
          "sourceClaimId": "Y9TbSxEkr0xI",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUA6q375",
          "sourceEdgeId": "Y9TbSxE9fAwG",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUATHjyo",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAu4yBX": {
          "sourceClaimId": "Y9TdhXWy50Qt",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUA6q375",
          "sourceEdgeId": "Y9TdhXW9ZAJv",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAu4yBX",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAOnllD": {
          "sourceClaimId": "Y9TcYmCtm1iM",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAu4yBX",
          "sourceEdgeId": "Y9TcYmCLr4vt",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAOnllD",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUACKOuW": {
          "sourceClaimId": "Y9TcIgyQ2ZHn",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAu4yBX",
          "sourceEdgeId": "Y9TcIgyyNXoT",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUACKOuW",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUASmPSY": {
          "sourceClaimId": "YcwTZMJHOOiB",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "YcwTZMJZEnsC",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.9333333333333333,
          "relevance": 1,
          "id": "Y6YsJUASmPSY",
          "priority": "6",
          "type": "score"
        },
        "Y6YsJUAavcqM": {
          "sourceClaimId": "Ycwo1rAUEeM4",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUASmPSY",
          "sourceEdgeId": "Ycwo1rz4ePWu",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAavcqM",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAYufzl": {
          "sourceClaimId": "YcwnFKpFi0eE",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAavcqM",
          "sourceEdgeId": "YcwnFKpJiqBm",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAYufzl",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUARanEy": {
          "sourceClaimId": "YcwnV8ehmfP2",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAavcqM",
          "sourceEdgeId": "YcwnV8ewBcMC",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUARanEy",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUA4kCVq": {
          "sourceClaimId": "YcwnqMGUnIlp",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAavcqM",
          "sourceEdgeId": "YcwnqMG1k6WV",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUA4kCVq",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAwTZeJ": {
          "sourceClaimId": "YcwnuFtVSNg9",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAavcqM",
          "sourceEdgeId": "YcwnuFtBTDc0",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAwTZeJ",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAqEwRu": {
          "sourceClaimId": "YcwnBzqmzaNi",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAavcqM",
          "sourceEdgeId": "YcwnBzqJh0rw",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAqEwRu",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAKzB7W": {
          "sourceClaimId": "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAqEwRu",
          "sourceEdgeId": "Y9TKxsQYa3Fp",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAKzB7W",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAP4nkO": {
          "sourceClaimId": "YcwoxlFMUVIO",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUASmPSY",
          "sourceEdgeId": "YcwoxlFXTlnQ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAP4nkO",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAkWDqq": {
          "sourceClaimId": "YcwolT0zNqaS",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAP4nkO",
          "sourceEdgeId": "YcwolT0su4S1",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAkWDqq",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUA6Hhho": {
          "sourceClaimId": "Ycwoqn8RaOtB",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAP4nkO",
          "sourceEdgeId": "Ycwoqn8mFSL8",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUA6Hhho",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAcnx6P": {
          "sourceClaimId": "YcwpgOjLkaMC",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUASmPSY",
          "sourceEdgeId": "YcwpgOjVTctj",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAcnx6P",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUArPVZA": {
          "sourceClaimId": "YcwoO4ep0jVa",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "YcwoO4eQuKVw",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUArPVZA",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAJGYSk": {
          "sourceClaimId": "YcwoSEAkfPBn",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "YcwoSEAscusp",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAJGYSk",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUAGUvdF": {
          "sourceClaimId": "YcwoGIQXqTbE",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAJGYSk",
          "sourceEdgeId": "YcwoGIQ9rwlP",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUAGUvdF",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzuHFbQ": {
          "sourceClaimId": "YcwoMap1LI2e",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAJGYSk",
          "sourceEdgeId": "YcwoMap1OBEz",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzuHFbQ",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzjytZQ": {
          "sourceClaimId": "YcwoVo2hiCVn",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "YcwoVo2Hsa1J",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzjytZQ",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzpAFaV": {
          "sourceClaimId": "YcwoYadHSsCb",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "YcwoYacmVwdi",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzpAFaV",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzf5nVY": {
          "sourceClaimId": "Ycwp13o2PKIJ",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "Ycwp13o5mup3",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzf5nVY",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUz9HTPO": {
          "sourceClaimId": "YcwpaGStHuSe",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUAcnx6P",
          "sourceEdgeId": "YcwpaGSyI49j",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUz9HTPO",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzoTCfR": {
          "sourceClaimId": "YcwqvyTjYnxt",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUASmPSY",
          "sourceEdgeId": "YcwqvyTme2dV",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.3333333333333333,
          "relevance": 1,
          "id": "Y6YsJUzoTCfR",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzyMPuu": {
          "sourceClaimId": "Ycwq20poMoPU",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzoTCfR",
          "sourceEdgeId": "Ycwq20oYam0l",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzyMPuu",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzzK9et": {
          "sourceClaimId": "YcwpG5820H98",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpG58ZroVA",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzzK9et",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzbvrwT": {
          "sourceClaimId": "YcwpIrQfItEu",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpIrQe4440",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzbvrwT",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUz2gVqv": {
          "sourceClaimId": "YcwpMrjpL9m1",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpMrjoniYi",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUz2gVqv",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUziAnWv": {
          "sourceClaimId": "YcwpRoEeC7z0",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpRoELsiUg",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUziAnWv",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzEEgpk": {
          "sourceClaimId": "YcwpW8gNm6qi",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpW8gkk9Ga",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzEEgpk",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzMvUQw": {
          "sourceClaimId": "YcwpBc5lFqsy",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzyMPuu",
          "sourceEdgeId": "YcwpBc4K1a2K",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzMvUQw",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzSlnP8": {
          "sourceClaimId": "YcwqhF1WfPOD",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzoTCfR",
          "sourceEdgeId": "YcwqhF1VRaXR",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzSlnP8",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzWLp7m": {
          "sourceClaimId": "Ycwqq42IyIvf",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzoTCfR",
          "sourceEdgeId": "Ycwqq42NW2al",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzWLp7m",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzjsbHz": {
          "sourceClaimId": "Ycx1g9OKDUUO",
          "topScoreId": "topScore",
          "parentScoreId": "topScore",
          "sourceEdgeId": "Ycx1g9NnjXWd",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.4832810867293626,
          "relevance": 1,
          "id": "Y6YsJUzjsbHz",
          "priority": "5",
          "type": "score"
        },
        "Y6YsJUzBRnmc": {
          "sourceClaimId": "Ycx19cye5Xyw",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzjsbHz",
          "sourceEdgeId": "Ycx19cy5G7Wv",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzBRnmc",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzKNgjq": {
          "sourceClaimId": "Ycx0QegTUbav",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzBRnmc",
          "sourceEdgeId": "Ycx0QegP2z8L",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzKNgjq",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUz58ULn": {
          "sourceClaimId": "Ycx0Vho9oTa9",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzBRnmc",
          "sourceEdgeId": "Ycx0Vhohu7ov",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUz58ULn",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzZmSjf": {
          "sourceClaimId": "Ycx0J2XMaVvE",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzBRnmc",
          "sourceEdgeId": "Ycx0J2XviYIk",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzZmSjf",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzzfdxF": {
          "sourceClaimId": "Ycx0LQY0TlvA",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzBRnmc",
          "sourceEdgeId": "Ycx0LQX18z62",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzzfdxF",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzEdmHw": {
          "sourceClaimId": "YcwZ5yc6mW6f",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzjsbHz",
          "sourceEdgeId": "YcwZ5yc2Q6eQ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.9545454545454546,
          "relevance": 1,
          "id": "Y6YsJUzEdmHw",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUztdiRD": {
          "sourceClaimId": "YcwUu4Y624Xt",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwUu4XZPU0r",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUztdiRD",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzlJHdX": {
          "sourceClaimId": "YcwXdSgt9rac",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwXdSg99OjG",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0.5,
          "relevance": 1,
          "id": "Y6YsJUzlJHdX",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzrAvg8": {
          "sourceClaimId": "YcwUTI4fcydo",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzlJHdX",
          "sourceEdgeId": "YcwUTI4WyqWS",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzrAvg8",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzysKdc": {
          "sourceClaimId": "YcwV9sRp7l19",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzlJHdX",
          "sourceEdgeId": "YcwV9sRZqrJW",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzysKdc",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzj0MpD": {
          "sourceClaimId": "YcwWfVedirgH",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzlJHdX",
          "sourceEdgeId": "YcwWfVemuLGe",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 0,
          "relevance": 1,
          "id": "Y6YsJUzj0MpD",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzAhM99": {
          "sourceClaimId": "YcwVS2YZyXxC",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzj0MpD",
          "sourceEdgeId": "YcwVS2YTmr62",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzAhM99",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzIuDJM": {
          "sourceClaimId": "YcwWPE9z7lOa",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzlJHdX",
          "sourceEdgeId": "YcwWPE9f5C1G",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzIuDJM",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzrbadO": {
          "sourceClaimId": "YcwV2clV4veG",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzlJHdX",
          "sourceEdgeId": "YcwV2clQPxDZ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzrbadO",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUz2Ff9b": {
          "sourceClaimId": "YcwY0PRuzUjd",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwY0PRziqQv",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUz2Ff9b",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzDhSqH": {
          "sourceClaimId": "YcwXJhgqAP7J",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwXJhgz0t8y",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzDhSqH",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzJoiQ3": {
          "sourceClaimId": "YcwYsfQj9xi9",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwYsfQHEPHV",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzJoiQ3",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzefykc": {
          "sourceClaimId": "YcwYSU9WijLa",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzEdmHw",
          "sourceEdgeId": "YcwYSU9Ih1ex",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzefykc",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzZOjoR": {
          "sourceClaimId": "YcwZyHGKeHz0",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzjsbHz",
          "sourceEdgeId": "YcwZyHGsDdUO",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzZOjoR",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUz7iyJF": {
          "sourceClaimId": "YcwZiDRfVY3o",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzZOjoR",
          "sourceEdgeId": "YcwZiDR9l2Qo",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUz7iyJF",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUzhSNlN": {
          "sourceClaimId": "YcwZn0N7jnEp",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzZOjoR",
          "sourceEdgeId": "YcwZn0N4ZvQZ",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUzhSNlN",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUytCI7x": {
          "sourceClaimId": "YcwZqPoNIlvr",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzZOjoR",
          "sourceEdgeId": "YcwZqPofCX4z",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUytCI7x",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyaP0gM": {
          "sourceClaimId": "Ycx0xUPPHT5h",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUzjsbHz",
          "sourceEdgeId": "Ycx0xUPdp9WF",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyaP0gM",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyobOrK": {
          "sourceClaimId": "YcwZKeBsf9le",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "YcwZKeAy7TIm",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0,
          "relevance": 1,
          "id": "Y6YsJUyobOrK",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyJtEUm": {
          "sourceClaimId": "YcwvEQ9d8Pc0",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyobOrK",
          "sourceEdgeId": "YcwvEQ9dtcV6",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyJtEUm",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUy65xZA": {
          "sourceClaimId": "YcwVBMUu8vEM",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyobOrK",
          "sourceEdgeId": "YcwVBMUlLQ6C",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUy65xZA",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUy6hAiw": {
          "sourceClaimId": "YcwWvmlpZY6R",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyobOrK",
          "sourceEdgeId": "YcwWvmlOo0r9",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 0,
          "relevance": 1,
          "id": "Y6YsJUy6hAiw",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyJiq9y": {
          "sourceClaimId": "Y9Ui3Sg9m6Uu",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUy6hAiw",
          "sourceEdgeId": "Y9Ui3SgbTPF5",
          "reversible": false,
          "pro": false,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyJiq9y",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyrEnlE": {
          "sourceClaimId": "YcwZNVsATvNN",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "YcwZNVsPTx9x",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyrEnlE",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUy9TOAW": {
          "sourceClaimId": "Y9TGy49itihF",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyrEnlE",
          "sourceEdgeId": "Y9TG5APIKaSs",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUy9TOAW",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUywHHd8": {
          "sourceClaimId": "Ycx0iEXq9xoW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyrEnlE",
          "sourceEdgeId": "YcwZH9JA46iW",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUywHHd8",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUySfkY4": {
          "sourceClaimId": "YcwZTwQAAfg5",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "YcwZTwQrVT2I",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUySfkY4",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyQ3R2S": {
          "sourceClaimId": "Ycx006j2uAng",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "Ycx006jmHwEH",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyQ3R2S",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUytQUVV": {
          "sourceClaimId": "YcwZVA0YJbbi",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyQ3R2S",
          "sourceEdgeId": "YcwZVA0BtDLA",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUytQUVV",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyXZOSj": {
          "sourceClaimId": "Ycx0cCOAbEul",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "Ycx0cCOJ8TYG",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyXZOSj",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyxLRRy": {
          "sourceClaimId": "Ycx04LnNw302",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyXZOSj",
          "sourceEdgeId": "Ycx04LnwzyUr",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyxLRRy",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUy1PLs3": {
          "sourceClaimId": "Ycx07h36VL0n",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyXZOSj",
          "sourceEdgeId": "Ycx07h21Y0uB",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUy1PLs3",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUy1ZyEj": {
          "sourceClaimId": "Ycx0s5wgvcPj",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUyaP0gM",
          "sourceEdgeId": "Ycx0s5wDyPk4",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUy1ZyEj",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyMGW7j": {
          "sourceClaimId": "Ycx0iEXq9xoW",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUy1ZyEj",
          "sourceEdgeId": "Ycx0iEWPnDjD",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyMGW7j",
          "priority": "",
          "type": "score"
        },
        "Y6YsJUyLuf81": {
          "sourceClaimId": "Ycx0plRhl3zO",
          "topScoreId": "topScore",
          "parentScoreId": "Y6YsJUy1ZyEj",
          "sourceEdgeId": "Ycx0plRP2JwW",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 1,
          "relevance": 1,
          "id": "Y6YsJUyLuf81",
          "priority": "",
          "type": "score"
        }
      },
      "claimEdgeIdsByParentId": {
        "Y9TfKgNVeWfs": [
          "Y9T41tcPxgYu"
        ],
        "Y9TInryY9ZP1": [
          "Y9TFgrefupoq",
          "Y9TFjpld7i3Y",
          "Y9TFE5F0K0FH",
          "Y9TFoeyiYh6m",
          "Y9TFrXhm1sEQ",
          "Y9TFxkOIm3lp"
        ],
        "YcwrnKbeEy2J": [
          "Y9TInryH9YRE",
          "Y9THYvSqwPew",
          "Y9TI7BmxxxIo",
          "Y9TIgyR7x8ID"
        ],
        "YcwU4YhLrHhi": [
          "YcwuSRjByl0V",
          "Y9TLlAsLsCVz",
          "Y9UgfJwAUmA1",
          "Y9UgVY4ernKK",
          "YcwubNjpEiPs"
        ],
        "Y9TIgyROLnx6": [
          "Y9TF30kQhSu8",
          "Y9TEIdqMGRyY"
        ],
        "YcwZNVsATvNN": [
          "Y9TG5APIKaSs",
          "YcwZH9JA46iW"
        ],
        "Y9THGf7ZPbu2": [
          "Y9THbOMY2O7F"
        ],
        "Y9THMxb0Bzuc": [
          "Y9TGy492vxFR"
        ],
        "Y9THYvSjQzlt": [
          "Y9THMxbDj1yX",
          "Y9THQNrpo74z",
          "Y9THGf7o6Ie1",
          "Y9THCbLQV0MK",
          "Y9THxiUzqgKS",
          "Y9THpGwirriI"
        ],
        "Y9UgVY4AGr7W": [
          "Y9TJF8IcKUnx",
          "Y9UgJaGTrYix"
        ],
        "Y9TK8oO0uaDV": [
          "Y9TJVX1kWysP"
        ],
        "YcwnBzqmzaNi": [
          "Y9TKxsQYa3Fp"
        ],
        "Ycx1g9OKDUUO": [
          "Ycx19cy5G7Wv",
          "YcwZ5yc2Q6eQ",
          "YcwZyHGsDdUO",
          "Ycx0xUPdp9WF"
        ],
        "YcwqvyTjYnxt": [
          "Ycwq20oYam0l",
          "YcwqhF1VRaXR",
          "Ycwqq42NW2al"
        ],
        "YcwTTLYmc4SE": [
          "Y9TcaDTmDeTG",
          "Y9TcgUvJ4wHg",
          "Y9TbSxE9fAwG",
          "Y9TdhXW9ZAJv"
        ],
        "Y9TdhXWy50Qt": [
          "Y9TcYmCLr4vt",
          "Y9TcIgyyNXoT"
        ],
        "Y9TeYlSlUprf": [
          "Y9TdJ1H3XbM4"
        ],
        "Y9TePaPJOYwx": [
          "Y9Te9uZGqOdJ"
        ],
        "Y9Tf6kJon28e": [
          "Y9TdtyNmcBDy",
          "Y9TeYlS6Vst0"
        ],
        "Y9TgvzAGlUyN": [
          "Y9TePaP7h5Yx"
        ],
        "YcwTEwq0tQaS": [
          "Y9Tf6kJjfLuI",
          "Y9TfKgNWUXEm",
          "Y9TgM3n4UrmX",
          "Y9TgvzA7Ci85"
        ],
        "Y9TgM3n4FauF": [
          "Y9TfTvvCvufC",
          "Y9TfYKKosiuv",
          "Y9Tg4mFdaNqu",
          "Y9TgeP46Y2g9",
          "Y9TgogYlMDpH"
        ],
        "Yk3JDShDv0lm": [
          "YcwU4YhmbSj3",
          "YcwrnKbfpJdH",
          "YcwTEwqQTxN9",
          "YcwTTLYrE4W2",
          "YcwTZMJZEnsC",
          "Ycx1g9NnjXWd"
        ],
        "YcwWvmlpZY6R": [
          "Y9Ui3SgbTPF5"
        ],
        "Ycx19cye5Xyw": [
          "Ycx0QegP2z8L",
          "Ycx0Vhohu7ov",
          "Ycx0J2XviYIk",
          "Ycx0LQX18z62"
        ],
        "YcwXdSgt9rac": [
          "YcwUTI4WyqWS",
          "YcwV9sRZqrJW",
          "YcwWfVemuLGe",
          "YcwWPE9f5C1G",
          "YcwV2clQPxDZ"
        ],
        "YcwZ5yc6mW6f": [
          "YcwUu4XZPU0r",
          "YcwXdSg99OjG",
          "YcwY0PRziqQv",
          "YcwXJhgz0t8y",
          "YcwYsfQHEPHV",
          "YcwYSU9Ih1ex"
        ],
        "YcwWfVedirgH": [
          "YcwVS2YTmr62"
        ],
        "Ycx0xUPPHT5h": [
          "YcwZKeAy7TIm",
          "YcwZNVsPTx9x",
          "YcwZTwQrVT2I",
          "Ycx006jmHwEH",
          "Ycx0cCOJ8TYG",
          "Ycx0s5wDyPk4"
        ],
        "Ycx006j2uAng": [
          "YcwZVA0BtDLA"
        ],
        "YcwZyHGKeHz0": [
          "YcwZiDR9l2Qo",
          "YcwZn0N4ZvQZ",
          "YcwZqPofCX4z"
        ],
        "Ycwo1rAUEeM4": [
          "YcwnFKpJiqBm",
          "YcwnV8ewBcMC",
          "YcwnqMG1k6WV",
          "YcwnuFtBTDc0",
          "YcwnBzqJh0rw"
        ],
        "YcwTZMJHOOiB": [
          "Ycwo1rz4ePWu",
          "YcwoxlFXTlnQ",
          "YcwpgOjVTctj",
          "YcwqvyTme2dV"
        ],
        "YcwoSEAkfPBn": [
          "YcwoGIQ9rwlP",
          "YcwoMap1OBEz"
        ],
        "YcwpgOjLkaMC": [
          "YcwoO4eQuKVw",
          "YcwoSEAscusp",
          "YcwoVo2Hsa1J",
          "YcwoYacmVwdi",
          "Ycwp13o5mup3",
          "YcwpaGSyI49j"
        ],
        "YcwoxlFMUVIO": [
          "YcwolT0su4S1",
          "Ycwoqn8mFSL8"
        ],
        "Ycwq20poMoPU": [
          "YcwpG58ZroVA",
          "YcwpIrQe4440",
          "YcwpMrjoniYi",
          "YcwpRoELsiUg",
          "YcwpW8gkk9Ga",
          "YcwpBc4K1a2K"
        ],
        "Ycws7MzAX7X9": [
          "YcwrREJZALVp",
          "YcwrWu5hgDN4"
        ],
        "YcwubNjnLtJI": [
          "Ycws7MzLbJ5c",
          "YcwrGvlEgd9S",
          "YcwsdFicYATw",
          "YcwssONiqZVZ",
          "YcwsykqaXqa3",
          "Ycwt26WGrWnD"
        ],
        "YcwssONd3I42": [
          "YcwsnlUAGAc0"
        ],
        "YcwuSRkXdQ4q": [
          "YcwtABr00yoo",
          "YcwtI7AhOFxN",
          "YcwthB2GkxhY",
          "YcwtswpmBUlO"
        ],
        "YcwZKeBsf9le": [
          "YcwvEQ9dtcV6",
          "YcwVBMUlLQ6C",
          "YcwWvmlOo0r9"
        ],
        "Ycx0cCOAbEul": [
          "Ycx04LnwzyUr",
          "Ycx07h21Y0uB"
        ],
        "Ycx0s5wgvcPj": [
          "Ycx0iEWPnDjD",
          "Ycx0plRP2JwW"
        ]
      },
      "claimEdgeIdsByChildId": {
        "Y9T41tcAuiFT": [
          "Y9T41tcPxgYu"
        ],
        "Y9TFgrefra73": [
          "Y9TFgrefupoq"
        ],
        "Y9TFjpl8AcGf": [
          "Y9TFjpld7i3Y"
        ],
        "Y9TFE5FYCgNl": [
          "Y9TFE5F0K0FH"
        ],
        "Y9TFoeyfkJzQ": [
          "Y9TFoeyiYh6m"
        ],
        "Y9TFrXhEKC3C": [
          "Y9TFrXhm1sEQ"
        ],
        "Y9TFxkO5qIqD": [
          "Y9TFxkOIm3lp"
        ],
        "Y9TInryY9ZP1": [
          "Y9TInryH9YRE"
        ],
        "YcwuSRkXdQ4q": [
          "YcwuSRjByl0V"
        ],
        "Y9THYvSjQzlt": [
          "Y9THYvSqwPew"
        ],
        "Y9TF30kibmU5": [
          "Y9TF30kQhSu8"
        ],
        "Y9TEIdq9R9sB": [
          "Y9TEIdqMGRyY"
        ],
        "Y9TGy49itihF": [
          "Y9TG5APIKaSs",
          "Y9TGy492vxFR"
        ],
        "Ycx0iEXq9xoW": [
          "Y9THbOMY2O7F",
          "YcwZH9JA46iW",
          "Ycx0iEWPnDjD"
        ],
        "Y9THMxb0Bzuc": [
          "Y9THMxbDj1yX"
        ],
        "Y9THQNrAgNMM": [
          "Y9THQNrpo74z"
        ],
        "Y9THGf7ZPbu2": [
          "Y9THGf7o6Ie1"
        ],
        "Y9THCbLLA2bj": [
          "Y9THCbLQV0MK"
        ],
        "Y9THxiUg3Kmc": [
          "Y9THxiUzqgKS"
        ],
        "Y9THpGwTiBHE": [
          "Y9THpGwirriI"
        ],
        "Y9TI7BmGwz0M": [
          "Y9TI7BmxxxIo"
        ],
        "Y9TIgyROLnx6": [
          "Y9TIgyR7x8ID"
        ],
        "Y9TJF8IQDkMs": [
          "Y9TJF8IcKUnx"
        ],
        "Y9TJVX1bnnDR": [
          "Y9TJVX1kWysP"
        ],
        "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.": [
          "Y9TKxsQYa3Fp",
          "Y9UgJaGTrYix"
        ],
        "Ycx19cye5Xyw": [
          "Ycx19cy5G7Wv"
        ],
        "Ycwq20poMoPU": [
          "Ycwq20oYam0l"
        ],
        "Y9TLlAsPn0SI": [
          "Y9TLlAsLsCVz"
        ],
        "Y9TcaDTTNiJw": [
          "Y9TcaDTmDeTG"
        ],
        "Y9TcgUvGR6LW": [
          "Y9TcgUvJ4wHg"
        ],
        "Y9TbSxEkr0xI": [
          "Y9TbSxE9fAwG"
        ],
        "Y9TcYmCtm1iM": [
          "Y9TcYmCLr4vt"
        ],
        "Y9TcIgyQ2ZHn": [
          "Y9TcIgyyNXoT"
        ],
        "Y9TdhXWy50Qt": [
          "Y9TdhXW9ZAJv"
        ],
        "Y9TdJ1HVW2nV": [
          "Y9TdJ1H3XbM4"
        ],
        "Y9Te9uZYt1vG": [
          "Y9Te9uZGqOdJ"
        ],
        "Y9TdtyNBg7Ki": [
          "Y9TdtyNmcBDy"
        ],
        "Y9TeYlSlUprf": [
          "Y9TeYlS6Vst0"
        ],
        "Y9TePaPJOYwx": [
          "Y9TePaP7h5Yx"
        ],
        "Y9Tf6kJon28e": [
          "Y9Tf6kJjfLuI"
        ],
        "Y9TfKgNVeWfs": [
          "Y9TfKgNWUXEm"
        ],
        "Y9TfTvvSVxlW": [
          "Y9TfTvvCvufC"
        ],
        "Y9TfYKKX7ZsM": [
          "Y9TfYKKosiuv"
        ],
        "Y9Tg4mGfFPes": [
          "Y9Tg4mFdaNqu"
        ],
        "Y9TgeP4jEcUR": [
          "Y9TgeP46Y2g9"
        ],
        "Y9TgM3n4FauF": [
          "Y9TgM3n4UrmX"
        ],
        "Y9TgogYk4fwW": [
          "Y9TgogYlMDpH"
        ],
        "Y9TgvzAGlUyN": [
          "Y9TgvzA7Ci85"
        ],
        "Y9UgfJxErzpm": [
          "Y9UgfJwAUmA1"
        ],
        "Y9UgVY4AGr7W": [
          "Y9UgVY4ernKK"
        ],
        "YcwU4YhLrHhi": [
          "YcwU4YhmbSj3"
        ],
        "Y9Ui3Sg9m6Uu": [
          "Y9Ui3SgbTPF5"
        ],
        "YcwrnKbeEy2J": [
          "YcwrnKbfpJdH"
        ],
        "YcwTEwq0tQaS": [
          "YcwTEwqQTxN9"
        ],
        "YcwTTLYmc4SE": [
          "YcwTTLYrE4W2"
        ],
        "YcwTZMJHOOiB": [
          "YcwTZMJZEnsC"
        ],
        "Ycx1g9OKDUUO": [
          "Ycx1g9NnjXWd"
        ],
        "Ycx0QegTUbav": [
          "Ycx0QegP2z8L"
        ],
        "Ycx0Vho9oTa9": [
          "Ycx0Vhohu7ov"
        ],
        "Ycx0J2XMaVvE": [
          "Ycx0J2XviYIk"
        ],
        "Ycx0LQY0TlvA": [
          "Ycx0LQX18z62"
        ],
        "YcwUTI4fcydo": [
          "YcwUTI4WyqWS"
        ],
        "YcwUu4Y624Xt": [
          "YcwUu4XZPU0r"
        ],
        "YcwV9sRp7l19": [
          "YcwV9sRZqrJW"
        ],
        "YcwVS2YZyXxC": [
          "YcwVS2YTmr62"
        ],
        "YcwWfVedirgH": [
          "YcwWfVemuLGe"
        ],
        "YcwXdSgt9rac": [
          "YcwXdSg99OjG"
        ],
        "YcwWPE9z7lOa": [
          "YcwWPE9f5C1G"
        ],
        "YcwY0PRuzUjd": [
          "YcwY0PRziqQv"
        ],
        "YcwXJhgqAP7J": [
          "YcwXJhgz0t8y"
        ],
        "YcwYsfQj9xi9": [
          "YcwYsfQHEPHV"
        ],
        "YcwYSU9WijLa": [
          "YcwYSU9Ih1ex"
        ],
        "YcwZ5yc6mW6f": [
          "YcwZ5yc2Q6eQ"
        ],
        "YcwZKeBsf9le": [
          "YcwZKeAy7TIm"
        ],
        "YcwZNVsATvNN": [
          "YcwZNVsPTx9x"
        ],
        "YcwZTwQAAfg5": [
          "YcwZTwQrVT2I"
        ],
        "YcwZVA0YJbbi": [
          "YcwZVA0BtDLA"
        ],
        "Ycx006j2uAng": [
          "Ycx006jmHwEH"
        ],
        "YcwZiDRfVY3o": [
          "YcwZiDR9l2Qo"
        ],
        "YcwZn0N7jnEp": [
          "YcwZn0N4ZvQZ"
        ],
        "YcwZqPoNIlvr": [
          "YcwZqPofCX4z"
        ],
        "YcwZyHGKeHz0": [
          "YcwZyHGsDdUO"
        ],
        "YcwnFKpFi0eE": [
          "YcwnFKpJiqBm"
        ],
        "YcwnV8ehmfP2": [
          "YcwnV8ewBcMC"
        ],
        "Ycwo1rAUEeM4": [
          "Ycwo1rz4ePWu"
        ],
        "YcwnqMGUnIlp": [
          "YcwnqMG1k6WV"
        ],
        "YcwnuFtVSNg9": [
          "YcwnuFtBTDc0"
        ],
        "YcwnBzqmzaNi": [
          "YcwnBzqJh0rw"
        ],
        "YcwoGIQXqTbE": [
          "YcwoGIQ9rwlP"
        ],
        "YcwoMap1LI2e": [
          "YcwoMap1OBEz"
        ],
        "YcwoO4ep0jVa": [
          "YcwoO4eQuKVw"
        ],
        "YcwoSEAkfPBn": [
          "YcwoSEAscusp"
        ],
        "YcwoVo2hiCVn": [
          "YcwoVo2Hsa1J"
        ],
        "YcwoYadHSsCb": [
          "YcwoYacmVwdi"
        ],
        "Ycwp13o2PKIJ": [
          "Ycwp13o5mup3"
        ],
        "YcwolT0zNqaS": [
          "YcwolT0su4S1"
        ],
        "Ycwoqn8RaOtB": [
          "Ycwoqn8mFSL8"
        ],
        "YcwoxlFMUVIO": [
          "YcwoxlFXTlnQ"
        ],
        "YcwpgOjLkaMC": [
          "YcwpgOjVTctj"
        ],
        "YcwpaGStHuSe": [
          "YcwpaGSyI49j"
        ],
        "YcwpG5820H98": [
          "YcwpG58ZroVA"
        ],
        "YcwpIrQfItEu": [
          "YcwpIrQe4440"
        ],
        "YcwpMrjpL9m1": [
          "YcwpMrjoniYi"
        ],
        "YcwpRoEeC7z0": [
          "YcwpRoELsiUg"
        ],
        "YcwpW8gNm6qi": [
          "YcwpW8gkk9Ga"
        ],
        "YcwpBc5lFqsy": [
          "YcwpBc4K1a2K"
        ],
        "YcwqhF1WfPOD": [
          "YcwqhF1VRaXR"
        ],
        "Ycwqq42IyIvf": [
          "Ycwqq42NW2al"
        ],
        "YcwqvyTjYnxt": [
          "YcwqvyTme2dV"
        ],
        "YcwrREJFVhlc": [
          "YcwrREJZALVp"
        ],
        "YcwrWu5ASVdH": [
          "YcwrWu5hgDN4"
        ],
        "Ycws7MzAX7X9": [
          "Ycws7MzLbJ5c"
        ],
        "YcwrGvlcLhN6": [
          "YcwrGvlEgd9S"
        ],
        "YcwsdFi9AG6N": [
          "YcwsdFicYATw"
        ],
        "YcwsnlUgoOSN": [
          "YcwsnlUAGAc0"
        ],
        "YcwssONd3I42": [
          "YcwssONiqZVZ"
        ],
        "Ycwsykq5pyBn": [
          "YcwsykqaXqa3"
        ],
        "Ycwt26WrEkp4": [
          "Ycwt26WGrWnD"
        ],
        "YcwtABrWfOjj": [
          "YcwtABr00yoo"
        ],
        "YcwtI7AyIfN1": [
          "YcwtI7AhOFxN"
        ],
        "YcwubNjnLtJI": [
          "YcwubNjpEiPs"
        ],
        "YcwthB2ZAcwo": [
          "YcwthB2GkxhY"
        ],
        "YcwtswpoYQrc": [
          "YcwtswpmBUlO"
        ],
        "YcwV2clV4veG": [
          "YcwV2clQPxDZ"
        ],
        "YcwvEQ9d8Pc0": [
          "YcwvEQ9dtcV6"
        ],
        "YcwVBMUu8vEM": [
          "YcwVBMUlLQ6C"
        ],
        "YcwWvmlpZY6R": [
          "YcwWvmlOo0r9"
        ],
        "Ycx04LnNw302": [
          "Ycx04LnwzyUr"
        ],
        "Ycx07h36VL0n": [
          "Ycx07h21Y0uB"
        ],
        "Ycx0cCOAbEul": [
          "Ycx0cCOJ8TYG"
        ],
        "Ycx0plRhl3zO": [
          "Ycx0plRP2JwW"
        ],
        "Ycx0s5wgvcPj": [
          "Ycx0s5wDyPk4"
        ],
        "Ycx0xUPPHT5h": [
          "Ycx0xUPdp9WF"
        ]
      },
      "scoreIdsBySourceId": {
        "Yk3JDShDv0lm": [
          "topScore"
        ],
        "YcwU4YhLrHhi": [
          "Y6YsJUDpF3Rz"
        ],
        "YcwU4YhmbSj3": [
          "Y6YsJUDpF3Rz"
        ],
        "YcwuSRkXdQ4q": [
          "Y6YsJUDs3FnS"
        ],
        "YcwuSRjByl0V": [
          "Y6YsJUDs3FnS"
        ],
        "YcwtABrWfOjj": [
          "Y6YsJUD4nXBK"
        ],
        "YcwtABr00yoo": [
          "Y6YsJUD4nXBK"
        ],
        "YcwtI7AyIfN1": [
          "Y6YsJUDaom70"
        ],
        "YcwtI7AhOFxN": [
          "Y6YsJUDaom70"
        ],
        "YcwthB2ZAcwo": [
          "Y6YsJUDlqtni"
        ],
        "YcwthB2GkxhY": [
          "Y6YsJUDlqtni"
        ],
        "YcwtswpoYQrc": [
          "Y6YsJUDCGVtt"
        ],
        "YcwtswpmBUlO": [
          "Y6YsJUDCGVtt"
        ],
        "Y9TLlAsPn0SI": [
          "Y6YsJUDqkk4n"
        ],
        "Y9TLlAsLsCVz": [
          "Y6YsJUDqkk4n"
        ],
        "Y9UgfJxErzpm": [
          "Y6YsJUDrH1ZG"
        ],
        "Y9UgfJwAUmA1": [
          "Y6YsJUDrH1ZG"
        ],
        "Y9UgVY4AGr7W": [
          "Y6YsJUD7qw4O"
        ],
        "Y9UgVY4ernKK": [
          "Y6YsJUD7qw4O"
        ],
        "Y9TJF8IQDkMs": [
          "Y6YsJUDWTXJ1"
        ],
        "Y9TJF8IcKUnx": [
          "Y6YsJUDWTXJ1"
        ],
        "The Ride Styles provide opportunities for cooperation among travelers in similar mindsets.": [
          "Y6YsJUDJj2qD",
          "Y6YsJUAKzB7W"
        ],
        "Y9UgJaGTrYix": [
          "Y6YsJUDJj2qD"
        ],
        "YcwubNjnLtJI": [
          "Y6YsJUDJSDdK"
        ],
        "YcwubNjpEiPs": [
          "Y6YsJUDJSDdK"
        ],
        "Ycws7MzAX7X9": [
          "Y6YsJUCbVh0h"
        ],
        "Ycws7MzLbJ5c": [
          "Y6YsJUCbVh0h"
        ],
        "YcwrREJFVhlc": [
          "Y6YsJUCocpOU"
        ],
        "YcwrREJZALVp": [
          "Y6YsJUCocpOU"
        ],
        "YcwrWu5ASVdH": [
          "Y6YsJUC4ENPA"
        ],
        "YcwrWu5hgDN4": [
          "Y6YsJUC4ENPA"
        ],
        "YcwrGvlcLhN6": [
          "Y6YsJUCkEUHs"
        ],
        "YcwrGvlEgd9S": [
          "Y6YsJUCkEUHs"
        ],
        "YcwsdFi9AG6N": [
          "Y6YsJUCwQYxQ"
        ],
        "YcwsdFicYATw": [
          "Y6YsJUCwQYxQ"
        ],
        "YcwssONd3I42": [
          "Y6YsJUCMgGba"
        ],
        "YcwssONiqZVZ": [
          "Y6YsJUCMgGba"
        ],
        "YcwsnlUgoOSN": [
          "Y6YsJUCLYypU"
        ],
        "YcwsnlUAGAc0": [
          "Y6YsJUCLYypU"
        ],
        "Ycwsykq5pyBn": [
          "Y6YsJUCZknIw"
        ],
        "YcwsykqaXqa3": [
          "Y6YsJUCZknIw"
        ],
        "Ycwt26WrEkp4": [
          "Y6YsJUC38JEp"
        ],
        "Ycwt26WGrWnD": [
          "Y6YsJUC38JEp"
        ],
        "YcwrnKbeEy2J": [
          "Y6YsJUCeeDI6"
        ],
        "YcwrnKbfpJdH": [
          "Y6YsJUCeeDI6"
        ],
        "Y9TInryY9ZP1": [
          "Y6YsJUCEFmaB"
        ],
        "Y9TInryH9YRE": [
          "Y6YsJUCEFmaB"
        ],
        "Y9TFgrefra73": [
          "Y6YsJUC9d4sC"
        ],
        "Y9TFgrefupoq": [
          "Y6YsJUC9d4sC"
        ],
        "Y9TFjpl8AcGf": [
          "Y6YsJUCONYZH"
        ],
        "Y9TFjpld7i3Y": [
          "Y6YsJUCONYZH"
        ],
        "Y9TFE5FYCgNl": [
          "Y6YsJUCr9Gnr"
        ],
        "Y9TFE5F0K0FH": [
          "Y6YsJUCr9Gnr"
        ],
        "Y9TFoeyfkJzQ": [
          "Y6YsJUC3ucqa"
        ],
        "Y9TFoeyiYh6m": [
          "Y6YsJUC3ucqa"
        ],
        "Y9TFrXhEKC3C": [
          "Y6YsJUCHBYzw"
        ],
        "Y9TFrXhm1sEQ": [
          "Y6YsJUCHBYzw"
        ],
        "Y9TFxkO5qIqD": [
          "Y6YsJUCuYsIy"
        ],
        "Y9TFxkOIm3lp": [
          "Y6YsJUCuYsIy"
        ],
        "Y9THYvSjQzlt": [
          "Y6YsJUC4PHH5"
        ],
        "Y9THYvSqwPew": [
          "Y6YsJUC4PHH5"
        ],
        "Y9THMxb0Bzuc": [
          "Y6YsJUCu9TWP"
        ],
        "Y9THMxbDj1yX": [
          "Y6YsJUCu9TWP"
        ],
        "Y9TGy49itihF": [
          "Y6YsJUBPTDfB",
          "Y6YsJUy9TOAW"
        ],
        "Y9TGy492vxFR": [
          "Y6YsJUBPTDfB"
        ],
        "Y9THQNrAgNMM": [
          "Y6YsJUBiGxYy"
        ],
        "Y9THQNrpo74z": [
          "Y6YsJUBiGxYy"
        ],
        "Y9THGf7ZPbu2": [
          "Y6YsJUBj2AwX"
        ],
        "Y9THGf7o6Ie1": [
          "Y6YsJUBj2AwX"
        ],
        "Ycx0iEXq9xoW": [
          "Y6YsJUBxiBT6",
          "Y6YsJUywHHd8",
          "Y6YsJUyMGW7j"
        ],
        "Y9THbOMY2O7F": [
          "Y6YsJUBxiBT6"
        ],
        "Y9THCbLLA2bj": [
          "Y6YsJUB1hCwE"
        ],
        "Y9THCbLQV0MK": [
          "Y6YsJUB1hCwE"
        ],
        "Y9THxiUg3Kmc": [
          "Y6YsJUBUwf7d"
        ],
        "Y9THxiUzqgKS": [
          "Y6YsJUBUwf7d"
        ],
        "Y9THpGwTiBHE": [
          "Y6YsJUBLSR1O"
        ],
        "Y9THpGwirriI": [
          "Y6YsJUBLSR1O"
        ],
        "Y9TI7BmGwz0M": [
          "Y6YsJUBmzz8Z"
        ],
        "Y9TI7BmxxxIo": [
          "Y6YsJUBmzz8Z"
        ],
        "Y9TIgyROLnx6": [
          "Y6YsJUB3aIy2"
        ],
        "Y9TIgyR7x8ID": [
          "Y6YsJUB3aIy2"
        ],
        "Y9TF30kibmU5": [
          "Y6YsJUBM1xmU"
        ],
        "Y9TF30kQhSu8": [
          "Y6YsJUBM1xmU"
        ],
        "Y9TEIdq9R9sB": [
          "Y6YsJUBXs7AS"
        ],
        "Y9TEIdqMGRyY": [
          "Y6YsJUBXs7AS"
        ],
        "YcwTEwq0tQaS": [
          "Y6YsJUBQZLFm"
        ],
        "YcwTEwqQTxN9": [
          "Y6YsJUBQZLFm"
        ],
        "Y9Tf6kJon28e": [
          "Y6YsJUBSNxsa"
        ],
        "Y9Tf6kJjfLuI": [
          "Y6YsJUBSNxsa"
        ],
        "Y9TdtyNBg7Ki": [
          "Y6YsJUBElL9y"
        ],
        "Y9TdtyNmcBDy": [
          "Y6YsJUBElL9y"
        ],
        "Y9TeYlSlUprf": [
          "Y6YsJUB7Srdl"
        ],
        "Y9TeYlS6Vst0": [
          "Y6YsJUB7Srdl"
        ],
        "Y9TdJ1HVW2nV": [
          "Y6YsJUBRN1li"
        ],
        "Y9TdJ1H3XbM4": [
          "Y6YsJUBRN1li"
        ],
        "Y9TfKgNVeWfs": [
          "Y6YsJUByDS4H"
        ],
        "Y9TfKgNWUXEm": [
          "Y6YsJUByDS4H"
        ],
        "Y9T41tcAuiFT": [
          "Y6YsJUAKCZ7F"
        ],
        "Y9T41tcPxgYu": [
          "Y6YsJUAKCZ7F"
        ],
        "Y9TgM3n4FauF": [
          "Y6YsJUAT05Jj"
        ],
        "Y9TgM3n4UrmX": [
          "Y6YsJUAT05Jj"
        ],
        "Y9TfTvvSVxlW": [
          "Y6YsJUA1MOM2"
        ],
        "Y9TfTvvCvufC": [
          "Y6YsJUA1MOM2"
        ],
        "Y9TfYKKX7ZsM": [
          "Y6YsJUAZxGC4"
        ],
        "Y9TfYKKosiuv": [
          "Y6YsJUAZxGC4"
        ],
        "Y9Tg4mGfFPes": [
          "Y6YsJUAPA1cP"
        ],
        "Y9Tg4mFdaNqu": [
          "Y6YsJUAPA1cP"
        ],
        "Y9TgeP4jEcUR": [
          "Y6YsJUAY3D7d"
        ],
        "Y9TgeP46Y2g9": [
          "Y6YsJUAY3D7d"
        ],
        "Y9TgogYk4fwW": [
          "Y6YsJUAb8oO9"
        ],
        "Y9TgogYlMDpH": [
          "Y6YsJUAb8oO9"
        ],
        "Y9TgvzAGlUyN": [
          "Y6YsJUAIStvs"
        ],
        "Y9TgvzA7Ci85": [
          "Y6YsJUAIStvs"
        ],
        "Y9TePaPJOYwx": [
          "Y6YsJUAtSkua"
        ],
        "Y9TePaP7h5Yx": [
          "Y6YsJUAtSkua"
        ],
        "Y9Te9uZYt1vG": [
          "Y6YsJUA8pDzJ"
        ],
        "Y9Te9uZGqOdJ": [
          "Y6YsJUA8pDzJ"
        ],
        "YcwTTLYmc4SE": [
          "Y6YsJUA6q375"
        ],
        "YcwTTLYrE4W2": [
          "Y6YsJUA6q375"
        ],
        "Y9TcaDTTNiJw": [
          "Y6YsJUACSIMD"
        ],
        "Y9TcaDTmDeTG": [
          "Y6YsJUACSIMD"
        ],
        "Y9TcgUvGR6LW": [
          "Y6YsJUAvejDG"
        ],
        "Y9TcgUvJ4wHg": [
          "Y6YsJUAvejDG"
        ],
        "Y9TbSxEkr0xI": [
          "Y6YsJUATHjyo"
        ],
        "Y9TbSxE9fAwG": [
          "Y6YsJUATHjyo"
        ],
        "Y9TdhXWy50Qt": [
          "Y6YsJUAu4yBX"
        ],
        "Y9TdhXW9ZAJv": [
          "Y6YsJUAu4yBX"
        ],
        "Y9TcYmCtm1iM": [
          "Y6YsJUAOnllD"
        ],
        "Y9TcYmCLr4vt": [
          "Y6YsJUAOnllD"
        ],
        "Y9TcIgyQ2ZHn": [
          "Y6YsJUACKOuW"
        ],
        "Y9TcIgyyNXoT": [
          "Y6YsJUACKOuW"
        ],
        "YcwTZMJHOOiB": [
          "Y6YsJUASmPSY"
        ],
        "YcwTZMJZEnsC": [
          "Y6YsJUASmPSY"
        ],
        "Ycwo1rAUEeM4": [
          "Y6YsJUAavcqM"
        ],
        "Ycwo1rz4ePWu": [
          "Y6YsJUAavcqM"
        ],
        "YcwnFKpFi0eE": [
          "Y6YsJUAYufzl"
        ],
        "YcwnFKpJiqBm": [
          "Y6YsJUAYufzl"
        ],
        "YcwnV8ehmfP2": [
          "Y6YsJUARanEy"
        ],
        "YcwnV8ewBcMC": [
          "Y6YsJUARanEy"
        ],
        "YcwnqMGUnIlp": [
          "Y6YsJUA4kCVq"
        ],
        "YcwnqMG1k6WV": [
          "Y6YsJUA4kCVq"
        ],
        "YcwnuFtVSNg9": [
          "Y6YsJUAwTZeJ"
        ],
        "YcwnuFtBTDc0": [
          "Y6YsJUAwTZeJ"
        ],
        "YcwnBzqmzaNi": [
          "Y6YsJUAqEwRu"
        ],
        "YcwnBzqJh0rw": [
          "Y6YsJUAqEwRu"
        ],
        "Y9TKxsQYa3Fp": [
          "Y6YsJUAKzB7W"
        ],
        "YcwoxlFMUVIO": [
          "Y6YsJUAP4nkO"
        ],
        "YcwoxlFXTlnQ": [
          "Y6YsJUAP4nkO"
        ],
        "YcwolT0zNqaS": [
          "Y6YsJUAkWDqq"
        ],
        "YcwolT0su4S1": [
          "Y6YsJUAkWDqq"
        ],
        "Ycwoqn8RaOtB": [
          "Y6YsJUA6Hhho"
        ],
        "Ycwoqn8mFSL8": [
          "Y6YsJUA6Hhho"
        ],
        "YcwpgOjLkaMC": [
          "Y6YsJUAcnx6P"
        ],
        "YcwpgOjVTctj": [
          "Y6YsJUAcnx6P"
        ],
        "YcwoO4ep0jVa": [
          "Y6YsJUArPVZA"
        ],
        "YcwoO4eQuKVw": [
          "Y6YsJUArPVZA"
        ],
        "YcwoSEAkfPBn": [
          "Y6YsJUAJGYSk"
        ],
        "YcwoSEAscusp": [
          "Y6YsJUAJGYSk"
        ],
        "YcwoGIQXqTbE": [
          "Y6YsJUAGUvdF"
        ],
        "YcwoGIQ9rwlP": [
          "Y6YsJUAGUvdF"
        ],
        "YcwoMap1LI2e": [
          "Y6YsJUzuHFbQ"
        ],
        "YcwoMap1OBEz": [
          "Y6YsJUzuHFbQ"
        ],
        "YcwoVo2hiCVn": [
          "Y6YsJUzjytZQ"
        ],
        "YcwoVo2Hsa1J": [
          "Y6YsJUzjytZQ"
        ],
        "YcwoYadHSsCb": [
          "Y6YsJUzpAFaV"
        ],
        "YcwoYacmVwdi": [
          "Y6YsJUzpAFaV"
        ],
        "Ycwp13o2PKIJ": [
          "Y6YsJUzf5nVY"
        ],
        "Ycwp13o5mup3": [
          "Y6YsJUzf5nVY"
        ],
        "YcwpaGStHuSe": [
          "Y6YsJUz9HTPO"
        ],
        "YcwpaGSyI49j": [
          "Y6YsJUz9HTPO"
        ],
        "YcwqvyTjYnxt": [
          "Y6YsJUzoTCfR"
        ],
        "YcwqvyTme2dV": [
          "Y6YsJUzoTCfR"
        ],
        "Ycwq20poMoPU": [
          "Y6YsJUzyMPuu"
        ],
        "Ycwq20oYam0l": [
          "Y6YsJUzyMPuu"
        ],
        "YcwpG5820H98": [
          "Y6YsJUzzK9et"
        ],
        "YcwpG58ZroVA": [
          "Y6YsJUzzK9et"
        ],
        "YcwpIrQfItEu": [
          "Y6YsJUzbvrwT"
        ],
        "YcwpIrQe4440": [
          "Y6YsJUzbvrwT"
        ],
        "YcwpMrjpL9m1": [
          "Y6YsJUz2gVqv"
        ],
        "YcwpMrjoniYi": [
          "Y6YsJUz2gVqv"
        ],
        "YcwpRoEeC7z0": [
          "Y6YsJUziAnWv"
        ],
        "YcwpRoELsiUg": [
          "Y6YsJUziAnWv"
        ],
        "YcwpW8gNm6qi": [
          "Y6YsJUzEEgpk"
        ],
        "YcwpW8gkk9Ga": [
          "Y6YsJUzEEgpk"
        ],
        "YcwpBc5lFqsy": [
          "Y6YsJUzMvUQw"
        ],
        "YcwpBc4K1a2K": [
          "Y6YsJUzMvUQw"
        ],
        "YcwqhF1WfPOD": [
          "Y6YsJUzSlnP8"
        ],
        "YcwqhF1VRaXR": [
          "Y6YsJUzSlnP8"
        ],
        "Ycwqq42IyIvf": [
          "Y6YsJUzWLp7m"
        ],
        "Ycwqq42NW2al": [
          "Y6YsJUzWLp7m"
        ],
        "Ycx1g9OKDUUO": [
          "Y6YsJUzjsbHz"
        ],
        "Ycx1g9NnjXWd": [
          "Y6YsJUzjsbHz"
        ],
        "Ycx19cye5Xyw": [
          "Y6YsJUzBRnmc"
        ],
        "Ycx19cy5G7Wv": [
          "Y6YsJUzBRnmc"
        ],
        "Ycx0QegTUbav": [
          "Y6YsJUzKNgjq"
        ],
        "Ycx0QegP2z8L": [
          "Y6YsJUzKNgjq"
        ],
        "Ycx0Vho9oTa9": [
          "Y6YsJUz58ULn"
        ],
        "Ycx0Vhohu7ov": [
          "Y6YsJUz58ULn"
        ],
        "Ycx0J2XMaVvE": [
          "Y6YsJUzZmSjf"
        ],
        "Ycx0J2XviYIk": [
          "Y6YsJUzZmSjf"
        ],
        "Ycx0LQY0TlvA": [
          "Y6YsJUzzfdxF"
        ],
        "Ycx0LQX18z62": [
          "Y6YsJUzzfdxF"
        ],
        "YcwZ5yc6mW6f": [
          "Y6YsJUzEdmHw"
        ],
        "YcwZ5yc2Q6eQ": [
          "Y6YsJUzEdmHw"
        ],
        "YcwUu4Y624Xt": [
          "Y6YsJUztdiRD"
        ],
        "YcwUu4XZPU0r": [
          "Y6YsJUztdiRD"
        ],
        "YcwXdSgt9rac": [
          "Y6YsJUzlJHdX"
        ],
        "YcwXdSg99OjG": [
          "Y6YsJUzlJHdX"
        ],
        "YcwUTI4fcydo": [
          "Y6YsJUzrAvg8"
        ],
        "YcwUTI4WyqWS": [
          "Y6YsJUzrAvg8"
        ],
        "YcwV9sRp7l19": [
          "Y6YsJUzysKdc"
        ],
        "YcwV9sRZqrJW": [
          "Y6YsJUzysKdc"
        ],
        "YcwWfVedirgH": [
          "Y6YsJUzj0MpD"
        ],
        "YcwWfVemuLGe": [
          "Y6YsJUzj0MpD"
        ],
        "YcwVS2YZyXxC": [
          "Y6YsJUzAhM99"
        ],
        "YcwVS2YTmr62": [
          "Y6YsJUzAhM99"
        ],
        "YcwWPE9z7lOa": [
          "Y6YsJUzIuDJM"
        ],
        "YcwWPE9f5C1G": [
          "Y6YsJUzIuDJM"
        ],
        "YcwV2clV4veG": [
          "Y6YsJUzrbadO"
        ],
        "YcwV2clQPxDZ": [
          "Y6YsJUzrbadO"
        ],
        "YcwY0PRuzUjd": [
          "Y6YsJUz2Ff9b"
        ],
        "YcwY0PRziqQv": [
          "Y6YsJUz2Ff9b"
        ],
        "YcwXJhgqAP7J": [
          "Y6YsJUzDhSqH"
        ],
        "YcwXJhgz0t8y": [
          "Y6YsJUzDhSqH"
        ],
        "YcwYsfQj9xi9": [
          "Y6YsJUzJoiQ3"
        ],
        "YcwYsfQHEPHV": [
          "Y6YsJUzJoiQ3"
        ],
        "YcwYSU9WijLa": [
          "Y6YsJUzefykc"
        ],
        "YcwYSU9Ih1ex": [
          "Y6YsJUzefykc"
        ],
        "YcwZyHGKeHz0": [
          "Y6YsJUzZOjoR"
        ],
        "YcwZyHGsDdUO": [
          "Y6YsJUzZOjoR"
        ],
        "YcwZiDRfVY3o": [
          "Y6YsJUz7iyJF"
        ],
        "YcwZiDR9l2Qo": [
          "Y6YsJUz7iyJF"
        ],
        "YcwZn0N7jnEp": [
          "Y6YsJUzhSNlN"
        ],
        "YcwZn0N4ZvQZ": [
          "Y6YsJUzhSNlN"
        ],
        "YcwZqPoNIlvr": [
          "Y6YsJUytCI7x"
        ],
        "YcwZqPofCX4z": [
          "Y6YsJUytCI7x"
        ],
        "Ycx0xUPPHT5h": [
          "Y6YsJUyaP0gM"
        ],
        "Ycx0xUPdp9WF": [
          "Y6YsJUyaP0gM"
        ],
        "YcwZKeBsf9le": [
          "Y6YsJUyobOrK"
        ],
        "YcwZKeAy7TIm": [
          "Y6YsJUyobOrK"
        ],
        "YcwvEQ9d8Pc0": [
          "Y6YsJUyJtEUm"
        ],
        "YcwvEQ9dtcV6": [
          "Y6YsJUyJtEUm"
        ],
        "YcwVBMUu8vEM": [
          "Y6YsJUy65xZA"
        ],
        "YcwVBMUlLQ6C": [
          "Y6YsJUy65xZA"
        ],
        "YcwWvmlpZY6R": [
          "Y6YsJUy6hAiw"
        ],
        "YcwWvmlOo0r9": [
          "Y6YsJUy6hAiw"
        ],
        "Y9Ui3Sg9m6Uu": [
          "Y6YsJUyJiq9y"
        ],
        "Y9Ui3SgbTPF5": [
          "Y6YsJUyJiq9y"
        ],
        "YcwZNVsATvNN": [
          "Y6YsJUyrEnlE"
        ],
        "YcwZNVsPTx9x": [
          "Y6YsJUyrEnlE"
        ],
        "Y9TG5APIKaSs": [
          "Y6YsJUy9TOAW"
        ],
        "YcwZH9JA46iW": [
          "Y6YsJUywHHd8"
        ],
        "YcwZTwQAAfg5": [
          "Y6YsJUySfkY4"
        ],
        "YcwZTwQrVT2I": [
          "Y6YsJUySfkY4"
        ],
        "Ycx006j2uAng": [
          "Y6YsJUyQ3R2S"
        ],
        "Ycx006jmHwEH": [
          "Y6YsJUyQ3R2S"
        ],
        "YcwZVA0YJbbi": [
          "Y6YsJUytQUVV"
        ],
        "YcwZVA0BtDLA": [
          "Y6YsJUytQUVV"
        ],
        "Ycx0cCOAbEul": [
          "Y6YsJUyXZOSj"
        ],
        "Ycx0cCOJ8TYG": [
          "Y6YsJUyXZOSj"
        ],
        "Ycx04LnNw302": [
          "Y6YsJUyxLRRy"
        ],
        "Ycx04LnwzyUr": [
          "Y6YsJUyxLRRy"
        ],
        "Ycx07h36VL0n": [
          "Y6YsJUy1PLs3"
        ],
        "Ycx07h21Y0uB": [
          "Y6YsJUy1PLs3"
        ],
        "Ycx0s5wgvcPj": [
          "Y6YsJUy1ZyEj"
        ],
        "Ycx0s5wDyPk4": [
          "Y6YsJUy1ZyEj"
        ],
        "Ycx0iEWPnDjD": [
          "Y6YsJUyMGW7j"
        ],
        "Ycx0plRhl3zO": [
          "Y6YsJUyLuf81"
        ],
        "Ycx0plRP2JwW": [
          "Y6YsJUyLuf81"
        ]
      },
      "childIdsByScoreId": {
        "topScore": [
          "Y6YsJUDpF3Rz",
          "Y6YsJUCeeDI6",
          "Y6YsJUBQZLFm",
          "Y6YsJUA6q375",
          "Y6YsJUASmPSY",
          "Y6YsJUzjsbHz"
        ],
        "Y6YsJUDpF3Rz": [
          "Y6YsJUDs3FnS",
          "Y6YsJUDqkk4n",
          "Y6YsJUDrH1ZG",
          "Y6YsJUD7qw4O",
          "Y6YsJUDJSDdK"
        ],
        "Y6YsJUDs3FnS": [
          "Y6YsJUD4nXBK",
          "Y6YsJUDaom70",
          "Y6YsJUDlqtni",
          "Y6YsJUDCGVtt"
        ],
        "Y6YsJUD7qw4O": [
          "Y6YsJUDWTXJ1",
          "Y6YsJUDJj2qD"
        ],
        "Y6YsJUDJSDdK": [
          "Y6YsJUCbVh0h",
          "Y6YsJUCkEUHs",
          "Y6YsJUCwQYxQ",
          "Y6YsJUCMgGba",
          "Y6YsJUCZknIw",
          "Y6YsJUC38JEp"
        ],
        "Y6YsJUCbVh0h": [
          "Y6YsJUCocpOU",
          "Y6YsJUC4ENPA"
        ],
        "Y6YsJUCMgGba": [
          "Y6YsJUCLYypU"
        ],
        "Y6YsJUCeeDI6": [
          "Y6YsJUCEFmaB",
          "Y6YsJUC4PHH5",
          "Y6YsJUBmzz8Z",
          "Y6YsJUB3aIy2"
        ],
        "Y6YsJUCEFmaB": [
          "Y6YsJUC9d4sC",
          "Y6YsJUCONYZH",
          "Y6YsJUCr9Gnr",
          "Y6YsJUC3ucqa",
          "Y6YsJUCHBYzw",
          "Y6YsJUCuYsIy"
        ],
        "Y6YsJUC4PHH5": [
          "Y6YsJUCu9TWP",
          "Y6YsJUBiGxYy",
          "Y6YsJUBj2AwX",
          "Y6YsJUB1hCwE",
          "Y6YsJUBUwf7d",
          "Y6YsJUBLSR1O"
        ],
        "Y6YsJUCu9TWP": [
          "Y6YsJUBPTDfB"
        ],
        "Y6YsJUBj2AwX": [
          "Y6YsJUBxiBT6"
        ],
        "Y6YsJUB3aIy2": [
          "Y6YsJUBM1xmU",
          "Y6YsJUBXs7AS"
        ],
        "Y6YsJUBQZLFm": [
          "Y6YsJUBSNxsa",
          "Y6YsJUByDS4H",
          "Y6YsJUAT05Jj",
          "Y6YsJUAIStvs"
        ],
        "Y6YsJUBSNxsa": [
          "Y6YsJUBElL9y",
          "Y6YsJUB7Srdl"
        ],
        "Y6YsJUB7Srdl": [
          "Y6YsJUBRN1li"
        ],
        "Y6YsJUByDS4H": [
          "Y6YsJUAKCZ7F"
        ],
        "Y6YsJUAT05Jj": [
          "Y6YsJUA1MOM2",
          "Y6YsJUAZxGC4",
          "Y6YsJUAPA1cP",
          "Y6YsJUAY3D7d",
          "Y6YsJUAb8oO9"
        ],
        "Y6YsJUAIStvs": [
          "Y6YsJUAtSkua"
        ],
        "Y6YsJUAtSkua": [
          "Y6YsJUA8pDzJ"
        ],
        "Y6YsJUA6q375": [
          "Y6YsJUACSIMD",
          "Y6YsJUAvejDG",
          "Y6YsJUATHjyo",
          "Y6YsJUAu4yBX"
        ],
        "Y6YsJUAu4yBX": [
          "Y6YsJUAOnllD",
          "Y6YsJUACKOuW"
        ],
        "Y6YsJUASmPSY": [
          "Y6YsJUAavcqM",
          "Y6YsJUAP4nkO",
          "Y6YsJUAcnx6P",
          "Y6YsJUzoTCfR"
        ],
        "Y6YsJUAavcqM": [
          "Y6YsJUAYufzl",
          "Y6YsJUARanEy",
          "Y6YsJUA4kCVq",
          "Y6YsJUAwTZeJ",
          "Y6YsJUAqEwRu"
        ],
        "Y6YsJUAqEwRu": [
          "Y6YsJUAKzB7W"
        ],
        "Y6YsJUAP4nkO": [
          "Y6YsJUAkWDqq",
          "Y6YsJUA6Hhho"
        ],
        "Y6YsJUAcnx6P": [
          "Y6YsJUArPVZA",
          "Y6YsJUAJGYSk",
          "Y6YsJUzjytZQ",
          "Y6YsJUzpAFaV",
          "Y6YsJUzf5nVY",
          "Y6YsJUz9HTPO"
        ],
        "Y6YsJUAJGYSk": [
          "Y6YsJUAGUvdF",
          "Y6YsJUzuHFbQ"
        ],
        "Y6YsJUzoTCfR": [
          "Y6YsJUzyMPuu",
          "Y6YsJUzSlnP8",
          "Y6YsJUzWLp7m"
        ],
        "Y6YsJUzyMPuu": [
          "Y6YsJUzzK9et",
          "Y6YsJUzbvrwT",
          "Y6YsJUz2gVqv",
          "Y6YsJUziAnWv",
          "Y6YsJUzEEgpk",
          "Y6YsJUzMvUQw"
        ],
        "Y6YsJUzjsbHz": [
          "Y6YsJUzBRnmc",
          "Y6YsJUzEdmHw",
          "Y6YsJUzZOjoR",
          "Y6YsJUyaP0gM"
        ],
        "Y6YsJUzBRnmc": [
          "Y6YsJUzKNgjq",
          "Y6YsJUz58ULn",
          "Y6YsJUzZmSjf",
          "Y6YsJUzzfdxF"
        ],
        "Y6YsJUzEdmHw": [
          "Y6YsJUztdiRD",
          "Y6YsJUzlJHdX",
          "Y6YsJUz2Ff9b",
          "Y6YsJUzDhSqH",
          "Y6YsJUzJoiQ3",
          "Y6YsJUzefykc"
        ],
        "Y6YsJUzlJHdX": [
          "Y6YsJUzrAvg8",
          "Y6YsJUzysKdc",
          "Y6YsJUzj0MpD",
          "Y6YsJUzIuDJM",
          "Y6YsJUzrbadO"
        ],
        "Y6YsJUzj0MpD": [
          "Y6YsJUzAhM99"
        ],
        "Y6YsJUzZOjoR": [
          "Y6YsJUz7iyJF",
          "Y6YsJUzhSNlN",
          "Y6YsJUytCI7x"
        ],
        "Y6YsJUyaP0gM": [
          "Y6YsJUyobOrK",
          "Y6YsJUyrEnlE",
          "Y6YsJUySfkY4",
          "Y6YsJUyQ3R2S",
          "Y6YsJUyXZOSj",
          "Y6YsJUy1ZyEj"
        ],
        "Y6YsJUyobOrK": [
          "Y6YsJUyJtEUm",
          "Y6YsJUy65xZA",
          "Y6YsJUy6hAiw"
        ],
        "Y6YsJUy6hAiw": [
          "Y6YsJUyJiq9y"
        ],
        "Y6YsJUyrEnlE": [
          "Y6YsJUy9TOAW",
          "Y6YsJUywHHd8"
        ],
        "Y6YsJUyQ3R2S": [
          "Y6YsJUytQUVV"
        ],
        "Y6YsJUyXZOSj": [
          "Y6YsJUyxLRRy",
          "Y6YsJUy1PLs3"
        ],
        "Y6YsJUy1ZyEj": [
          "Y6YsJUyMGW7j",
          "Y6YsJUyLuf81"
        ]
      }
    }
    tempRsData.actionsLog = [];
    repository.rsData = tempRsData as RsData;

    //Connect to the HTML
    const scoreElements = document.getElementsByTagName('rs-score');
    for (const scoreElement of scoreElements) {
      const possibleScoreId = scoreElement.getAttribute('score-Id');
      let scoreId = "";
      if (possibleScoreId) {
        scoreId = possibleScoreId;
      }

      //Create the new claim
      // const u = undefined;
      // calculateScoreActions({
      //   actions: [
      //     new Action(new Claim("Top Claim", "topClaim"), u, "add_claim"),
      //     new Action(new Claim("Child Claim 1", "ChildClaim1"), u, "add_claim"),
      //     new Action(new Claim("Child Claim 2", "ChildClaim2"), u, "add_claim"),
      //     new Action(new Claim("GrandChild Claim1", "grandChild1"), u, "add_claim"),
      //     new Action(new ClaimEdge("topClaim", "ChildClaim1", u, false, "ChildClaim1Edge"), u, "add_claimEdge"),
      //     new Action(new ClaimEdge("topClaim", "ChildClaim2", u, true, "ChildClaim2Edge"), u, "add_claimEdge"),
      //     new Action(new ClaimEdge("ChildClaim1", "grandChild1", u, false, "GrandChildClaim1Edge"), u, "add_claimEdge"),
      //     new Action(new Score("topClaim", "topClaim", u, u, u, u, u, 0, u, "topScore"), u, "add_score"),
      //   ], repository
      // }).then(async (updatedScores: any) => {
      //   await repository.notify(updatedScores);
        ReactDOM.render(<App
          scoreId={scoreId}
          repository={repository}
          messenger={messenger}
        />, scoreElement);
//      });
    }
  }
}).catch(function (error: any) {
  console.log("Error getting document:", error);
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
