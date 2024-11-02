"use strict";

const navLinks = document.querySelectorAll("header nav ul a");
const navbarFilterLink = document.querySelectorAll(".filter_container a");

const queryElementTask = (str) => document.querySelector(str);
const queryAllElementTask = (str) => document.querySelectorAll(str);

const defaultStyleTask = function (str) {
	navbarFilterLink.forEach((link) => {
		if (link.title.includes(str)) {
			link.classList.add("filterHeader");
		}
	});
};

const currencyUpdateUITask = function (subtotal, str) {
	if (str.length === 4) {
		subtotal.textContent = `₦${str.slice(0, 1) + "," + str.slice(1)}`;
	} else if (str.length === 5) {
		subtotal.textContent = `₦${str.slice(0, 2) + "," + str.slice(2)}`;
	} else if (str.length === 6) {
		subtotal.textContent = `₦${str.slice(0, 3) + "," + str.slice(3)}`;
	}
};

export { navLinks, defaultStyleTask, queryAllElementTask, queryElementTask, currencyUpdateUITask };
