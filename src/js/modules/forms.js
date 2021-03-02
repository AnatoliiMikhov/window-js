const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInputs = document.querySelectorAll('input[name=user_phone]');

	/* ------------------------------- check input ------------------------------ */

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});

	/* -------------------------------- messages -------------------------------- */

	const message = {
		loading: "Loading...",
		success: "Thanks...",
		failure: "Что-то пошло не так..."
	};

	/* -------------------------------- post Data ------------------------------- */

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;

		let response = await fetch(url, {
			method: "POST",
			body: data
		});
		return await response.text();
	};

	/* ------------------------------ clear inputs ------------------------------ */

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = "";
		});
	};

	/* ------------------------------- submit form ------------------------------ */

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
}

export default forms;
