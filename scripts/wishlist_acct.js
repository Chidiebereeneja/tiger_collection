"use strict";

import { defaultStyleTask } from "./modules/varible.js";
import { queryAllElementTask, queryElementTask } from "./modules/varible.js";
defaultStyleTask("Account");

const liEls = queryAllElementTask(".account_container ul .category");
const accordBtnCon = queryElementTask(".accordionBtn");
const signOutPopupCon = queryElementTask(".signOutPopup");

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
		li.addEventListener("click", (ev) => {
			ev.stopPropagation();
			const spanCont = li.querySelector("span").textContent.trim();
			defaultSelectTask(spanCont);

			if (li.classList.contains("signOut")) {
				const popup = queryElementTask(".signOutPopup");
				popup.classList.remove("hidden");

				popupSignTask(popup);
			}
		});
	});
};
clickEventStyleTask();

const popupSignTask = function (container) {
	container.addEventListener("click", (ev) => {
		ev.stopPropagation();

		if (ev.target.tagName === "BUTTON" || ev.target.tagName === "I") {
			const btn = ev.target;

			if (btn.classList.contains("no") || ev.target.tagName === "I") {
				container.classList.add("hidden");
			}
		}
	});
};

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
