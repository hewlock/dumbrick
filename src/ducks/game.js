import config from '../config';

const initialState = {
	level: 1,
	loadingCount: 0,
	state: 'loading', // loading, playing, defeat, complete
};

const RESET = 'game/RESET';
const INCREMENT_LOADING_COUNT = 'game/INCREMENT_LOADING_COUNT';
const FINISH_LEVEL = 'game/FINISH_LEVEL';
const NEXT_LEVEL = 'game/NEXT_LEVEL';

/**
 * Action Creators
 */

export function resetGame() {
	return { type: RESET };
}

export function incrementLoadingCount() {
	return { type: INCREMENT_LOADING_COUNT };
}

export function finishLevel(complete) {
	return {
		type: FINISH_LEVEL,
		payload: complete,
	};
}

export function nextLevel() {
	return { type: NEXT_LEVEL };
}

/**
 * Selectors
 */

export function getIsLoading(state) {
	return state.game.state === 'loading';
}

export function getIsDefeat(state) {
	return state.game.state === 'defeat';
}

export function getIsComplete(state) {
	return state.game.state === 'complete';
}

export function getIsPlaying(state) {
	return state.game.state === 'playing';
}

export function getLoadingCount(state) {
	return state.game.loadingCount;
}

export function getLevel(state) {
	return state.game.level;
}

/**
 * Reducer
 */

function reduceIncrement(state) {
	if ((state.loadingCount + 1) < config.loadingCount) {
		return {
			...state,
			loadingCount: state.loadingCount + 1,
		};
	}
	return {
		...state,
		loadingCount: 0,
		state: 'playing',
	};
}

function reduceFinish(state, complete) {
	return {
		...state,
		state: complete ? 'complete' : 'defeat'
	}
}

function reduceNextLevel(state) {
	const level = state.level + 1;
	return {
		...initialState,
		level,
	}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RESET:
			return initialState;
		case INCREMENT_LOADING_COUNT:
			return reduceIncrement(state);
		case FINISH_LEVEL:
			return reduceFinish(state, action.payload)
		case NEXT_LEVEL:
			return reduceNextLevel(state);
		default:
			return state;
	}
}
