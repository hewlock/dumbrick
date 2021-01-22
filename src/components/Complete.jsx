import React, {useCallback} from 'react';

import withGameState from '../utils/withGameState';
import {getIsComplete, getLevel, nextLevel} from '../ducks/game';
import {getScore} from '../ducks/score';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Complete() {
	const dispatch = useDispatch();
	const score = useSelector(getScore);
	const level = useSelector(getLevel)

	const handleNextLevel = useCallback(() => {
		dispatch(nextLevel());
	}, [dispatch]);

	return (
		<div className="modal">
			<div>
				<h1>
					Level {level} Complete!
				</h1>
				<p>
					Score {score}
				</p>
				<p>
					<Link onClick={handleNextLevel}>Next Level</Link>
				</p>
			</div>
		</div>
	);
}

export default withGameState(getIsComplete)(Complete);
