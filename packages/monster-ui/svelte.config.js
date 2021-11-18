import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json'],
			scss: {
				prependData: `@import 'src/lib/styles/variables/index.scss';`,
				outputStyle: 'compressed'
			}
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
