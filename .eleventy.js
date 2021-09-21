module.exports = function(eleventyConfig) {
    // import handlebarsjs template language
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
    eleventyConfig.addPassthroughCopy({"node_modules/jszip/dist/jszip.min.js": "jszip.min.js"});
    eleventyConfig.addPassthroughCopy({"_includes/form.11ty.js": "script.js"});
};