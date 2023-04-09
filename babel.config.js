module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime", "remove-export-keywords", "@mdx-js/babel-plugin-mdx"],
};
