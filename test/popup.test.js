import assert from "assert"
import { Observable } from "domodel"

import Popup from "../src/object/popup.js"

describe("popup", () => {

	it("instance", () => {
		const popup = new Popup()
		assert.ok(popup.hidden)
		assert.ok(popup instanceof Observable)
		assert.doesNotThrow(function() {
			popup.hidden = false
		})
	})

})
