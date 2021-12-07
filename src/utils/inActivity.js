import { logOutAction } from '../reduxComponents/actions/Auth';

export const inActive = (timeOutInMiliseconds = 30000, dispatch) => {
	let timeOutId;

	window.addEventListener('load', setTimers);

	function startTimer() {
		//setInterval gives back and ID which we can manipulate
		timeOutId = window.setTimeout(inActive, timeOutInMiliseconds);
	}

	function inActive() {
		//Alert the user for being AFK to long
		alert('You were inActive for a long time we must log you out');
		dispatch(logOutAction());
		window.location.href = '/auth';
	}

	function setTimers() {
		//Events that prevent logout happening
		document.addEventListener('mousemove', resetTimer, false);
		document.addEventListener('mousedown', resetTimer, false);
		document.addEventListener('keypress', resetTimer, false);
		document.addEventListener('touchmove', resetTimer, false);
		startTimer();
	}

	function resetTimer() {
		//Reset the timer everytime one of the events fires
		window.clearTimeout(timeOutId);
		startTimer();
	}
};

export const documentVisibility = () => {
	document.addEventListener('visibilitychange', (e) => {
		if (document.hidden) {
			setTimeout(() => {
				console.log('BE CAREFUL, WE CONSIDER CHEATING LEAVING THIS PAGE FOR TO LONG');
			}, 1000);
		} else {
			console.log('is visible');
		}
	});
};
