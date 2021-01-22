import config from '../config';

const { width, height } = config.field;

const px = (n) => `${n}px`;

const math = {
	size: (w, h) => ({w, h}),
	point: (x, y) => ({ x, y }),
	add: (p1, p2) => {
		return math.point(p1.x + p2.x, p1.y + p2.y);
	},
	multiply: (p1, value) => {
		return math.point(p1.x * value, p1.y * value);
	},
	normalize: ({ x, y }) => {
		const mag = Math.sqrt(x * x + y * y);
		return math.point(x / mag, y / mag);
	},
	position: (el, point, size) => {
		const { x, y } = point;
		const { w, h } = size;
		el.style.height = px(h);
		el.style.left = px(x - (w / 2));
		el.style.position = 'absolute';
		el.style.top = px(height - y - (h / 2));
		el.style.width = px(w);
	},
	randomUnitPoint: () => math.normalize(
		math.point(
			Math.random() - 0.5,
			Math.random() - 0.5
		)
	),
};

export default math;
