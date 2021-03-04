import modalState from '../modalState';

const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]');

		/* -------------------------------- functions ------------------------------- */

		const hideModals = () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});
		};

		const toggleModals = (display, overflow) => {
			modal.style.display = display;
			document.body.style.overflow = overflow;
		};

		/* --------------------------------- events --------------------------------- */

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}


				toggleModals('block', 'hidden');

				if (e.target.classList.contains('popup_calc_button')) {
					if (!modalState.width || !modalState.height) {
						modal.style.display = 'none';
					} else {
						hideModals();
						toggleModals('block', 'hidden');
					}
				}

				if (e.target.classList.contains('popup_calc_profile_button')) {
					if (!modalState.profile) {
						modal.style.display = 'none';
					} else {
						hideModals();
						toggleModals('block', 'hidden');
					}
				}
			});
		});

		close.addEventListener('click', () => {

			hideModals();
			toggleModals('none', '');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {

				hideModals();
				toggleModals('none', '');
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 6000);
};

export default modals;
