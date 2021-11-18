import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json'],
			scss: {
				outputStyle: 'compressed'
			}
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		vite: () => ({
			resolve: {
				alias: {}
			},
			envPrefix: ['VITE_', 'SVELTEKIT_STARTER_'],
			plugins: [imagetools({ force: true })]
		}),

		adapter: adapter({})
	}
};

export default config;
