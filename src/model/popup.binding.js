import { Binding } from "domodel"

import PopupEventListener from "./popup.event.js"

/**
 * @global
 */
class PopupBinding extends Binding {

	/**
	 * @param {object} properties
	 * @param {Popup}  properties.popup
	 */
	constructor(properties) {
		super(properties, new PopupEventListener(properties.popup))
	}

	onCreated() {

		const { popup } = this.properties

		this.identifier.close.addEventListener("click", () => popup.emit("hide"))
		this.root.ownerDocument.defaultView.addEventListener("keydown", event => {
			if(event.keyCode === 27) {
				popup.emit("hide")
			}
		})

	}

}

export default PopupBinding
