import React, {useEffect} from 'react';
import randomInt from '../../utils/randomInt';
import {Link} from 'react-router-dom';
import {getScore, setScore} from '../../ducks/score';
import {useDispatch, useSelector} from 'react-redux';
import {getLowScore} from '../../ducks/scores';

export default function() {
	const score = useSelector(getScore);
	const lowScore = useSelector(getLowScore);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setScore(randomInt(1, 100)))
	}, [dispatch]);

	return (
		<div>
			<h1>Game</h1>
			<p>Low Score: {lowScore}</p>
			<p>Score: {score}</p>
			<ul>
				{ score > lowScore &&
					<li>
						<Link to="/highscore">High Score!</Link>
					</li>
				}
				<li>
					<Link to="/">Main Menu</Link>
				</li>
			</ul>
		</div>
	)
}
