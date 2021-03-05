import modalState from '../modalState';
import {hideModals} from '../libs/modal-func';

const modals = () => {
	const scrollWidth = calcScroll();

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		/* -------------------------------- functions ------------------------------- */

		const showModals = () => {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scrollWidth}px`;
		};

		/* --------------------------------- events --------------------------------- */

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				showModals();

				if (e.target.classList.contains('popup_calc_button')) {
					if (!modalState.width || !modalState.height) {
						modal.style.display = 'none';
					} else {
						hideModals();
						showModals();
					}
				}

				if (e.target.classList.contains('popup_calc_profile_button')) {
					if (!modalState.profile) {
						modal.style.display = 'none';
					} else {
						hideModals();
						showModals();
					}
				}
			});
		});

		close.addEventListener('click', () => {
			hideModals();
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				hideModals();
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scrollWidth}px`;
		}, time);
	}

	function calcScroll() {
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	showModalByTime('.popup[data-modal]', 60000);
};

export default modals;
