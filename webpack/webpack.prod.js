const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = common.map((config) =>
    merge(config, {
        mode: 'production',
    })
);