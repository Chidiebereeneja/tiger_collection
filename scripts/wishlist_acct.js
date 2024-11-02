"use strict";

import { defaultStyleTask } from "./modules/varible.js";
import { queryAllElementTask, queryElementTask } from "./modules/varible.js";
defaultStyleTask("Account");

const liEls = queryAllElementTask(".account_container ul li");
const accordBtnCon = queryElementTask(".accordionBtn");

const defaultSelectTask = function (str) {
	const pageTrack = queryElementTask("#trackCur_page");
	const h1El = queryElementTask(".h1Display");

	liEls.forEach((li) => li.classList.remove("defaultStyle"));

	liEls.forEach((li) => {
		const targetName = li
			.querySelector("span")
			.textContent.toLowerCase()
			.trim();
		const strLow = str.toLowerCase().trim();

		if (targetName === strLow) {
			li.classList.add("defaultStyle");
			pageTrack.textContent = `${strLow}`;
			h1El.textContent = `${strLow}`;
		}
	});
};
defaultSelectTask("My Orders");

const clickEventStyleTask = function () {
	liEls.forEach((li) => {
		li.addEventListener("click", () => {
			const spanCont = li.querySelector("span").textContent.trim();
			defaultSelectTask(spanCont);
		});
	});
};
clickEventStyleTask();

const defaultBtnTask = function (targetStr) {
	const btns = accordBtnCon.querySelectorAll("button");
	btns.forEach((btn) => btn.classList.remove("defaultStyle-2"));

	const [targetBtn] = Array.from(btns).filter(
		(btn) => btn.textContent.trim() === targetStr
	);

	targetBtn.classList.add("defaultStyle-2");
};
defaultBtnTask("Active");

accordBtnCon.addEventListener("click", (ev) => {
	if (ev.target.tagName === "BUTTON") {
		defaultBtnTask(ev.target.textContent.trim());

		const accordionCon = queryAllElementTask(".accordion");
		accordionCon.forEach((accordion) => accordion.classList.add("hidden"));

		const displayAccord = document.getElementById(
			`${ev.target.textContent.trim()}`
		);
		displayAccord.classList.remove("hidden");
		console.log(displayAccord);
	}
});
