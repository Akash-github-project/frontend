module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "200px",

			md: "576px",

			lg: "820px",

			xl: "992px",

			"2xl": "1200px",
		},
		extend: {
			colors: {
				pink: {
					primary: "#f5317c",
				},
				gray: {
					primary: "#535b61",
				},
				green: {
					info: "B4E0DC",
				},
			},
		},
	},
};
