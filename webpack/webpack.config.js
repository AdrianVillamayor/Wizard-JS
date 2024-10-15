const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: 'defaults' }]],
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};

module.exports = [
    // CommonJS Configuration
    {
        ...commonConfig,
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, '../dist'),
            library: {
                name: 'Wizard',
                type: 'umd',
                umdNamedDefine: true,
            },
            globalObject: 'this',
        },
        target: ['web', 'es5'],
    },
    // ES Module Configuration
    {
        ...commonConfig,
        output: {
            filename: 'index.esm.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
            environment: { module: true },
        },
        experiments: {
            outputModule: true,
        },
    },
];