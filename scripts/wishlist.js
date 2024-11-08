"use strict";

import { defaultStyleTask, queryElementTask } from "./modules/varible.js";
defaultStyleTask("Wishlist");

const proContainer = queryElementTask("#product-container");
const popupContainer = queryElementTask(".popup__con");
const navPopupBtn = queryElementTask("#removeXmark");

proContainer.addEventListener("click", (ev) => {
	ev.stopPropagation();
	if (ev.target.tagName === "BUTTON") {
		popupContainer.classList.remove("hidden");
		popupContainer.classList.add("add_right_animate");

		setTimeout(() => {
			popupContainer.classList.add("hidden");
			popupContainer.classList.remove("add_right_animate");
		}, 4 * 1000);
	}
});

navPopupBtn.addEventListener("click", (ev) => {
	ev.stopPropagation();
	popupContainer.classList.add("hidden");
	popupContainer.classList.remove("add_right_animate");
});
