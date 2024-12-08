"use strict";

const menuList = document.querySelector(".menu-list");

function menuModalTask() {
	menuList.addEventListener("click", (ev) => {
		const lis = menuList.querySelectorAll("li");
		lis.forEach((li) => {
			li.classList.remove("active");
		});

		if (ev.target.tagName === "LI") {
			ev.target.classList.add("active");
			const span = ev.target.querySelector("span").textContent.split(" ");

			if (span.length >= 2) {
				window.location.href = `${span.at(0).toLowerCase()}-${span
					.at(1)
					.toLowerCase()}.html`;
			} else {
				window.location.href = `${span.at(0).toLowerCase()}.html`;
			}
		} else if (ev.target.tagName === "SPAN" || ev.target.tagName === "I") {
			const parentEl = ev.target.parentNode;
			parentEl.classList.add("active");
			const span = parentEl.querySelector("span").textContent.split(" ");

			if (span.length >= 2) {
				window.location.href = `${span.at(0).toLowerCase()}-${span
					.at(1)
					.toLowerCase()}.html`;
			} else {
				window.location.href = `${span.at(0).toLowerCase()}.html`;
			}
		}
	});
}

const defaultTask = function (container, strCheck) {
	Array.from(container).map((ul) => {
		const lists = ul.querySelectorAll("li");

		lists.forEach((li) => {
			const span = li.querySelector("span");
			if (span.textContent.trim() === strCheck) {
				span.parentNode.classList.add("active");
			}
		});
	});
};

export { menuModalTask, defaultTask };
