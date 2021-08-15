module.exports = function(eleventyConfig) {
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
};