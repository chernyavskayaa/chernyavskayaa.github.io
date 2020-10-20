import React from 'react';
import { ThemeProvider, Box, makeStyles } from '@material-ui/core';
import { Header, Main } from 'components';
import { theme } from 'theme';
import './styles.scss';

const useAppStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
	},

	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '40px 25px',
		borderRadius: '10px',
		backgroundColor: 'rgba(225, 242, 250, 0.226)',
		backdropFilter: 'blur(5px)',
	},
}));

const App: React.FC = () => {
	const classes = useAppStyles();

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.root}>
				<Box className={classes.card}>
					<Header />
					<Main />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export { App };
