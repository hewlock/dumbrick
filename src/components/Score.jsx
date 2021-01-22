import React from 'react';
import {useSelector} from 'react-redux';
import {getScore} from '../ducks/score';
import {getLowScore} from '../ducks/scores';
import {getLevel} from '../ducks/game';

export default function Score() {
	const score = useSelector(getScore);
	const lowScore = useSelector(getLowScore);
	const level = useSelector(getLevel);

	return (
		<div className="flex-grow-1 center">
			<h1>Dumbrick</h1>
			<p>Level: {level}</p>
			<p>Score: {score}</p>
			<p>Leaderboard: {lowScore}</p>
		</div>
	);
}
