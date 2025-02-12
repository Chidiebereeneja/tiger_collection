"use strict";
const regexTest = /^[A-Z][\w\d]{8}$/g;

const addStyle = (targetEl, str) => {
	targetEl.classList.add(str);
};

const removeStyle = (targetEl, str) => {
	targetEl.classList.remove(str);
};

function inputStyleMatch(e) {
	const targetEl = e.target;
	if (targetEl.id === "password") {
		targetEl.classList.add("noMatchStyle");
		document.querySelector("#warningMsg").classList.remove("hidden");

		if (regexTest.test(targetEl.value.trim())) {
			removeStyle(targetEl, "noMatchStyle");
			addStyle(targetEl, "matchStyle");
		} else {
			removeStyle(targetEl, "matchStyle");
			addStyle(targetEl, "noMatchStyle");
		}
	}
}

export { addStyle, removeStyle, inputStyleMatch };
