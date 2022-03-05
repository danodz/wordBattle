const fs = require('fs');
const minify = function(str)
{
    return require('html-minifier').minify(str, {
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    });
}
var words = fs.readFileSync("words.js").toString();
var chance = fs.readFileSync("chance.min.js").toString();
var index = fs.readFileSync("index.html").toString();


var splits = index.split('<script src="words.js"></script><script src="chance.min.js"></script>');
console.log
var out = splits[0] + "<script>" + words + chance + "</script>" + splits[1];

fs.writeFileSync("twoWordsOneKeyboard.html", minify(out));
