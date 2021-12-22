import React from 'react';

const useVisibility = () => {
	const [visibility, setVisibility] = React.useState(true);
	const [firstTime, setFirstTime] = React.useState(true);
	let timeOutId;

	const removeTimer = () => {
		clearTimeout(timeOutId);
		timeOutId = 0;
	};

	React.useEffect(
		() => {
			document.addEventListener('visibilitychange', (e) => {
				if (document.hidden) {
					switch (firstTime) {
						case true:
							setFirstTime(false)

							timeOutId = setTimeout(() => {
								setVisibility(false);
							}, 0);
							break;

						default:
							timeOutId = setTimeout(() => {
								setVisibility('closed');
							}, 0);
						break;
					}
				} else if (document.isConnected) {
					removeTimer();
				}
			});
		},
		[visibility]
	);

	return { visibility, setVisibility };
};

export default useVisibility;