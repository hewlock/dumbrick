import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getScores} from '../ducks/scores';

export default function Scores() {
	const scores = useSelector(getScores);

	return (
		<div className="center">
			<h1>High Scores</h1>
			<ul className="center width-50 margin-auto">
				{scores.map((score, index) => (
					<li className="flex" key={score.name}>
						<span className="inline-block width-50 left">
							{index+1}. {score.name}
						</span>
						<span className="inline-block width-50 right">
							{score.value}
						</span>
					</li>
				))}
			</ul>
			<Link to="/">Main Menu</Link>
		</div>
	);
}
