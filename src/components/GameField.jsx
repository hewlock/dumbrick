import React, {useCallback, useEffect, useRef} from 'react';

import config from '../config';
import {finishLevel, getIsPlaying} from '../ducks/game';
import {incrementScore} from '../ducks/score';
import {useDispatch, useSelector} from 'react-redux';
import Game from '../game/game';

export default function GameField() {
	const dispatch = useDispatch();
	const isPlaying = useSelector(getIsPlaying);
	const containerRef = useRef();

	const onScore = useCallback((value) => {
		dispatch(incrementScore(value))
	}, [dispatch]);
	const onWin = useCallback(() => {
		dispatch(finishLevel(true));
	}, [dispatch]);
	const onLose = useCallback(() => {
		dispatch(finishLevel(false));
	}, [dispatch]);

	const gameRef = useRef();
	useEffect(() => {
		gameRef.current = new Game({
			container: containerRef.current,
			onScore,
			onWin,
			onLose,
		});

		const tick = 1 / config.framerate;
		const interval = setInterval(() => gameRef.current.tick(tick), 1000.0 / config.framerate);
		return () => clearInterval(interval);
	}, [onScore, onWin, onLose]);

	useEffect(() => {
		if (isPlaying) {
			gameRef.current.start();
		}
		else {
			gameRef.current.stop();
		}
	}, [isPlaying]);

	return (
		<div className="flex-shrink-0">
			<div
				ref={containerRef}
				style={{
					border: '1px solid white',
					height: `${config.field.height}px`,
					overflow: 'hidden',
					position: 'relative',
					width: `${config.field.width}px`,
				}}
			>
			</div>
		</div>
	);
}
