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

export { encode, decode };
