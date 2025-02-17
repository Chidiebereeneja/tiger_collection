"use strict";
const regexTest = /^[A-Z][\w\d]{8}$/g;
const regexEmailTest = /^[\w._%+-]+@[a-z]+\.[a-z]{2,4}$/g;

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

let hidePasswordCheck = false;

function eyePasswordTask(e, hideBtn) {
	e.preventDefault();
	const iTag = hideBtn.querySelector("i");
	const attr = iTag.getAttribute("data-eye-open");
	const classTxt = `${iTag.classList.value.slice(0, 10).trim()} ${attr}`;
	iTag.setAttribute("data-eye-open", iTag.classList.value.slice(10));
	iTag.className = classTxt;

	if (!hidePasswordCheck) {
		password.setAttribute("type", "text");
		hidePasswordCheck = true;
	} else {
		password.setAttribute("type", "password");
		hidePasswordCheck = false;
	}
}

export {
	addStyle,
	removeStyle,
	inputStyleMatch,
	regexEmailTest,
	regexTest,
	eyePasswordTask,
};
