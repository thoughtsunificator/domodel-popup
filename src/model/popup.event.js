import { EventListener } from "domodel"

/**
 * @global
 */
class PopupEventListener extends EventListener {

	/**
	 *
	 */
	show() {
		const { popup } = this.properties

		if(popup.hidden) {
			popup.emit("hide")
			popup.hidden = false
		}
		this.root.classList.remove("hidden")
		popup.emit("shown")
	}

	/**
	 *
	 */
	hide() {
		const { popup } = this.properties

		if(!popup.hidden) {
			popup.hidden = true
			this.root.classList.add("hidden")
			popup.emit("hidden")
		}
	}

}

export default PopupEventListener
