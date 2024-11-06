"use strict";

import { defaultStyleTask } from "./modules/varible.js";
import { queryAllElementTask, queryElementTask } from "./modules/varible.js";
defaultStyleTask("Account");

const liEls = queryAllElementTask(".account_container ul .category");
const accordBtnCon = queryElementTask(".accordionBtn");
const changeBtn = queryElementTask("#changeDetailBtn");
const sections = queryAllElementTask("section.info__");
const addNewAddressBtn = queryElementTask(".addNew__address button");
// const signOutPopupCon = queryElementTask(".signOutPopup");

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
			} else if (li.classList.contains("my_order")) {
				removeClassTask(sections, "orderRender");
			} else if (li.classList.contains("info_category")) {
				removeClassTask(sections, "infoRender");
			}
		});
	});
};
clickEventStyleTask();

const removeClassTask = function (sections, targetClass) {
	sections.forEach((section) => {
		section.classList.add("hidden");
	});

	const targetRender = Array.from(sections).filter((section) =>
		section.classList.contains(targetClass)
	);

	targetRender.map((section) => {
		section.classList.remove("hidden");
	});
};

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

	const targetBtn = Array.from(btns).filter(
		(btn) => btn.textContent.trim() === targetStr
	);

	targetBtn.map((btn) => {
		// log
		btn.classList.add("defaultStyle-2");
	});
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

changeBtn.addEventListener("click", (ev) => {
	ev.stopPropagation();
	removeClassTask(sections, "changeName_form");
});

addNewAddressBtn.addEventListener("click", (ev) => {
	ev.stopPropagation();
	removeClassTask(sections, "change__address-con");
});
