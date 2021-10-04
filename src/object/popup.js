import { Observable } from "domodel"

/**
 * @global
 */
class Popup extends Observable {

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
