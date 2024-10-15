const htmlmin = require("html-minifier-terser");
let handlebars = require("handlebars");
module.exports = function(eleventyConfig) {
    // import handlebarsjs template language
    eleventyConfig.setLibrary("hbs", handlebars);

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("admin/config.yml");
    eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
                html5: true,
                minifyJS: true,
                processScripts: ['application/ld+json'] 
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});
};