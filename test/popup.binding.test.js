import assert from "assert"
import { JSDOM } from "jsdom"
import { Core, Binding } from "domodel"

import { PopupModel, PopupBinding, Popup } from "../index.js"

const virtualDOM = new JSDOM()
const window = virtualDOM.window
const { document } = window

const myModel = {
	tagName: "div",
	textContent: "test"
}

const RootModel = { tagName: "div" }
let rootBinding

describe("popup.binding", () => {

	beforeEach(() => {
		rootBinding = new Binding()
		Core.run(RootModel, { parentNode: document.body, binding: rootBinding })
	})

	afterEach(() => {
		rootBinding.remove()
	})

	it("instance", () => {
		assert.ok(PopupBinding.prototype instanceof Binding)
	})

	it("model", () => {
		const popup = new Popup()
		const binding = new PopupBinding({ popup })
		rootBinding.run(PopupModel(myModel), { binding })
		assert.strictEqual(document.querySelector(".popup .body").innerHTML, "<div>test</div>")
		assert.ok(document.querySelector(".popup").classList.contains("hidden"))
	})

	it("show", () => {
		const popup = new Popup()
		const binding = new PopupBinding({ popup })
		rootBinding.run(PopupModel(myModel), { binding })
		popup.emit("show")
		assert.strictEqual(document.querySelector(".popup").classList.contains("hidden"), false)
		assert.strictEqual(popup.hidden, false)
	})

	it("hide", () => {
		const popup = new Popup()
		const binding = new PopupBinding({ popup })
		rootBinding.run(PopupModel(myModel), { binding })
		popup.emit("hide")
		assert.ok(document.querySelector(".popup").classList.contains("hidden"))
		assert.ok(popup.hidden)
	})

	it("closeButton", (done) => {
		const popup = new Popup()
		const binding = new PopupBinding({ popup })
		rootBinding.run(PopupModel(myModel), { binding })
		binding.listen(popup, "hide", () => {
			done()
		})
		binding.identifier.close.dispatchEvent(new window.Event('click'))
	})

	it("escapeKey", () => {
		const popup = new Popup()
		const binding = new PopupBinding({ popup })
		rootBinding.run(PopupModel(myModel), { binding })
		let count = 0
		binding.listen(popup, "hide", () => {
			count++
		})
		window.dispatchEvent(new window.KeyboardEvent("keydown", { keyCode: 1 }))
		window.dispatchEvent(new window.KeyboardEvent("keydown", { keyCode: 27 }))
		assert.strictEqual(count, 1)
	})

})
