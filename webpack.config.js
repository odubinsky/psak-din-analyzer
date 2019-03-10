// module.exports = {
//   context: __dirname,
//   entry: "./index.js",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: "transform-loader?brfs",
//         enforce:'post',
//         use: "transform-loader?brfs",
//       }
//     ],
//     resolve: {
//       modules: ["./src", "./node_modules"],
//       extensions: [".js", ".jsx"],
//     },
//     node: {
//       fs: 'empty'
//     }
//   }
// }
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};