#!/usr/bin/env node

const filesToReplace = [
    { regexString: "css/main" },
    { regexString: "js/main" },
    { regexString: "js/2\\." },
]

const fs = require('fs')

// Make index file use local reference to static folder instead of root
let indexHtml
try {
    indexHtml = fs.readFileSync('build/index.html', 'utf8')
    //console.log(data)
} catch (err) {
    console.error(err)
}

indexHtml = indexHtml.replace(/"\/static\//g, '"static/');

for (const fileInfo of filesToReplace) {
    fileInfo.newfileName = indexHtml.match(
        new RegExp(
            '"(static/' +
            fileInfo.regexString +
            '[^"]*)'
        )
    )[1]
}

console.log(filesToReplace);

