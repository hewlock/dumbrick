import math from './math';

export default class GameObject {
	constructor({
		position,
		size,
		style,
		velocity,
	}) {
		this.el = document.createElement('div');
		this.position = position;
		this.size = size;
		this.styl = style;
		this.velocity = velocity;
	}

	spawn(container) {
		container.appendChild(this.el);
		math.position(this.el, this.position, this.size);
		this.style(this.styl)
	}

	destroy() {
		this.el.remove();
	}

	style(style) {
		Object.keys(style).forEach(key => {
			this.el.style[key] = style[key];
		});
	}

	tick(delta) {
		this.move(math.multiply(this.velocity, delta));
	}

	move(offset) {
		this.position = math.add(this.position, offset);
		math.position(this.el, this.position, this.size);
	}
}
