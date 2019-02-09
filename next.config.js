const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

// NOTE: Do not add .css rule here
// It's handled by withCSS
module.exports = withCSS({
	webpack: (config, {}) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader'
		});

		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.ROOT': JSON.stringify(process.env.ROOT),
			})
		);

		return config;
	},
})