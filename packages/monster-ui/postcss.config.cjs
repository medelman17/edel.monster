const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	syntax: 'postcss-scss',

	plugins: [
		require('postcss-import')(),
		require('postcss-nesting'),
		require('autoprefixer')({ cascade: true }),
		!dev &&
			cssnano({
				preset: 'advanced'
			})
	]
};

module.exports = config;
