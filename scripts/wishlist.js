"use strict";

import { defaultStyleTask, queryElementTask } from "./modules/varible.js";
defaultStyleTask("Wishlist");

const proContainer = queryElementTask("#product-container");
const popupContainer = queryElementTask(".popup__con");

proContainer.addEventListener("click", (ev) => {
	if (ev.target.tagName === "BUTTON") {
		popupContainer.style.transform = "translateX(0rem)";
		popupContainer.classList.remove("hidden");
	}
});
