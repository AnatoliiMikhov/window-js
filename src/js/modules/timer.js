const timer = (id, deadline) => {

	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	};

	const getTimeRemaining = (endtime) => {
		const time = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((time / 1000) % 60),
			minutes = Math.floor((time / (1000 * 60)) % 60),
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			days = Math.floor((time / (1000 * 60 * 60 * 24)));

		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	const setClock = (selector, endtime) => {
		const timerElem = document.querySelector(selector),
			days = timerElem.querySelector('#days'),
			hours = timerElem.querySelector('#hours'),
			minutes = timerElem.querySelector('#minutes'),
			seconds = timerElem.querySelector('#seconds');

		const timerInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const time = getTimeRemaining(endtime);

			days.textContent = addZero(time.days);
			hours.textContent = addZero(time.hours);
			minutes.textContent = addZero(time.minutes);
			seconds.textContent = addZero(time.seconds);

			if (time.total <= 0) {
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';

				clearInterval(timerInterval);
			}
		}
	};
	setClock(id, deadline);
};

export default timer;
