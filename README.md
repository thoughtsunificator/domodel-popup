# domodel-popup [![Build Status](https://travis-ci.com/thoughtsunificator/domodel-popup.svg?branch=master)](https://travis-ci.com/thoughtsunificator/domodel-popup)

Pagination system for [domodel](https://github.com/thoughtsunificator/domodel).

## Getting started

### Installing

``npm install @domodel/popup``

### Usage

```javascript
import { Core, Binding } from "domodel"
import { PopupModel, Popup } from "@domodel/paginator"

import MyPopupModel from "/model/my-popup.js"
import MyPopupBinding from "/model/my-popup.binding.js"

export default class extends Binding {

	onCreated() {
		const popup = new Popup()

		Core.run(PopupModel(MyPopupModel), { parentNode: this.root, binding: new MyPopupBinding({ popup }) })
	}

}
```
