import Mustache from "mustache";
import { Claim, Score } from "../../core/lib";
const commonmark: any = require('commonmark');

export function createMarkup(claim: Claim,
    score?: Score,
    fractionalizedScore: string = "",
    sign: string = "",
    highlights: any[] = []) {

    const content = Mustache.render(claim.content, { claim, score, fractionalizedScore, sign, highlights });
    const reader = new commonmark.Parser({});
    const writer = new commonmark.HtmlRenderer({ safe: true });
    const parsed = reader.parse(content);
    const walker = parsed.walker();

    // Highlights
    // Get Words
    let word: string = "";
    for (const highlight of highlights) {
        for (const index of highlight.indices) {
            const tempWord = highlight.value.substring(index[0], index[1] + 1);
            if (tempWord.length > word.length) {
                word = tempWord
            }
        }
    }

    if (word !== "") {
        let event, node;
        while ((event = walker.next())) {
            node = event.node;
            if (event.entering && node.type === 'text') {
                node.literal = node.literal.replace(word, `**${word}**`);
                //node.literal = node.literal.toUpperCase();
            }
        }
    }

    var html: string = writer.render(parsed)
    //Add target="_blank"
    html = html.replace(/href="/g, ' target="_blank" rel="noopener noreferrer"  href="');
    // html += `<div>---${JSON.stringify(word)}---</div>`
    // rel="noopener noreferrer" due to security vulnerability https://www.jitbit.com/alexblog/256/
    return { __html: html };
}