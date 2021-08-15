import PlainTextRenderer from "./PlainTextRenderer";
import Mustache from "mustache";
import { Claim, Score } from "../../../core/lib";
const commonmark: any = require('commonmark');

export function createMarkup(claim: Claim,
    score?: Score,
    fractionalizedScore: string = "",
    sign: string = "",
    plainText: boolean = false) {

    const content = Mustache.render(claim.content, { score, claim, fractionalizedScore, sign });
    var reader = new commonmark.Parser({});

    let writer: any;
    if (plainText) {
        writer = new PlainTextRenderer();
    } else {
        writer = new commonmark.HtmlRenderer({ safe: true });
    }

    var parsed = reader.parse(content);
    var html: string = writer.render(parsed)
    //Add target="_blank"
    html = html.replace(/href="/g, ' target="_blank" rel="noopener noreferrer"  href="');
    // rel="noopener noreferrer" due to security vulnerability https://www.jitbit.com/alexblog/256/
    return { __html: html };
}