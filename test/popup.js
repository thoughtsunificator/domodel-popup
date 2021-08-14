import { Observable } from "domodel"

import Popup from "../src/object/popup.js"

export function instance(test) {
	test.expect(3)
	const popup = new Popup()
	test.ok(popup.hidden)
	test.ok(popup instanceof Observable)
	test.doesNotThrow(function() {
		popup.hidden = false
	})
	test.done()
}
