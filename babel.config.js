module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.0",
      },
    ],
  ],
};

// if you have any polyfill you need to let them know here
