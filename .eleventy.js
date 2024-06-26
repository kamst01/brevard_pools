module.exports = function(eleventyConfig) {
    // import handlebarsjs template language
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("admin/config.yml");
};