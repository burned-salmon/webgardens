export default function (eleventyConfig) {
    // Order matters, put this at the top of your configuration file.
    // This is relative to your input directory!
    eleventyConfig.setInputDirectory("_src");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_layouts");

    // NTS: REMEMBER THE _src IN ALL PASSTHROUGHCOPY THINGS
    eleventyConfig.addPassthroughCopy("_src/robots.txt");
    //eleventyConfig.addPassthroughCopy("_src/favicon.ico");
    eleventyConfig.addPassthroughCopy("_src/_img");
};
