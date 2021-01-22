import React, {useEffect} from 'react';

import config from '../config';
import withGameState from '../utils/withGameState';
import {getLoadingCount, getIsLoading, incrementLoadingCount} from '../ducks/game';
import {useDispatch, useSelector} from 'react-redux';

const count = config.loadingCount;

function Loading() {
	const dispatch = useDispatch();
	const loadingCount = useSelector(getLoadingCount);

	useEffect(() => {
		setTimeout(() => dispatch(incrementLoadingCount()), 1000);
	}, [dispatch, loadingCount]);

	return (
		<div className="modal center margin-auto">
			<h1>
				{count - loadingCount}
			</h1>
		</div>
	);
}

export default withGameState(getIsLoading)(Loading)
