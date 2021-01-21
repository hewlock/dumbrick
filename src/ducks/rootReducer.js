import { combineReducers } from 'redux';

import game from './game';
import score from './score';
import scores from './scores';

export default combineReducers({
	game,
	score,
	scores
});
