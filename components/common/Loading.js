import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader';

const Loading = (props) => {
	return (
		<div className="loading">
			<SyncLoader
				sizeUnit="rem"
				size={150}
				color="#123abc"
				loading={true}
			/>
		</div>
	)
}

export default Loading