module.exports = function(eleventyConfig) {
    let handlebars = require("handlebars");

    eleventyConfig.setLibrary("hbs", handlebars);
    eleventyConfig.addPassthroughCopy({
      "./admin/config.yml": "./admin/config.yml",
    });
};