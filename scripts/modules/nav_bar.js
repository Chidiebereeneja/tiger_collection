"use strict";

import { navLinks } from "./varible.js";

const navbarTask = function (targetStr) {
	navLinks.forEach((link) => {
		link.classList.remove("target_page");
	});
	navLinks.forEach((link) => {
		if (link.textContent.trim() === targetStr) {
			link.classList.add("target_page", "active");
		}
	});
};

export { navbarTask };
