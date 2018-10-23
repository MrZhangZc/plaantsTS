const path = require("path")
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')
const glob = require('glob')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin

const r = url => path.resolve(__dirname, url)

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        r('./src/index.tsx')
    ],
    output: {
        path: r('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: "source-map",

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=./src/public/images/[name].[ext]?[hash:8]`
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '../'
                })
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html',
            chunksSortMode: 'none'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('css/index.css'),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })

    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    performance: {
        hints: false
    },
    resolve: {
        plugins: [
            new TsConfigPathsPlugin({
                configFileName: path.resolve(__dirname, './tsconfig.json')
            })
        ],
        extensions: ['.js', 'config.js', '.json', '.ts', '.tsx'],
        alias: {
            '@components': path.resolve(__dirname, './src/componens'),
            '@images': path.resolve(__dirname, './src/public/images'),
            '@fonts': path.resolve(__dirname, './src/public/fonts'),
            '@datep': path.resolve(__dirname, './src/date/p'),
            '@datec': path.resolve(__dirname, './src/date/c'),
            '@date': path.resolve(__dirname, './src/date'),
            '@page': path.resolve(__dirname, './src/page'),
        }
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};