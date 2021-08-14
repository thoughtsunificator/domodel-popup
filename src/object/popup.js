import { Observable } from "domodel"

class Popup extends Observable {

	/**
	 * @param {boolean} hidden
	 */
	constructor() {
		super()
		this._hidden = true
	}

	/**
	 * @type {boolean}
	 */
	get hidden() {
		return this._hidden
	}

	set hidden(hidden) {
		this._hidden = hidden
	}

}

export default Popup
