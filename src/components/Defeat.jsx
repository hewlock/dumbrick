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
			<div>
				<h1>
					You Lose!
				</h1>
				<p>
					Score {score}
				</p>
				<p>
					{ score > lowScore  ? (
						<Link to="/highscore">New High Score!</Link>
					) : (
						<Link to="/">Try Again Loser</Link>
					)}
				</p>
			</div>
		</div>
	);
}

export default withGameState(getIsDefeat)(Defeat);
