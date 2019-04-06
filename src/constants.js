const SignatureModes = {
	NO_SIG: 0,
	EIP712: 1,
	GETH: 2,
	TREZOR: 3,
	ADEX: 4
}

const SignaturePrefixes = {
	NO_SIG: '',
	EIP712: '',
	GETH: '\x19Ethereum Signed Message:\n32',
	TREZOR: '\x19Ethereum Signed Message:\n\x20',
	ADEX: '\x19Ethereum Signed Message:\n108By signing this message, you acknowledge signing an AdEx bid with the hash:\n'
}

const AdUnitsTypes = [
	// Legacy
	'legacy_300x250', 'legacy_250x250', 'legacy_240x400', 'legacy_336x280', 'legacy_180x150', 
	'legacy_300x100', 'legacy_720x300', 'legacy_468x60', 'legacy_234x60', 'legacy_88x31',
	'legacy_120x90','legacy_120x60', 'legacy_120x240', 'legacy_125x125', 'legacy_728x90',
	'legacy_160x600', 'legacy_120x600','legacy_300x600',
	// IAB FLEX - TODO
]

module.exports = {
	SignatureModes,
	SignaturePrefixes,
	AdUnitsTypes
}