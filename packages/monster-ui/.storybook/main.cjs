const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)'],
	addons: [
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				}
			}
		},
		'@storybook/addon-jest',
		'@storybook/addon-cssresources',

		// '@storybook/addon-storysource',
		'@storybook/addon-a11y',
		'@washingtonpost/storybook-addon-web-vitals',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
		'@storybook/preset-scss'
	],
	webpackFinal: async (config) => {
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes('svelte-loader')
		);
		svelteLoader.options = {
			...svelteLoader.options,
			preprocess: sveltePreprocess({
				postcss: true,
				scss: {
					prependData: `@import 'src/styles/variables/index.scss';`,
					outputStyle: 'compressed'
				},
				preserve: ['ld+json']
			})
		};

		return config;
	}
};
