import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useHeaderStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		marginBottom: '25px',
	},
}));

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const classes = useHeaderStyles();

	return (
		<Box className={classes.root}>
			<Typography variant='h4' color='textPrimary'>
				Caesar Cipher Encoder/Decoder
			</Typography>
		</Box>
	);
};

export { Header };
