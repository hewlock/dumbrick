const config = {
	field: {
		width: 500,
		height: 600,
	},
	ball: {
		style: {
			backgroundColor: 'white',
			borderRadius: '10px',
		},
		size: 10,
		speed: 200,
	},
	bricks: {
		color: 'red',
		cols: 5,
		height: 20,
		offset: 100,
		rows: 5,
		space: 20,
		width: 50,
	},
	paddle: {
		color: 'blue',
		height: 20,
		offset: 50,
		speed: 100,
		width: 70,
	},
	particle: {
		acceleration: 100,
		style: {
			backgroundColor: 'yellow',
			borderRadius: '5px',
		},
		count: 20,
		life: 3,
		size: 5,
		speed: 50,
		spread: 20,
	},
	score: {
		brick: 100,
		paddle: 10,
	},
	framerate: 50,
	loadingCount: 3,
	maxScores: 10,
};

export default config;
