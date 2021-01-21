import React from 'react';
import {useSelector} from 'react-redux';

export default function withGameState(selector) {
	return function(Component) {
		return function(props) {
			return useSelector(selector) ? <Component {...props}/> : null;
		}
	}
}
