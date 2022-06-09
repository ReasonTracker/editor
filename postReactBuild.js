#!/usr/bin/env node

const filesToReplace = [
    { regexString: "css/main" },
    { regexString: "js/main" },
    // { regexString: "js/\\d\\." },
]

const copyDestinations = [
    // "../gullibot.github.io/static-root/static",
    "../reasonscore.github.io/static"
]

const fs = require('fs')
const Path = require('path');

function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    fs.mkdirSync(dest);
    for (let entry of entries) {
        const srcPath = Path.join(src, entry.name);
        const destPath = Path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Gather up the cache busting file names
let indexHtml
try {
    indexHtml = fs.readFileSync('build/index.html', 'utf8')
} catch (err) {
    console.error(err)
}

// indexHtml = indexHtml.replace(/"\/static\//g, '"static/');

for (const fileInfo of filesToReplace) {
    const newFileName = indexHtml.match(
        new RegExp(
            '"(/static/' +
            fileInfo.regexString +
            '[^"]*)'
        )
    )

    if (newFileName) {
        fileInfo.newfileName = newFileName[1]
    }

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
if (fs.existsSync(`build/service-worker.js`)) {
    fs.unlinkSync(`build/service-worker.js`);
}
fs.unlinkSync(`build/asset-manifest.json`);
//fs.unlinkSync(`precache-manifest`); //TODO: Figure out deletion of manifest


// Copy the fils to other projects
for (const dest of copyDestinations) {
    fs.rmdirSync(dest, { recursive: true });
    copyDir("./build/static", dest);
}