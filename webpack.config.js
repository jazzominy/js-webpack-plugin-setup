const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, "src/index.js")
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },

	devServer: {
        contentBase: '.',
        watchContentBase: true
    },

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
			}
		]
	},

	plugins: [
		new ExtractTextPlugin({
            filename: "abc.css"
        }),
		new HtmlWebpackPlugin({
            template: "index.html"
        })
	]
}
