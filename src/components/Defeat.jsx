import React from 'react';

import withGameState from '../utils/withGameState';
import {Link} from 'react-router-dom';
import {getIsDefeat} from '../ducks/game';
import {getLowScore} from '../ducks/scores';
import {getScore} from '../ducks/score';
import {useSelector} from 'react-redux';

function Defeat() {
	const lowScore = useSelector(getLowScore);
	const score = useSelector(getScore);
	return (
		<div className="modal">
			<h1>
				Defeat {score}
			</h1>
			<div>
				{ score > lowScore  ? (
					<Link to="/highscore">New High Score!</Link>
				) : (
					<Link to="/">Darn</Link>
				)}
			</div>
		</div>
	);
}

export default withGameState(getIsDefeat)(Defeat);
