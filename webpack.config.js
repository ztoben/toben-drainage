const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new FaviconsWebpackPlugin('./assets/favicon.png'),
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        plugins: [
          ['gifsicle', {interlaced: true}],
          ['mozjpeg', {progressive: true, quality: 50}],
          ['pngquant', {quality: [0.5, 0.6], speed: 10}],
          ['svgo', {plugins: [{removeViewBox: false}]}],
        ],
      },
    }),
  ],
  devServer: {
    compress: true,
    contentBase: './dist',
    disableHostCheck: true,
    hot: true,
    open: true,
    port: 9999,
  },
};
