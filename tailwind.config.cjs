const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'slc-dark': '#1C1C1F',
				'slc-darkish': '#545454',
				'slc-lightish': '#b5b5b5',
				'slc-light': '#e9e9e9',

				'slc-blue': '#3D44A4'
			}
		}
	},

	plugins: []
};

module.exports = config;
