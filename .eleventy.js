module.exports = function(eleventyConfig) {
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("src/img");

    // Copy `css/fonts/` to `_site/css/fonts`
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("src/css");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};