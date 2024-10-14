const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // Removed 'include' as it might be unnecessary or too restrictive
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
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
    ],
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
            },
            libraryExport: 'default', // Add this line
        },
        target: 'web',
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
