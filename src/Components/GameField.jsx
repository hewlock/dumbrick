import React, {useCallback, useEffect} from 'react';

import config from '../config';
import randomInt from '../utils/randomInt';
import {finishLevel} from '../ducks/game';
import {incrementScore} from '../ducks/score';
import {useDispatch} from 'react-redux';

export default function GameField() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(incrementScore(randomInt(1, 100)))
	}, [dispatch]);

	const handleWin = useCallback(() => {
		dispatch(finishLevel(true));
	}, [dispatch]);
	const handleLose = useCallback(() => {
		dispatch(finishLevel(false));
	}, [dispatch]);

	return (
		<div className="flex-shrink-0" style={{
			width: `${config.fieldWidth}px`,
			height: `${config.fieldHeight}px`,
		}}>
			<h2>Playing Game</h2>
			<p>
				<button onClick={handleWin}>Win</button>
			</p>
			<p>
				<button onClick={handleLose}>Lose</button>
			</p>
		</div>
	);
}
