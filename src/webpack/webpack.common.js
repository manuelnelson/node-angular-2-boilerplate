const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const HtmlWebpack = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const loaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'sass-loader'
  }
];
module.exports = {
    entry: {
        app: [ path.resolve(rootDir, 'client', 'bootstrap') ],
        vendor: [ path.resolve(rootDir, 'client', 'vendor') ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'public'),
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
            { loader: 'raw-loader', test: /\.(css|html)$/ },
            {
               test: /\.scss$/,
               exclude: /node_modules/,
               loader: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: loaders,
               }),
            },
            { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ }
        ]
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin({
           filename: 'vendor.bundle.js',
           minChunks: Infinity,
           name: 'vendor'
       }),
       new HtmlWebpack({
           filename: 'index.html',
           inject: 'body',
           template: path.resolve(rootDir, 'client', 'index.html')
       }),
       new ExtractTextPlugin("site.css")
   ],
   resolve: {
       extensions: [ '.js', '.ts','.scss' ]
   }
};
