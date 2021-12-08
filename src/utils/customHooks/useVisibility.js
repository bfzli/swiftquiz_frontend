import React from 'react';

const useVisibility = () => {
	const [ visibility, setVisibility ] = React.useState(true);
	let timeOutId;

	const removeTimer = () => {
		clearTimeout(timeOutId);
		timeOutId = 0;
	};

	React.useEffect(
		() => {
			document.addEventListener('visibilitychange', (e) => {
				if (document.hidden) {
					timeOutId = setTimeout(() => {
						setVisibility(false);
					}, 20000);
				} else if (document.isConnected) {
					removeTimer();
				}
			});
		},
		[ visibility ]
	);

	return { visibility, setVisibility };
};

export default useVisibility;
