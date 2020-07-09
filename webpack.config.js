const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.jsx'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    compress: true,
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.resolve(__dirname, './public/index.html'),
      scriptLoading: 'defer',
      inject: 'head'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
