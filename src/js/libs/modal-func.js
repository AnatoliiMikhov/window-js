const hideModals = () => {

	const windows = document.querySelectorAll('[data-modal]');

	windows.forEach(item => {
		item.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = '0';
	});
};

export {hideModals};
