import React, { useCallback } from 'react';
import { Link} from 'react-router-dom';
import logo from '../../logo.svg';

export default function() {
	const handleQuit = useCallback(() => {
		window.close();
	}, []);
	return (
		<div>
			<h1>Dumbrick</h1>
			<img src={logo} className="App-logo" alt="logo" />
			<ul>
				<li>
					<Link to="/game">New Game</Link>
				</li>
				<li>
					<Link to="/scores">High Scores</Link>
				</li>
				<li>
					<Link onClick={handleQuit}>Quit</Link>
				</li>
			</ul>
		</div>
	);
}
