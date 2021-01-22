import Obj from './gameObject';
import config from '../config';
import math from './math';

const {
	size,
	speed,
	style,
} = config.ball;

const {
	width,
	height,
} = config.field;


export default class Ball {
	constructor({ container, position }) {
		this.obj = new Obj({
			position,
			size: math.size(size, size),
			style,
			velocity: math.multiply(math.normalize(math.point(
				Math.random() - 0.5,
				Math.random() + 0.5,
			)), speed)
		});
		this.obj.spawn(container);
	}

	isCollision(position, size) {
		const { x, y } = this.obj.position;
		const { w, h } = this.obj.size;
		const ox = position.x;
		const oy = position.y;
		const ow = size.w;
		const oh = size.h;

		const dx = Math.abs(x - ox);
		const dy = Math.abs(y - oy);
		return (dx < ((w + ow) / 2) && dy < ((h + oh) / 2));
	}

	collision(other, delta) {
		if (this.isCollision(other.position, other.size)) {
			console.log({other, obj: this.obj});
			if (!this.isCollision(math.add(other.position, math.point(this.obj.velocity.x * delta, 0)), other.size)) {
				this.obj.velocity.x *= -1;
			}
			else if (!this.isCollision(math.add(other.position, math.point(0, this.obj.velocity.y * delta)), other.size)) {
				this.obj.velocity.y *= -1;
			}
			else {
				this.obj.velocity.y *= -1;
				this.obj.velocity.x *= -1;
			}
			return true;
		}
		return false;
	}

	tick(delta) {
		this.obj.tick(delta);
		const {x, y} = this.obj.position;
		const s = size / 2;
		if (x < s || (x + s) > width) {
			this.obj.velocity.x *= -1;
		}
		if ((y + s) > height) {
			this.obj.velocity.y *= -1;
		}
	}
}
