const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Optional for minifying CSS

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
                    MiniCssExtractPlugin.loader,  // Extract CSS/SCSS into a separate file
                    'css-loader',                // Resolves CSS imports
                    'postcss-loader',            // Processes CSS (optional)
                    'sass-loader',               // Compiles SCSS to CSS
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css',  // Outputs CSS file with hashed name
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),  // Minify CSS
        ],
    },
};

module.exports = [
    // CommonJS/UMD Configuration
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
    // ES Module Configuration
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
