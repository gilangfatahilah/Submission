const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./utils/app.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./utils/template.html",
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }]
                        ],
                    },
                },
            },
        ],
    },
};