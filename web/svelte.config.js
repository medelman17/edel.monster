import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},

		adapter: adapter({})
	}
};

export default config;
