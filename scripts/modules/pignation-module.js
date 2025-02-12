"use strict";

const selectElement = document.querySelector("select#nums_show");
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

const removeChildTask = function (container) {
	Array.from(container.children).map((child) => {
		child.remove();
	});
};

const container = document.querySelector("table#all_Order tbody");
const renderTargetListTask = function (start, end) {
	const renderObj = listItemsObj.slice(start, end);
	renderObj.forEach((list) => {
		container.innerHTML += `
					<tr>
						<td>${list.product}</td>
						<td>${list.buyingPrice}</td>
						<td>${list.quantity} Packs</td>
						<td>${list.thresholdValue}</td>
						<td>${list.category}</td>
						<td style="color:${colorCheckTask(list.availability)}">${list.availability}</td>
					</tr>
				`;
	});
};

const colorCheckTask = function (txt) {
	if (txt === "In Stock") {
		return "#28c76f";
	} else if (txt === "Out of Stock") {
		return "#ea5455";
	} else if (txt === "Low Stock") {
		return "#ffc600";
	}
};

const pagiCllassRemoveTask = function (paginationCountCon, target) {
	Array.from(paginationCountCon).map((count) =>
		count.classList.remove("active_pagination")
	);

	target.classList.add("active_pagination");
};

const selectElementTask = function (selectNum) {
	const options = selectElement.options;

	for (let i = 0; i < options.length; i++) {
		if (Number(options[i].value) === selectNum) {
			options[i].selected = true;
		}
	}
};

const pignationContainerTask = function (e, pignationContainer) {
	const num = e.target.textContent;
	if (
		e.target.classList.contains("left_pagination_btn") ||
		e.target.classList.contains("fa-angle-left")
	) {
		const paginationCountCon = pignationContainer.querySelector(
			"div.pignation_count"
		).children;

		const [activePagi] = Array.from(paginationCountCon).filter((count) =>
			count.classList.contains("active_pagination")
		);

		const nextElement = activePagi.nextElementSibling;

		if (nextElement === null) return;

		removeChildTask(container);

		const start = Number(`${activePagi.textContent}0`);
		const end = Number(`${nextElement.textContent}0`);

		renderTargetListTask(start, end);

		pagiCllassRemoveTask(paginationCountCon, nextElement);
		selectElementTask(start + 10);
	} else if (
		e.target.classList.contains("right_pagination_btn") ||
		e.target.classList.contains("fa-angle-right")
	) {
		const paginationCountCon = pignationContainer.querySelector(
			"div.pignation_count"
		).children;

		const [activePagi] = Array.from(paginationCountCon).filter((count) =>
			count.classList.contains("active_pagination")
		);

		const previousElement = activePagi.previousElementSibling;

		if (previousElement === null) return;

		removeChildTask(container);

		const start = Number(`${activePagi.textContent}0`);
		const end = Number(`${previousElement.textContent}0`);

		renderTargetListTask(end - 1, start - 1);

		pagiCllassRemoveTask(paginationCountCon, previousElement);
		selectElementTask(start - 10);
	} else if (e.target.id === `count__${num}`) {
		const previousSibling = e.target.previousElementSibling;

		const paginationCountCon = pignationContainer.querySelector(
			"div.pignation_count"
		).children;
		if (previousSibling === null) {
			if (e.target.id === `count__${num}`) {
				removeChildTask(container);
				renderTargetListTask(0, 10);

				pagiCllassRemoveTask(paginationCountCon, e.target);
				const targetNum = Number(`${e.target.textContent}0`);
				selectElementTask(targetNum);
			}
		} else {
			const start = Number(`${previousSibling.textContent}0`);
			const end = Number(`${e.target.textContent}0`);

			removeChildTask(container);

			renderTargetListTask(start - 1, end - 1);

			pagiCllassRemoveTask(paginationCountCon, e.target);
			const targetNum = Number(`${e.target.textContent}0`);

			selectElementTask(targetNum);
		}
	}
};

const selectElementEvTask = function (pignationContainer) {
	const options = selectElement.options;
	const paginationCountCon = pignationContainer.querySelector(
		"div.pignation_count"
	).children;

	const [selectedOption] = Array.from(options).filter(
		(option) => option.selected
	);
	const selectNum = Number(selectedOption.value) - 10;
	// console.log(selectedOption.value.slice(0, 1));

	removeChildTask(container);
	renderTargetListTask(selectNum, Number(selectedOption.value));

	const [numTargetCoun] = Array.from(paginationCountCon).filter((count) => {
		if (count.textContent === selectedOption.value.slice(0, 1)) {
			return count;
		}
	});

	// console.log(numTargetCoun);

	pagiCllassRemoveTask(paginationCountCon, numTargetCoun);
};

export { pignationContainerTask, selectElementEvTask, listItemsObj };
