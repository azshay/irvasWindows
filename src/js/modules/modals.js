const modals = () => {
	function bindModal(trigger, modal, close) {
		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}

			modal.style.display = 'block';
		});

		close.addEventListener('click', () => {
			modal.style.display = 'none';
		});
	}

	bindModal(
		document.querySelector('.popup_engineer_btn'),
		document.querySelector('.popup_engineer'),
		document.querySelector('.popup_close_engineer')
	);

	document.querySelectorAll('.phone_link').forEach((item) => {
		bindModal(item, document.querySelector('.popup'), document.querySelector('.popup_close_call'));
	});
};

export default modals;
