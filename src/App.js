import React, { useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import configureStore from './configureStore';

export default function App() {
	const store = useMemo(() => configureStore({}), []);

	return (
		<ReduxProvider store={store}>
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Main Menu</Link>
						</li>
						<li>
							<Link to="/game">New Game</Link>
						</li>
						<li>
							<Link to="/score">High Scores</Link>
						</li>
						<li>
							<Link to="/quit">Quit</Link>
						</li>
					</ul>
				</div>
				<Switch>
					<Route exact path="/">
						<div className="App">
							<header className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<p>
									Edit <code>src/App.js</code> and save to reload.
								</p>
								<a
									className="App-link"
									href="https://reactjs.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn React
								</a>
							</header>
						</div>
					</Route>
					<Route path="/game">
						GAME
					</Route>
					<Route path="/score">
						Scores
					</Route>
					<Route path="/quit">
						quit
					</Route>
				</Switch>
			</Router>
		</ReduxProvider>
	);
}
