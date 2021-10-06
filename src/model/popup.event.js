import { EventListener } from "domodel"

/**
 * @global
 */
class PopupEventListener extends EventListener {

	/**
	 * @event PopupEventListener#shown
	 */

	/**
	 * @event PopupEventListener#hidden
	 */

	/**
	 * @event PopupEventListener#show
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
	 * @event PopupEventListener#hide
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
