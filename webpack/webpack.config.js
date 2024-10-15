const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
                        sourceType: 'module',
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
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
};

module.exports = [
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
            libraryExport: 'default',
        },
        target: ['web', 'es5'],
    },
    {
        ...commonConfig,
        output: {
            filename: 'index.esm.js',
            path: path.resolve(__dirname, '../dist'),
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
