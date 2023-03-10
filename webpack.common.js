const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vender.js/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: "[name].[hash].[ext]",
      //         outputPath: "imgs"
      //       }
      //     },
      //   ],
      // },
    ],
  },
}