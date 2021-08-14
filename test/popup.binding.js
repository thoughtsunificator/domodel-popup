import { JSDOM } from "jsdom"
import { Core, Binding } from "domodel"

import PopupModel from "../src/model/popup.js"

import PopupBinding from "../src/model/popup.binding.js"

import Popup from "../src/object/popup.js"

const virtualDOM = new JSDOM()
const window = virtualDOM.window
const { document } = window

const myModel = {
	tagName: "div",
	textContent: "test"
}

const RootModel = { tagName: "div" }
let rootBinding

export function setUp(callback) {
	rootBinding = new Binding()
	Core.run(RootModel, { parentNode: document.body, binding: rootBinding })
	callback()
}

export function tearDown(callback) {
	rootBinding.remove()
	callback()
}

export function instance(test) {
	test.expect(1)
	test.ok(new PopupBinding() instanceof Binding)
	test.done()
}

export function model(test) {
	test.expect(2)
	const popup = new Popup()
	const binding = new PopupBinding({ popup })
	rootBinding.run(PopupModel(myModel), { binding })
	test.strictEqual(document.querySelector(".popup .body").innerHTML, "<div>test</div>")
	test.ok(document.querySelector(".popup").classList.contains("hidden"))
	test.done()
}
export function show(test) {
	test.expect(2)
	const popup = new Popup()
	const binding = new PopupBinding({ popup })
	rootBinding.run(PopupModel(myModel), { binding })
	popup.emit("show")
	test.strictEqual(document.querySelector(".popup").classList.contains("hidden"), false)
	test.strictEqual(popup.hidden, false)
	test.done()
}

export function hide(test) {
	test.expect(2)
	const popup = new Popup()
	const binding = new PopupBinding({ popup })
	rootBinding.run(PopupModel(myModel), { binding })
	popup.emit("hide")
	test.ok(document.querySelector(".popup").classList.contains("hidden"))
	test.ok(popup.hidden)
	test.done()
}

export function closeButton(test) {
	const popup = new Popup()
	const binding = new PopupBinding({ popup })
	rootBinding.run(PopupModel(myModel), { binding })
	binding.listen(popup, "hide", () => {
		test.done()
	})
	binding.identifier.close.dispatchEvent(new window.Event('click'))
}

export function escapeKey(test) {
	test.expect(1)
	const popup = new Popup()
	const binding = new PopupBinding({ popup })
	rootBinding.run(PopupModel(myModel), { binding })
	let count = 0
	binding.listen(popup, "hide", () => {
		count++
	})
	window.dispatchEvent(new window.KeyboardEvent("keydown", { keyCode: 1 }))
	window.dispatchEvent(new window.KeyboardEvent("keydown", { keyCode: 27 }))
	test.strictEqual(count, 1)
	test.done()
}
