import React, { useState } from 'react';
import { TextField, Button, Box, makeStyles } from '@material-ui/core';
import { english, numbers } from 'front-constants';
import { encode, decode } from 'utils';

const useMainStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '350px',
	},
	buttonBox: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputs: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	valueInput: {
		width: '200px',
		margin: '10px',
	},
	shiftInput: {
		width: '100px',
		margin: '10px',
	},
	marginRight: {
		marginRight: '20px',
	},
	margin: {
		margin: '0 10px',
	},
}));

export type MainProps = {};

const Main: React.FC<MainProps> = () => {
	const classes = useMainStyles();

	const [inputValue, setInputValue] = useState('');
	const [shift, setShift] = useState(1);
	const [result, setResult] = useState('');
	const [inputError, setInputError] = useState(false);
	const [alphabetError, setAlphabetError] = useState(false);
	const [alphabet, setAlphabet] = useState([...english, ...numbers]);

	const handleInputTextChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(value);
	};

	const handleShiftChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		if (Number(value) > 0) {
			setShift(Number(value));
		}
	};

	const handleEncode = () => {
		if (!inputValue.length || !alphabet.length) {
			!inputValue.length && setInputError(true);
			!alphabet.length && setAlphabetError(true);
			return;
		}

		setInputError(false);

		setResult(encode(inputValue, shift, alphabet));
	};

	const handleDecode = () => {
		if (!inputValue.length || !alphabet.length) {
			!inputValue.length && setInputError(true);
			!alphabet.length && setAlphabetError(true);
			return;
		}

		setInputError(false);

		setResult(decode(inputValue, shift, alphabet));
	};

	const handleAlphabet = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAlphabet(e.target.value.split(''));
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.inputs}>
				<TextField
					className={classes.valueInput}
					multiline
					rowsMax={5}
					label='Your text:'
					value={inputValue}
					onChange={handleInputTextChange}
					variant='outlined'
					type='number'
					error={inputError}
					helperText={
						inputError
							? 'You need to provide some text.'
							: undefined
					}
				/>
				<TextField
					className={classes.shiftInput}
					label='Shift:'
					value={shift}
					rowsMax={5}
					onChange={handleShiftChange}
					variant='outlined'
					type='number'
				/>
			</Box>
			<TextField
				className={classes.margin}
				label='Current alphabet:'
				multiline
				fullWidth
				value={alphabet.join('')}
				onChange={handleAlphabet}
				variant='outlined'
				error={alphabetError}
				helperText={
					alphabetError ? 'You need to provide alphabet' : undefined
				}
			/>
			<Box className={classes.buttonBox}>
				<Button
					className={classes.marginRight}
					color='primary'
					size='large'
					variant='contained'
					onClick={handleEncode}
				>
					encode
				</Button>
				<Button
					color='secondary'
					size='large'
					variant='contained'
					onClick={handleDecode}
				>
					decode
				</Button>
			</Box>
			<TextField
				className={classes.margin}
				multiline
				fullWidth
				rowsMax={5}
				label='Result:'
				value={result}
				variant='outlined'
				InputProps={{
					readOnly: true,
				}}
			/>
		</Box>
	);
};

export { Main };
