import React, { useEffect } from 'react';

import Complete from '../components/Complete';
import Defeat from '../components/Defeat';
import GameField from '../components/GameField';
import Loading from '../components/Loading';
import Score from '../components/Score';
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
			<div className="flex" style={{margin: '20px'}}>
				<Score />
				<GameField key={`level-${level}`}/>
			</div>
			<Loading />
			<Complete />
			<Defeat />
		</>
	)
}
