import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Rubik'].join(','),
	},
	palette: {
		primary: {
			main: '#7579e7',
		},
		secondary: {
			main: '#fa7f72',
		},
		text: {
			primary: '#212121',
			secondary: '#1d1d1d1',
		},
		error: {
			main: '#931a25',
		},
	},
});

export { theme };
