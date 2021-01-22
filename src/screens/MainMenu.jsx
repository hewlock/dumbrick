import React, { useCallback } from 'react';

import Logo from '../components/Logo';
import {Link} from 'react-router-dom';

export default function MainMenu() {
	const handleQuit = useCallback(() => {
		window.close();
	}, []);

	return (
		<div className="center">
			<Logo />
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
