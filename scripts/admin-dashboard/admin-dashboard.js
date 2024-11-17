"use strict";

const notificationBell = document.getElementById("notify_bell");
const menuList = document.querySelector(".menu-list");
const notificationPopup = document.querySelector(".notification_popup");
const cancel_notify = document.getElementById("cancel_notify");
const logoutCon = document.getElementById("log_out_li");
const logoutPopup = document.querySelector(".log_out_popup");

menuList.addEventListener("click", (ev) => {
	// console.log(ev.target);

	const lis = menuList.querySelectorAll("li");
	lis.forEach((li) => {
		li.classList.remove("active");
	});

	if (
		ev.target.tagName === "LI" ||
		ev.target.tagName === "SPAN" ||
		ev.target.tagName === "I"
	) {
		ev.target.classList.toggle("active");
	}
});

notificationBell.addEventListener("click", () => {
	const counterTag = document.querySelector(".bell_num_count");
	counterTag.classList.add("hidden");
	notificationPopup.classList.remove("hidden");
});

cancel_notify.addEventListener("click", () => {
	notificationPopup.classList.add("hidden");
});

logoutCon.addEventListener("click", () => {
	logoutPopup.classList.remove("hidden");
});

logoutPopup.addEventListener("click", (ev) => {
	ev.stopPropagation();

	if (
		ev.target.classList.contains("xmark-popup") ||
		ev.target.classList.contains("fa-xmark")
	) {
		logoutPopup.classList.add("hidden");
	} else if (ev.target.id === "cancel") {
		logoutPopup.classList.add("hidden");
	}
});
