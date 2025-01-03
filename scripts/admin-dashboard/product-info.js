"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

menuModalTask();

const menuList = document.querySelector(".menu-list").children;

const pageTrackBtns = document.querySelectorAll(".list-header button");

defaultTask(menuList, "Product List");

pageTrackBtns.forEach((btn) => {
	btn.addEventListener("click", (ev) => {
		const idName = ev.target.getAttribute("id");

		window.location.href = `/pages/admin-dashboard/${idName}.html`;
	});
});
