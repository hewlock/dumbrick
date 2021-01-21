import config from '../config';

const initialState = [];

const ADD_SCORE = 'scores/ADD_SCORE';

/**
 * Action Creators
 */

export function addScore(name, value) {
	return {
		type: ADD_SCORE,
		payload: { name, value },
	}
}

/**
 * Selectors
 */

export function getScores(state) {
	return state.scores;
}

export function getLowScore(state) {
	if (state.scores.length < config.maxScores) {
		return 0;
	}
	return state.scores[config.maxScores - 1].value;
}

/**
 * Reducer
 */

function normalize(scores) {
	return scores.sort((a, b) => b.value - a.value).slice(0, config.maxScores);
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SCORE:
			return normalize([...state, action.payload]);
		default:
			return state;
	}
}
