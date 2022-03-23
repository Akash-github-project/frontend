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
			spacing: {
				ms: "13px",
			},
			colors: {
				pink: {
					primary: "#f5317c",
				},
				gray: {
					primary: "#535b61",
					separator: "#ccbebe",
				},
				green: {
					info: "#009688",
				},
			},
			boxShadow: {
				default: "0 0 15px rgba(0, 0, 0, 0.3)",
			},
		},
	},
};
