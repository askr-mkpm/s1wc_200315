const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/scripts/main.ts",
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
    },
    module: {
        rules: 
        [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader',]
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
    extensions: [".ts"]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};