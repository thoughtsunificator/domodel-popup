export default model => ({
	tagName: "div",
	className: "popup hidden",
	children: [{
		tagName: "button",
		identifier: "close",
		className: "close",
		title: "Close popup"
	}, {
		tagName: "div",
		identifier: "content",
		className: "body",
		children: [
			model
		]
	}]
})
