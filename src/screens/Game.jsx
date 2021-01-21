import React, { useEffect } from 'react';

import Complete from '../Components/Complete';
import Defeat from '../Components/Defeat';
import GameField from '../Components/GameField';
import Loading from '../Components/Loading';
import Score from '../Components/Score';
import {getLevel, resetGame} from '../ducks/game';
import {resetScore} from '../ducks/score';
import {useDispatch, useSelector} from 'react-redux';

export default function Game() {
	const dispatch = useDispatch();
	const level = useSelector(getLevel);

	useEffect(() => {
		dispatch(resetGame());
		dispatch(resetScore());
	}, [dispatch]);

	// TODO: create pause game state
	return (
		<>
			<div className="flex">
				<h1 className="center flex-grow-1">
					Dumbrick
				</h1>
				<GameField key={`level-${level}`}/>
				<Score />
			</div>
			<Loading />
			<Complete />
			<Defeat />
		</>
	)
}
