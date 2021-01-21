const initialState = 0;

const RESET_SCORE = 'score/RESET_SCORE';
const INCREMENT_SCORE = 'score/INCREMENT_SCORE';

/**
 * Action Creators
 */

export function incrementScore(value) {
	return {
		type: INCREMENT_SCORE,
		payload: value,
	}
}

export function resetScore() {
	return {
		type: RESET_SCORE,
	}
}

/**
 * Selectors
 */

export function getScore(state) {
	return state.score;
}

/**
 * Reducer
 */

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_SCORE:
			return state + action.payload;
		case RESET_SCORE:
			return 0;
		default:
			return state;
	}
}
