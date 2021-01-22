import Obj from './gameObject';
import config from '../config';
import math from './math';

const {
	acceleration,
	life,
	size,
	speed,
	spread,
	style,
} = config.particle;

const acc = math.point(0, -acceleration);

export default class Particle {
	constructor({ container, position }) {
		this.life = life;
		this.obj = new Obj({
			position: math.add(
				position,
				math.multiply(math.randomUnitPoint(), Math.random() * spread)
			),
			size: math.size(size, size),
			style,
			velocity: math.multiply(math.randomUnitPoint(), Math.random() * speed),
		});
		this.obj.spawn(container);
	}

	tick(delta) {
		this.obj.velocity = math.add(this.obj.velocity, math.multiply(acc, delta));
		this.obj.tick(delta);
		this.life = this.life - delta;
		this.obj.el.style.opacity = (this.life / life);
	}
}
