#!/usr/bin/env node

const filesToReplace = [
    { regexString: "css/main" },
    { regexString: "js/main" },
    { regexString: "js/\\d\\." },
]

const fs = require('fs')

// Gather up the cache busting file names
let indexHtml
try {
    indexHtml = fs.readFileSync('build/index.html', 'utf8')
} catch (err) {
    console.error(err)
}

// indexHtml = indexHtml.replace(/"\/static\//g, '"static/');

for (const fileInfo of filesToReplace) {
    fileInfo.newfileName = indexHtml.match(
        new RegExp(
            '"(/static/' +
            fileInfo.regexString +
            '[^"]*)'
        )
    )[1]
}

// Replace the file names in the javascript file
let ReasonScoreFull2Js
try {
    ReasonScoreFull2Js = fs.readFileSync('build/static/js/ReasonScoreFull2.js', 'utf8')
} catch (err) {
    console.error(err)
}

for (const fileInfo of filesToReplace) {
    fileInfo.oldfileName = ReasonScoreFull2Js.match(
        new RegExp(
            '(/static/' +
            fileInfo.regexString +
            '[^"]*)'
        )
    )[1]

    ReasonScoreFull2Js = ReasonScoreFull2Js.replace(
        new RegExp(
            '(/static/' +
            fileInfo.regexString +
            '[^"]*)'
        ),
        fileInfo.newfileName // TODO: simplify all the quotes
    )

}

ReasonScoreFull2Js = ReasonScoreFull2Js.replace('rootAddress + "/static/js/bundle.js",', '');

fs.writeFileSync('build/static/js/ReasonScoreFull2.js', ReasonScoreFull2Js);

// Delete Unused Files
fs.unlinkSync(`build/index.html`);
if (fs.existsSync(`build/service-worker.js`)){
    fs.unlinkSync(`build/service-worker.js`);
}
fs.unlinkSync(`build/asset-manifest.json`);
//fs.unlinkSync(`precache-manifest`); //TODO: Figure out deletion of manifest
