import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    main :path.resolve(__dirname, 'src/index'),
    vrndor : path.resolve(__dirname,'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      template:"src/index.html",
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject:true
    }),
    new webpack.optimize.DedupePlugin(),
    //Minify JS
    new webpack.optimize.UglifyJsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})

    //Eliminate duplicate packages when generating bundles

  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders:ExtractTextPlugin.extract('css?sourceMap') }
    ]
  }
}
