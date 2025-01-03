"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

menuModalTask();

const menuList = document.querySelector(".menu-list").children;
const pageTrackContainer = document.querySelector(
	"section.add-product-action-btns"
);

defaultTask(menuList, "Product List");

pageTrackContainer.addEventListener("click", (ev) => {
	const idName = ev.target.getAttribute("id");
	if (idName === null) return;
	else if (idName === "discard-btn") {
		window.location.href = "/pages/admin-dashboard/product-info.html";
	} else {
		window.location.href = `/pages/admin-dashboard/${
			idName === "add-product" ? "add-products" : idName
		}.html`;
	}
});
