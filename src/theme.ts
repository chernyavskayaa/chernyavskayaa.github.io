import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Poppins'].join(','),
	},
	palette: {
		primary: {
			main: '#219ebc',
		},
		secondary: {
			main: '#3a0ca3',
		},
		text: {
			primary: '#cccccc',
			secondary: '#212121',
		},
		error: {
			main: '#931a25',
		},
	},
});

export { theme };
