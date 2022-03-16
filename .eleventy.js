module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/attachments');
    eleventyConfig.addPassthroughCopy('src/styles');

    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true,
        typographer: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options)
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-abbr'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-anchor'))
        .use(require('markdown-it-table-of-contents'))
        .use(require('markdown-it-task-lists'))
    );

    return {
        dir: {
            input: 'src'
        },
        markdownTemplateEngine: 'njk'
    }
};
