"use strict";

import { navLinks } from "./varible.js";
import { queryAllElementTask, queryElementTask } from "./varible.js";
const inputSearch = queryElementTask("ul.filter_container li input");

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

const fitlterProductTask = function (productSearchCon) {
	inputSearch.addEventListener("keyup", (ev) => {
		const inputVal = ev.target.value;
		productSearchCon.forEach((container) => {
			const nameCon = container.querySelector("figcaption .proName");

			if (nameCon.textContent.toLowerCase().indexOf(inputVal) !== -1) {
				const figureCon = nameCon.parentElement.parentElement.parentElement;
				figureCon.classList.remove("hidden");
			} else {
				const figureCon = nameCon.parentElement.parentElement.parentElement;
				figureCon.classList.add("hidden");
			}
		});
	});
};

export { navbarTask, fitlterProductTask };
