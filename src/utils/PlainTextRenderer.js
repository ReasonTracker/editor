"use strict";

import Renderer from "./renderer.js";

function PlainTextRenderer(options) {
    options = options || {};
}

/* Node methods */

function text(node) {
    this.out(node.literal);
}

function softbreak() {
}

function linebreak() {
    this.cr();
}

function link(node, entering) {
}

function image(node, entering) {
}

function emph(node, entering) {
}

function strong(node, entering) {
}

function paragraph(node, entering) {
    var grandparent = node.parent.parent;
    if (grandparent !== null && grandparent.type === "list") {
        if (grandparent.listTight) {
            return;
        }
    }
    if (entering) {
        this.cr();
    } else {
        this.cr();
    }
}

function heading(node, entering) {
    if (entering) {
        this.cr();
    } else {
        this.cr();
    }
}

function code(node) {
    this.out(node.literal);
}

function code_block(node) {
    this.cr();
    this.out(node.literal);
    this.cr();
}

function thematic_break(node) {
    this.cr();
    this.out('------');
    this.cr();
}

function block_quote(node, entering) {
    if (entering) {
        this.cr();
    } else {
        this.cr();
    }
}

function list(node, entering) {
    if (entering) {
        this.lit('• ');
        this.cr();
    } else {
        this.cr();
    }
}

function item(node, entering) {
    if (entering) {
    } else {
        this.cr();
    }
}

function html_inline(node) {
}

function html_block(node) {
}

function custom_inline(node, entering) {
}

function custom_block(node, entering) {
}

/* Helper methods */

function out(s) {
    // ToDo, this is not escaped properly so do not trust input form the internet
    this.lit(s);
}

// quick browser-compatible inheritance
PlainTextRenderer.prototype = Object.create(Renderer.prototype);

PlainTextRenderer.prototype.text = text;
PlainTextRenderer.prototype.html_inline = html_inline;
PlainTextRenderer.prototype.html_block = html_block;
PlainTextRenderer.prototype.softbreak = softbreak;
PlainTextRenderer.prototype.linebreak = linebreak;
PlainTextRenderer.prototype.link = link;
PlainTextRenderer.prototype.image = image;
PlainTextRenderer.prototype.emph = emph;
PlainTextRenderer.prototype.strong = strong;
PlainTextRenderer.prototype.paragraph = paragraph;
PlainTextRenderer.prototype.heading = heading;
PlainTextRenderer.prototype.code = code;
PlainTextRenderer.prototype.code_block = code_block;
PlainTextRenderer.prototype.thematic_break = thematic_break;
PlainTextRenderer.prototype.block_quote = block_quote;
PlainTextRenderer.prototype.list = list;
PlainTextRenderer.prototype.item = item;
PlainTextRenderer.prototype.custom_inline = custom_inline;
PlainTextRenderer.prototype.custom_block = custom_block;

PlainTextRenderer.prototype.out = out;

export default PlainTextRenderer;