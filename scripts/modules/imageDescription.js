"use strict";
import { queryElementTask } from "./varible.js";

const checkProductTask = function (evTarget, activelink, proName) {
	const imgSrc = evTarget.src;
	const parentCon = evTarget.parentElement;
	const productObj = {};

	let productName;
	if (parentCon.tagName !== "FIGURE") {
		const figure_Con = parentCon.parentElement;
		productName = figure_Con.querySelector(proName);
	} else {
		productName = parentCon.querySelector(proName);
	}

	productObj.src = imgSrc;
	productObj.name = productName.textContent;
	productObj.active = activelink;
	productObj.targetEl = localStorage.setItem(
		"productObj",
		JSON.stringify(productObj)
	);

	window.location.href = "/pages/men_product_des.html";
};

const imgDescriptionTask = (selectorStr, activelink, proName = "") => {
	const figureCon = queryElementTask(selectorStr);

	figureCon.addEventListener("click", (ev) => {
		if (ev.target.tagName === "IMG") {
			checkProductTask(ev.target, activelink, proName);
		} else if (ev.target.tagName === "I") {
			const targetImg =
				ev.target.parentElement.parentElement.previousSibling.previousSibling;
			checkProductTask(targetImg, activelink, proName);
		}
	});
};

export { imgDescriptionTask };
