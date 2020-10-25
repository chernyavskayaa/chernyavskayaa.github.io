import {
	englishLowercase,
	englishUppercase,
	numbers,
	russianLowercase,
	russianUppercase,
} from 'front-constants';

export type EncryptionIncomingData = {
	value: string;
	shift: number;
	alphabet: string[];
	setError: (isError: boolean) => void;
};

const encode = ({
	value,
	shift,
	alphabet,
	setError,
}: EncryptionIncomingData) => {
	let result = '';
	setError(false);

	for (let i = 0; i < value.length; i++) {
		if (!alphabet.includes(value[i])) {
			result += value[i];
			setError(true);

			continue;
		}

		const index = alphabet.indexOf(value[i]);

		let currentShift = shift;

		while (index + currentShift > alphabet.length) {
			currentShift -= alphabet.length;
		}

		if (index + currentShift === alphabet.length) {
			result += alphabet[0];
			continue;
		}

		result += alphabet[index + currentShift];
	}

	return result;
};

const decode = ({
	value,
	shift,
	alphabet,
	setError,
}: EncryptionIncomingData) => {
	let result = '';
	setError(false);

	for (let i = 0; i < value.length; i++) {
		if (!alphabet.includes(value[i])) {
			result += value[i];
			setError(true);

			continue;
		}

		const index = alphabet.indexOf(value[i]);

		let currentShift = shift;

		while (index - currentShift < 0) {
			currentShift -= alphabet.length;
		}

		result += alphabet[index - currentShift];
	}

	return result;
};

const findAlphabet = (
	value: string,
	shift: number,
	setError: EncryptionIncomingData['setError'],
	callback: typeof encode | typeof decode
) => {
	if (englishLowercase.includes(value)) {
		return callback({
			value: value,
			shift,
			setError,
			alphabet: englishLowercase,
		});
	}

	if (englishUppercase.includes(value)) {
		return callback({
			value: value,
			shift,
			setError,
			alphabet: englishUppercase,
		});
	}

	if (russianLowercase.includes(value)) {
		return callback({
			value: value,
			shift,
			setError,
			alphabet: russianLowercase,
		});
	}

	if (russianUppercase.includes(value)) {
		return callback({
			value: value,
			shift,
			setError,
			alphabet: russianUppercase,
		});
	}

	if (numbers.includes(value)) {
		return callback({
			value: value,
			shift,
			setError,
			alphabet: numbers,
		});
	} else {
		setError(true);

		return value;
	}
};

const encodeNaturalLanguage = ({
	value,
	shift,
	setError,
}: Omit<EncryptionIncomingData, 'alphabet'>) => {
	let result = '';

	for (let i = 0; i < value.length; i++) {
		result += findAlphabet(value[i], shift, setError, encode);
	}

	return result;
};

const decodeNaturalLanguage = ({
	value,
	shift,
	setError,
}: Omit<EncryptionIncomingData, 'alphabet'>) => {
	let result = '';

	for (let i = 0; i < value.length; i++) {
		result += findAlphabet(value[i], shift, setError, decode);
	}

	return result;
};

export { encode, decode, encodeNaturalLanguage, decodeNaturalLanguage };
