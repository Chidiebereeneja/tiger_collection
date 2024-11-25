"use strict";

const notificationBell = document.getElementById("notify_bell");
const menuList = document.querySelector(".menu-list").children;
// console.log(menuList);

const defaultTask = function (container) {
	Array.from(container).map((ul) => {
		const lists = ul.querySelectorAll("li");

		lists.forEach((li) => {
			const span = li.querySelector("span");
			if (span.textContent.trim() === "Order Management") {
				span.parentNode.classList.add("active");
			}
		});
	});
};
defaultTask(menuList);

const clickModalTask = function (ev) {
	console.log(ev.target);

	const arrContainer = Array.from(menuList);

	arrContainer.map((ul) => {
		const lists = ul.querySelectorAll("li");

		lists.forEach((li) => {
			li.classList.remove("active");
		});
	});

	if (ev.target.tagName === "LI") {
		ev.target.classList.add("active");
		const spanStr = ev.target.querySelector("span").textContent;

		window.location.href = `${spanStr.toLowerCase()}.html`;
	} else if (ev.target.tagName === "SPAN") {
		ev.target.parentNode.classList.add("active");
		window.location.href = `${ev.target.textContent.toLowerCase()}.html`;
	} else if (ev.target.tagName === "I") {
		ev.target.parentNode.classList.add("active");
		const spanStr = ev.target.parentNode.querySelector("span").textContent;

		const checkEl =
			spanStr.split(" ").length === 1
				? `pages/admin-dashboard/${spanStr.toLowerCase()}.html`
				: `pages/admin-dashboard/$order-manage.html`;
		console.log(checkEl);

		window.location.href = checkEl;
	}

	// arrContainer.map((ul) => {
	// 	arrContainer.map((ul) => {
	// 		const lists = ul.querySelectorAll("li");

	// 		lists.forEach((li) => {
	// 			li.classList.remove("active");
	// 		});
	// 	});

	// 	ul.addEventListener("click", (e) => {
	// 		if (e.target.tagName === "LI") {
	// 			e.target.classList.add("active");
	// 		} else if (e.target.tagName === "SPAN") {
	// 			console.log(e.target);
	// 		} else if (e.target.tagName === "I") {
	// 			console.log(e.target);
	// 		}
	// 	});
	// });
};

const clickEventTask = function () {
	Array.from(menuList).map((ul) => {
		ul.addEventListener("click", clickModalTask.bind(this));
	});
};

clickEventTask();
