import React, {useEffect} from 'react';

import withGameState from '../utils/withGameState';
import {getLoadingCount, getIsLoading, incrementLoadingCount} from '../ducks/game';
import {useDispatch, useSelector} from 'react-redux';

function Loading() {
	const dispatch = useDispatch();
	const loadingCount = useSelector(getLoadingCount);

	useEffect(() => {
		setTimeout(() => dispatch(incrementLoadingCount()), 1000);
	}, [dispatch, loadingCount]);

	return (
		<div className="modal center margin-auto">
			<h2>
				Loading: {loadingCount + 1}
			</h2>
		</div>
	);
}

export default withGameState(getIsLoading)(Loading)
