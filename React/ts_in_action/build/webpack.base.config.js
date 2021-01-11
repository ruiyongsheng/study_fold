const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "app": "./src/index.tsx"
  },
  output: {
    filename: "[name].[chunks:8].js"
  },
  resolve: {
    extensions: ['.js','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: "ts-loader"
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}