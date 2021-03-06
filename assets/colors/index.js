const defaultColors = {
	warning: "#ff9800",
	danger: "#f44336",
	success: "#4caf50",
	info: "#00acc1",
	rose: "#e91e63",
	gray: "#999999"
}

const color = {
	dark: {
		primary: "#666666",
		secondary: "#191919",
		third: "#333333",
		text: "#ffffff",
		...defaultColors
	},
	light: {
		primary: "#999999",
		secondary: "#ffffff",
		text: "#000000",
		...defaultColors
	},
	purple: {
		primary: "#9c27b0",
		secondary: "#9c27b0",
		...defaultColors
	}
}

export default color[process.env.color];