/** @type {import('tailwindcss').TailwindConfig} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				pink: {
					50: '#fff1f3',
					100: '#ffe3e7',
					200: '#ffccd5',
					300: '#ffaebd',
					400: '#fe6e8c',
					500: '#f83b67',
					600: '#e51953',
					700: '#c20e45',
					800: '#a20f41',
					900: '#8b103e'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
	darkMode: 'class'
};
