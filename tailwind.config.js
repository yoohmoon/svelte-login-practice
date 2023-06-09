/** @type {import('tailwindcss').Config} */
export default {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	content: [],
	theme: {
		extend: {
			colors: {
				'custom-blue': '#2a96fc'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
