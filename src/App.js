import React, { useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import {
	BrowserRouter as Router, Link,
	Route,
	Switch,
} from 'react-router-dom';

import './App.css';

import Game from './screens/Game/Game';
import HighScore from './screens/HighScore/HighScore';
import MainMenu from './screens/MainMenu/MainMenu';
import Scores from './screens/Scores/Scores';
import configureStore from './configureStore';

export default function App() {
	const store = useMemo(() => configureStore({}), []);

	return (
		<ReduxProvider store={store}>
			<Router>
				<div>
					<Link to="/">Home</Link>
				</div>
				<Switch>
					<Route exact path="/">
						<MainMenu />
					</Route>
					<Route path="/scores">
						<Scores />
					</Route>
					<Route path="/highscore">
						<HighScore />
					</Route>
					<Route path="/game">
						<Game />
					</Route>
				</Switch>
			</Router>
		</ReduxProvider>
	);
}
