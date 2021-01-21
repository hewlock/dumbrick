import { createStore, compose } from 'redux';
import rootReducer from './ducks/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState, extraArgs = {}) {
	return createStore(
		rootReducer,
		preloadedState,
		composeEnhancers()
	);
}
