module.exports = function(eleventyConfig) {
    // import handlebarsjs template language
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
};