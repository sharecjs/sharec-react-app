const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, options) => {
  const PRODUCTION = options.mode === 'production'

  return {
    entry: ['react-hot-loader/patch', path.join(__dirname, 'src/main.jsx')],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: PRODUCTION ? 'bundle.[hash:8].js' : 'bundle.js',
    },

    plugins: [
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'static/index.html'),
      }),
      new MiniExtractPlugin({
        filename: PRODUCTION ? 'css/main.[hash:8].css' : 'css/main.css',
        allChunks: true,
      }),
    ],

    resolve: {
      modules: ['node_modules', './src'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniExtractPlugin.loader,
              options: {
                hmr: !PRODUCTION,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },

        {
          test: /\.(png|jpe?g|svg|ttf|eot|woff2?)$/,
          loader: 'url-loader',
          options: {
            limit: 8000,
          },
        },
      ],
    },

    devServer: {
      hot: true,
      historyApiFallback: true,
    },
  }
}
