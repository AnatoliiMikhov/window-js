const images = () => {

	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImg = document.createElement('img');


	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);

	imgPopup.style.cssText = `display:none;`;

	imgPopup.appendChild(bigImg);

	workSection.addEventListener('click', (ev) => {
		ev.preventDefault();

		let target = ev.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'grid';
			imgPopup.style.gridTemplateColumns = 'minmax(290px, 450px)';
			imgPopup.style.placeContent = 'center';
			imgPopup.style.padding = '0' + ' ' + '15px';


			document.body.style.overflow = 'hidden';

			bigImg.style.maxWidth = '100%';
			bigImg.style.objectFit = 'cover';
			bigImg.style.margin = '0';

			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
		}
		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
};

export default images;
