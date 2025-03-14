const prettier = require("prettier");
const yaml = require("js-yaml");
let prettierOptions;

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/');

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    port: 2525,
    startPath: '/',
    open: 'external',
    notify: false,
    ghostMode: false
  });

  eleventyConfig.addTransform("formatHTML", async (content, outputPath) => {
    if (outputPath?.endsWith(".html")) {
      if (!prettierOptions) {
        prettierOptions = await prettier.resolveConfig("test.html", {
          editorconfig: true,
        });
      }

      // 絶対パスを相対パスに変換
      content = content.replace(
        /(src|href)="\/([^"]+)"/g,
        (_, p1, p2) => {
          return `${p1}="./${p2}"`;
        }
      );

      return prettier.format(content, {
        ...prettierOptions,
        parser: "html",
      });
    }

    return content;
  });

  return {
    pathPrefix: '/',
    passthroughFileCopy: true,
    templateFormats: [
      // "html",
      // "liquid",
      // "ejs",
      // "md",
      // "hbs",
      // "mustache",
      // "haml",
      "pug",
      // "njk",
      // "11ty.js",
    ],
    dir: {
      input: 'src',
      output: 'docs',
      includes: '_template',
      layouts: "_template",
      data: '_data',
    },
  }
};



