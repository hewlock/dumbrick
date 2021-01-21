import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getScores} from '../../ducks/scores';

export default function() {
	const scores = useSelector(getScores);

	return (
		<div>
			<h1>High Scores</h1>
			<ul>
				{scores.map(score => (
					<li>
						{score.name} {score.value}
					</li>
				))}
			</ul>
			<Link to="/">Main Menu</Link>
		</div>
	);
}
