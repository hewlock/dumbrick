import Ball from './ball';
import Brick from './brick';
import Paddle from './paddle';
import config from '../config';
import math from './math';
import Particle from './particle';

export default class Game {
	constructor({ container, onWin, onLose, onScore }) {
		this.container = container;
		this.onWin = onWin;
		this.onLose = onLose;
		this.onScore = onScore;
		this.paddle = new Paddle({ container });

		this.bricks = [];
		this.particles = [];
		const { cols, rows } = config.bricks;
		for(let col = 0; col < cols; col++) {
			for(let row=0; row < rows; row++) {
				this.bricks.push(new Brick({container, row, col}));
			}
		}
	}

	tick(delta) {
		this.paddle.tick(delta);
		if (this.ball) {
			this.ball.tick(delta);
			if(this.ball.collision(this.paddle.obj, delta)) {
				this.ball.obj.position.y = this.paddle.obj.position.y + ((config.paddle.height + config.ball.size) / 2) + 1;
				this.ball.obj.velocity = math.multiply(
					math.normalize(math.add(
						math.normalize(this.ball.obj.velocity),
						math.point((this.ball.obj.position.x - this.paddle.obj.position.x) / config.paddle.width, 0)
					)),
					config.ball.speed
				);
				this.onScore(config.score.paddle);
			}
			const oldBricks = this.bricks;
			this.bricks = [];
			oldBricks.forEach(brick => {
				if (this.ball.collision(brick.obj, delta)) {
					brick.obj.destroy();
					this.onScore(config.score.brick);
					for(let particle=0; particle < config.particle.count; particle++) {
						this.particles.push(new Particle({
							container: this.container,
							position: brick.obj.position,
						}))
					}
				}
				else {
					this.bricks.push(brick);
				}
			});

			const oldParticles = this.particles;
			this.particles = [];
			oldParticles.forEach(particle => {
				particle.tick(delta);
				if (particle.life < 0) {
					particle.obj.destroy();
				}
				else {
					this.particles.push(particle);
				}
			});

			if (this.bricks.length === 0) {
				this.onWin();
			}
			if (this.ball.obj.position.y < 0) {
				this.onLose();
			}
		}
	}

	start() {
		if (!this.ball) {
			this.ball = new Ball({
				container: this.container,
				position: math.point(
					this.paddle.obj.position.x,
					this.paddle.obj.position.y + ((config.paddle.height + config.ball.size) / 2) + 1,
				)
			});
		}
	}

	stop() {
		if (this.ball) {
			this.ball.obj.destroy();
			this.ball = null;
		}
	}
}
