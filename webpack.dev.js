const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "utils"),
        },
        compress: true,
        port: 8000,
        liveReload: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
});