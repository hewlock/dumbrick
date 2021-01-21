import React, {useCallback} from 'react';

import withGameState from '../utils/withGameState';
import {getIsComplete, nextLevel} from '../ducks/game';
import {getScore} from '../ducks/score';
import {useDispatch, useSelector} from 'react-redux';

function Complete() {
	const dispatch = useDispatch();
	const score = useSelector(getScore);

	const handleNextLevel = useCallback(() => {
		dispatch(nextLevel());
	}, [dispatch]);

	return (
		<div className="modal">
			<h1>
				Complete {score}
			</h1>
			<button onClick={handleNextLevel}>Next Level</button>
		</div>
	);
}

export default withGameState(getIsComplete)(Complete);
