class Modal {
	constructor(element_id) {
		this.element = document.getElementById(element_id);
		if(this.element){
			this.close_btns = this.element.querySelectorAll('.c-modal__close');
			this.overlays = this.element.querySelectorAll('.c-modal__overlay');

			if(
				this.close_btns &&
				this.overlays
			){
				this.Initialize();
			}
		}
	}

	Initialize() {
		for (let i = 0; i < this.close_btns.length; i++) {
			this.close_btns[i].addEventListener('click', () => this.Close());
		}
		for (let i = 0; i < this.overlays.length; i++) {
			this.overlays[i].addEventListener('click', () => this.Close());
		}
	}

	Open() {
		this.element.classList.add('is-active');
	}

	Toggle() {
		this.element.classList.toggle('is-active');
	}

	Close() {
		this.element.classList.remove('is-active');
	}
}