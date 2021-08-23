module.exports = function(eleventyConfig) {
    // import handlebarsjs template language
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
    // import markdown-it, to read the markdown from netlifycms in index.md
    let markdownIt = require("markdown-it");
    eleventyConfig.setLibrary("md", markdownIt);
    // passthrough admin folder to the _site folder on build
    eleventyConfig.addPassthroughCopy("admin");
};