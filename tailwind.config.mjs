/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'color1': '#e0d3fe',
				'color2': '#d1baf4',
			}
		},
	},
	plugins: [],
}
