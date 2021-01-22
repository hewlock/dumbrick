import Obj from './gameObject';
import math from './math';
import config from '../config';

const {
	color,
	cols,
	height,
	offset,
	space,
	width,
} = config.bricks;

const fWidth = config.field.width;
const fHeight = config.field.height;

export default class Brick {
	constructor({ container, row, col }) {
		this.obj = new Obj({
			position: math.point(
				(col * (width + space)) + (fWidth / 2) - (((width * (cols - 1)) + (space * (cols - 1))) / 2),
				fHeight - offset - (row * (height + space))
			),
			size: math.size(width, height),
			style: { backgroundColor: color }
		});
		this.obj.spawn(container);
	}
}
