const encode = (value: string, shift: number, alphabet: string[]) => {
	let result = '';

	for (let i = 0; i < value.length; i++) {
		const index = alphabet.indexOf(value[i]);

		let currentShift = shift;

		while (index + currentShift > alphabet.length) {
			currentShift -= alphabet.length;
		}

		result += alphabet[index + currentShift];
	}

	return result;
};

const decode = (value: string, shift: number, alphabet: string[]) => {
	let result = '';

	for (let i = 0; i < value.length; i++) {
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
