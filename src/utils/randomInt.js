export default function randomInt(min, max = null) {
	const value = (null === max) ?
		(Math.random() * min) :
		(Math.random() * (max - min)) + min;
	return Math.floor(value);
}
