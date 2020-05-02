import { selectNode, RsData } from "@reasonscore/core";

export function selectElement(scoreId: string, rsData: RsData) {
    const selectedNodes = selectNode(scoreId, rsData);
    const expander2s = window.document.getElementsByClassName('expander2') as HTMLCollectionOf<HTMLInputElement>;
    for (const expander2 of expander2s) {
        const expander3 = window.document.getElementById(expander2.id.replace("expander2", "expander3")) as HTMLInputElement;
        // TODO: Find feels very slow here. Should it be a dictionairy
        const selectedNode = selectedNodes.find(e => e.itemId === expander2.id.substring(10, 100))
        if (selectedNode) {
            if (selectedNode.status === `selected`) {
                expander2.checked = true;
                expander3.checked = true;
            } else if (selectedNode.status === `ancestor`) {
                expander2.checked = false;
                expander3.checked = true;
            } else {
                expander2.checked = false;
                expander3.checked = false;
            }
        } else {
            expander2.checked = false;
            expander3.checked = false;
        }
    }
}