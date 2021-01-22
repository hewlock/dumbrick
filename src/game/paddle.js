import Obj from './gameObject';
import config from '../config';
import math from './math';

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;

const {
	color,
	height,
	width,
	offset,
	speed,
} = config.paddle;

const w2 = width / 2;

export default class Paddle {
	constructor({ container }) {
		this.obj = new Obj({
			position: math.point(config.field.width / 2, offset),
			size: math.size(width, height),
			style: { backgroundColor: color }
		});
		this.obj.spawn(container);

		window.addEventListener('keydown', event => {
			if (event.keyCode === KEYCODE_LEFT) {
				this.moveLeft = true;
			}
			if (event.keyCode === KEYCODE_RIGHT) {
				this.moveRight = true;
			}
		});

		window.addEventListener('keyup', event => {
			if (event.keyCode === KEYCODE_LEFT) {
				this.moveLeft = false;
			}
			if (event.keyCode === KEYCODE_RIGHT) {
				this.moveRight = false;
			}
		});
	}

	tick(delta) {
		if (this.moveLeft || this.moveRight) {
			const x = this.moveLeft ? -speed * delta : speed * delta;
			this.obj.move(math.point(x, 0))
			if (this.obj.position.x < (w2)) {
				this.obj.position.x = w2;
			}
			else if (this.obj.position.x > (config.field.width - w2)) {
				this.obj.position.x = (config.field.width - w2);
			}
		}
	}
}
