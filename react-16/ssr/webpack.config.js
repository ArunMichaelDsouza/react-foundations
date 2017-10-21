module.exports = {
	entry: './client/index.js',
	output: {
		filename: './server/public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
			}
		]
	}
};