import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer'
import preprocess from 'svelte-preprocess'
import { sass } from 'svelte-preprocess';
import tailwind from 'tailwindcss'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	preprocess: preprocess({ style: sass() ,  postcss: {
		plugins: [
			tailwind, 
			autoprefixer
		]
	}})
};



export default config;
