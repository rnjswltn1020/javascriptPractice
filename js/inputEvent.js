export default class {
	constructor({ save }) {
		this.$title = document.querySelector('#title');
		this.$btn = document.querySelector('#send');
		this.$btnCancel = document.querySelector('#cancel');
		this.save = save;

		this.$btn.addEventListener('click', () => {
			let titleValue = this.$title.value;
			let dataValue = {
				title: titleValue,
			};
			this.$title.value = '';
			this.save(dataValue);
		});

		this.$btnCancel.addEventListener('click', () => {
			this.$title.value = '';
		});
	}
}
