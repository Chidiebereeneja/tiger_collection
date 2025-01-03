"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

menuModalTask();

const menuList = document.querySelector(".menu-list").children;
const addCategoryBtn = document.getElementById("add-cate-create");
const popupContainer = document.querySelector("div.create-new-category-popup");
const subCategoryPopup = document.querySelector(".sub-category-popup");
const categoryListCon = popupContainer.querySelector(".existing-category ul");
const addProduct = document.querySelector("button#add-pro-create");
const pignationContainer = document.querySelector(".pagination_container");

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
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 20,
		category: "Men's",
		availability: "In Stock",
	},
	{
		product: "Black Sweatshirt",
		buyingPrice: "₦3,000",
		quantity: 10,
		thresholdValue: 20,
		category: "Men's",
		availability: "In Stock",
	},
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
	const pignationContainer = document.querySelector(".pignation_count");
	const showSelect = document.querySelector("#nums_show");
	let count = 10;
	let pignationCount = 0;

	const renderObj = listItemsObj.slice(0, 9);

	renderObj.map((list) => {
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
	});

	listItemsObj.forEach((_, i) => {
		i++;
		if (i === count) {
			pignationCount++;
			pignationContainer.innerHTML += `
                <button id ="count__${pignationCount}" class = ${
				count === 10 ? "active_pagination paginationNums" : ""
			}>${pignationCount}</button>
            `;

			showSelect.innerHTML += `
				<option value="${count}">${count}</option>
			`;
			count += 10;
		}
	});

	document.querySelector(".nums_total").textContent = listItemsObj.length;
};

renderProductsTask();

addCategoryBtn.addEventListener("click", () => {
	popupContainer.classList.remove("hidden");
	const defaultRender = JSON.parse(localStorage.getItem("categoryDefault"));

	if (defaultRender === null) return;

	defaultRender.forEach((category) => {
		categoryListCon.innerHTML += `

		 <li>
			<p>${category.name}</p>
			<button id="remove-existing">
				<i class="fa-solid fa-arrow-up-right-from-square"></i>
			</button>
		</li>
	`;
	});
});

let couter = 0;
const categoryObj = {};
const categoryRender = [];

popupContainer.addEventListener("click", (ev) => {
	if (
		ev.target.id === "hide-popup-btn" ||
		ev.target.id === "cancel-popup" ||
		ev.target.id === "popup-i"
	) {
		popupContainer.classList.add("hidden");

		const allList = popupContainer.querySelectorAll("ul li");

		allList.forEach((list) => {
			list.remove();
		});
	} else if (ev.target.id === "add-new-popup") {
		const inputs = popupContainer.querySelectorAll("input");

		inputs.forEach((input) => {
			// console.log(input);

			if (input.id === "category-name") {
				categoryObj.name = input.value;
			} else {
				categoryObj.description = input.value;
			}
		});

		localStorage.setItem("category", JSON.stringify(categoryObj));

		renderCreateCategoryTask(categoryListCon);

		inputs.forEach((input) => (input.value = ""));
	}
});

function renderCreateCategoryTask(container) {
	const categoryObj = JSON.parse(localStorage.getItem("category"));

	if (categoryObj.name === "") return;

	container.innerHTML += `

			 <li>
				<p>${categoryObj.name}</p>
				<button id="remove-existing">
					<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</button>
			</li>
		`;

	categoryRender.push(categoryObj);
	localStorage.setItem("categoryDefault", JSON.stringify(categoryRender));
}

const removeElementTask = function (container) {
	container.addEventListener("click", (ev) => {
		if (ev.target.tagName.toLowerCase() === "i") {
			const targetParent = ev.target.parentNode;
			targetParent.remove();
		}
	});
};

addProduct.addEventListener("click", () => {
	window.location.href = "/pages/admin-dashboard/add-products.html";
});

categoryListCon.addEventListener("click", (ev) => {
	if (ev.target.tagName.toLowerCase() === "i") {
		const targetParent = ev.target.parentNode.parentNode;
		const txt = targetParent.querySelector("p").textContent;

		popupContainer.classList.add("hidden");
		subCategoryPopup.classList.remove("hidden");

		const h3El = subCategoryPopup.querySelector(".sub-cate-name h3");
		const textAreaEl = subCategoryPopup.querySelector("textarea");
		h3El.textContent = txt;

		const objStorage = JSON.parse(localStorage.getItem("categoryDefault"));

		const [targetObj] = Array.from(objStorage).filter(
			(obj) => obj.name === txt
		);

		const inputText = subCategoryPopup.querySelector("form input#cate--1");
		inputText.value = targetObj.name;
		textAreaEl.value = targetObj.description;
	}
});

subCategoryPopup.addEventListener("click", (ev) => {
	if (ev.target.id === "add--btn") {
		ev.preventDefault();
		const inputText = subCategoryPopup.querySelector("form input#cate--3");
		const ulContainer = subCategoryPopup.querySelector(".sub-cate-list ul");

		if (inputText.value === "") return;

		ulContainer.innerHTML += `
			<li>
			<span>${inputText.value}</span>
			<i class="fa-solid fa-xmark"></i>
			</li>

		`;
		inputText.value = "";

		removeElementTask(ulContainer);
	} else if (ev.target.id === "sub-popup-i") {
		subCategoryPopup.classList.add("hidden");
		popupContainer.classList.remove("hidden");
	}
});
