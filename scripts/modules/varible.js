"use strict";

const navLinks = document.querySelectorAll("header nav ul a");
const navbarFilterLink = document.querySelectorAll(".filter_container a");

const defaultStyleTask = function (str) {
	navbarFilterLink.forEach((link) => {
		if (link.title.includes(str)) {
			link.classList.add("filterHeader");
		}
	});
};

export { navLinks, defaultStyleTask };
