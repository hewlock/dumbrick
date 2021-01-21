import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getScore, resetScore} from '../../ducks/score';
import {addScore} from '../../ducks/scores';

export default function() {
	const score = useSelector(getScore);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const handleChange = useCallback((e) => setName(e.target.value), [setName]);
	const history = useHistory();
	const handleSave = useCallback(() => {
		dispatch(addScore(name, score));
		dispatch(resetScore());
		history.push('/scores');
	}, [dispatch, name, score, history]);

	return (
		<div>
			<h1>New High Score</h1>
			<p>Score: {score}</p>
			<p>Name: {name}</p>
			<input type="text" value={name} onChange={handleChange}/>
			<button onClick={handleSave}>
				Save
			</button>
		</div>
	)
}
