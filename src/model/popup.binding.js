import { Binding } from "domodel"

export default class extends Binding {

	onCreated() {
		const { popup } = this.properties

		this.listen(popup, "show", () => {
			if(popup.hidden) {
				popup.emit("hide")
				popup.hidden = false
			}
			this.root.classList.remove("hidden")
			popup.emit("shown")
		})

		this.listen(popup, "hide", () => {
			if(!popup.hidden) {
				popup.hidden = true
				this.root.classList.add("hidden")
				popup.emit("hidden")
			}
		})

		this.identifier.close.addEventListener("click", () => popup.emit("hide"))
		this.root.ownerDocument.defaultView.addEventListener("keydown", event => {
			if(event.keyCode === 27) {
				popup.emit("hide")
			}
		})
	}

}
