const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3005/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css",],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      public: path.resolve(__dirname, "public"),
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
        ],
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf4Navigation",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './Header': './src/components/Header/Header',
        './Sidebar': './src/components/Sidebar/Sidebar',
        './Bundle': './src/components/Bundle/Bundle'
      },
      shared: {
        ...deps,
        "react": {
          eager: true,
          singleton: true
        },
        "react-dom": {
          singleton: true,
          eager: true
        },
        "antd": {
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3005,
  },
};
