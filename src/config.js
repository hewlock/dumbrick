const config = {
	field: {
		width: 500,
		height: 600,
	},
	ball: {
		style: {
			backgroundColor: 'white',
			borderRadius: '10px',
			boxShadow: '0px 0px 3px white',
			zIndex: 1,
		},
		size: 10,
		speed: 200,
	},
	bricks: {
		style: {
			backgroundColor: 'red',
			borderRadius: '2px',
			boxShadow: '1px 1px 4px #282828',
			zIndex: 1,
		},
		cols: 5,
		height: 20,
		offset: 100,
		rows: 5,
		space: 20,
		width: 50,
	},
	paddle: {
		style: {
			backgroundColor: 'blue',
			borderRadius: '2px',
			boxShadow: '1px 1px 4px #282828',
			zIndex: 1,
		},
		height: 20,
		offset: 50,
		speed: 150,
		width: 70,
	},
	particle: {
		acceleration: 100,
		style: {
			backgroundColor: 'yellow',
			borderRadius: '5px',
			zIndex: 0,
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
