"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

menuModalTask();

const menuList = document.querySelector(".menu-list").children;
const addCategoryBtn = document.getElementById("add-cate-create");
const popupContainer = document.querySelector("div.create-new-category-popup");
const hidePopupBtn = document.querySelector("button#hide-popup-btn");

const listItemsObj = [
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 12,
		category: "Men's",
		availability: "In Stock",
	},
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 15,
		category: "Women's",
		availability: "Out of Stock",
	},
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 20,
		category: "Men's",
		availability: "Low Stock",
	},
	{
		product: "Timberland Boots",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 25,
		category: "Footwears",
		availability: "In Stock",
	},
	{
		product: "Laptop Bag",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 30,
		category: "Bags",
		availability: "Low Stock",
	},
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 35,
		category: "Unisex",
		availability: "Low Stock",
	},
	{
		product: "Pateek Philippi",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 40,
		category: "Accessory",
		availability: "Out of Stock",
	},
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 20,
		category: "Men's",
		availability: "In Stock",
	},
];

defaultTask(menuList, "Product List");

const renderProductsTask = function () {
	const container = document.querySelector("table#all_Order tbody");
	console.log(container);

	listItemsObj.map((list) => {
		console.log(list);

		container.innerHTML += `
			<tr>
				 <td>${list.product}</td>
				 <td>${list.buyingPrice}</td>
				 <td>${list.quantity} Packs</td>
				 <td>${list.thresholdValue}</td>
				 <td>${list.category}</td>
				 <td>${list.availability}</td>
			 </tr>
		`;
		// console.log(list);
		// const
		// <tr>
		// <td>Black Sweatshirt</td>
		// <td>₦3,000</td>
		// <td>20 Packs</td>
		// <td>12</td>
		// <td>Men's</td>
		// <td>In-stock</td>
		// </tr>
	});
};

renderProductsTask();

addCategoryBtn.addEventListener("click", () => {
	popupContainer.classList.remove("hidden");
});

popupContainer.addEventListener("click", (ev) => {
	if (
		ev.target.id === "hide-popup-btn" ||
		ev.target.id === "cancel-popup" ||
		ev.target.id === "popup-i"
	) {
		popupContainer.classList.add("hidden");
	}
});
