import React from 'react';
import {useSelector} from 'react-redux';
import {getScore} from '../ducks/score';
import {getLowScore} from '../ducks/scores';

export default function Score() {
	const score = useSelector(getScore);
	const lowScore = useSelector(getLowScore);

	return (
		<div className="flex-grow-1 center">
			<p>Score: {score}</p>
			<p>Low Score: {lowScore}</p>
		</div>
	);
}
