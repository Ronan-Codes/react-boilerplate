const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  // change to lib something if babel 
  node: 'development',
//   production to activate tree shaking?
  output: {
    path: path.resolve(__dirname, 'dist'),
    // current directory to dist
    filename: 'main.js',
    // filename of the bundled code 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
      //   avoids transpiling these
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template:path.resolve(__dirname, 'public', 'index.html')})],
  // creates index.html template from public/index.html
};