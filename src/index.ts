interface GeneratePasswordOptions {
	length?: number
	withUpperCase?: boolean
	withLowerCase?: boolean
	withNumbers?: boolean
	withSymbols?: boolean
}

const defaultOptions: GeneratePasswordOptions = {
	length: 12,
	withUpperCase: true,
	withLowerCase: true,
	withNumbers: true,
	withSymbols: true,
}

const upperCase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase: string = 'abcdefghijklmnopqrstuvwxyz'
const numbers: string = '0123456789'
const symbols: string = '!@#$%^&*()_+.?'

const getChars = (options?: GeneratePasswordOptions): string => {
	let charsArray: string[] = [upperCase, lowerCase, numbers, symbols]

	if (options?.withUpperCase !== undefined && !options.withUpperCase) {
		charsArray = charsArray.filter(chars => chars !== upperCase)
	}
	if (options?.withLowerCase !== undefined && !options.withLowerCase) {
		charsArray = charsArray.filter(chars => chars !== lowerCase)
	}
	if (options?.withNumbers !== undefined && !options.withNumbers) {
		charsArray = charsArray.filter(chars => chars !== numbers)
	}
	if (options?.withSymbols !== undefined && !options.withSymbols) {
		charsArray = charsArray.filter(chars => chars !== symbols)
	}

	if (charsArray.length === 0) return getChars(defaultOptions)
	return charsArray.join('')
}

export const generatePassword = (options?: GeneratePasswordOptions): string => {
	let password: string = ''
	let passwordLength: number = options?.length || defaultOptions.length!
	if (passwordLength <= 0) passwordLength = defaultOptions.length!

	const chars: string = getChars(options)

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length)
		password += chars[randomIndex]
	}

	return password
}

export const generatePasswords = (
	amount: number,
	options?: GeneratePasswordOptions
): string[] => {
	let passwords: string[] = []

	for (let i = 0; i < amount; i++) {
		const password = generatePassword(options)
		passwords.push(password)
	}

	return passwords
}
