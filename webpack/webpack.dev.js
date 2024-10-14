const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = common.map((config) =>
    merge(config, {
        mode: 'development',
        devtool: 'inline-source-map',
        watch: true
    })
);