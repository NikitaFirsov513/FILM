const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname,'src'),
  mode: 'development',
  entry: ['babel-polyfill', './index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins:[
    new HTMLWebpackPlugin({
      template:"./html/index.html"
    }),
    new CleanWebpackPlugin(),
  ],
  module :{
    rules:[
      /*{
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },*/
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets:[
              '@babel/preset-env',
              "@babel/preset-react",
            ],
          }
        }
      },
      
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        use:['file-loader']
      },
     
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  }
};