window.addEventListener('load', () => {
	/**
	 * Bind click events to 'open-modal' classes
	 */
	const open_modal_buttons = document.querySelectorAll('button.open-modal');
	if(open_modal_buttons){
		open_modal_buttons.forEach((open_modal_button) => {
			open_modal_button.addEventListener('click', (e) => {
				e.preventDefault();

				const target = e.target.dataset.target;
				if(target){
					const modal = new Modal(target);
					modal.Open();
				}
			})
		});
	}
});