import { combineReducers } from 'redux';

import score from './score';
import scores from './scores';

export default combineReducers({
	score,
	scores
});
