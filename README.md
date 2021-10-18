# domodel-popup

Popup system for [domodel](https://github.com/thoughtsunificator/domodel).

## Getting started

### Installing

``npm install @domodel/popup``

### Usage

```javascript
import { Core, Binding } from "domodel"
import { PopupModel, PopupBinding, Popup } from "@domodel/popup"

import MyPopupModel from "/model/my-popup.js"

export default class extends Binding {

  onCreated() {

    const popup = new Popup()

    Core.run(PopupModel(MyPopupModel), { parentNode: this.root, binding: new PopupBinding({ popup }) })

  }

}
```
