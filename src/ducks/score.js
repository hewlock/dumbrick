const initialState = 0;

const RESET_SCORE = 'score/RESET_SCORE';
const SET_SCORE = 'score/SET_SCORE';

/**
 * Action Creators
 */

export function setScore(value) {
	return {
		type: SET_SCORE,
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
		case SET_SCORE:
			return action.payload;
		case RESET_SCORE:
			return 0;
		default:
			return state;
	}
}
