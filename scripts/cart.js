"use strict";

import { defaultStyleTask } from "./modules/varible.js";
defaultStyleTask("Cart");

const queryElement = (str) => document.querySelector(str);
const queryAllElement = (str) => document.querySelectorAll(str);

const checkoutBtn = queryAllElement(".cart-btn");
const increementContainer = queryAllElement(".check_product td:nth-child(3) p");

const currencyUpdateUITask = function (subtotal, str) {
	if (str.length === 4) {
		subtotal.textContent = `₦${str.slice(0, 1) + "," + str.slice(1)}`;
	} else if (str.length === 5) {
		subtotal.textContent = `₦${str.slice(0, 2) + "," + str.slice(2)}`;
	} else if (str.length === 6) {
		subtotal.textContent = `₦${str.slice(0, 3) + "," + str.slice(3)}`;
	}
};

checkoutBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.id === "continue_") {
			window.history.back();
		} else if (btn.id === "Proceed_") {
			window.location.href = "/pages/checkout.html";
		}
	});
});

increementContainer.forEach((container) => {
	const actualPriceVal =
		container.parentElement.previousElementSibling.textContent
			.slice(1)
			.split(",")
			.join("");
	const subtotal =
		container.parentElement.nextElementSibling.nextElementSibling;
	const countNum = container.querySelector(".counter_num").textContent;
	const totalVal = parseInt(countNum * actualPriceVal);
	const str = totalVal.toString();

	currencyUpdateUITask(subtotal, str);
});

increementContainer.forEach((container) => {
	container.addEventListener("click", (ev) => {
		const spanCount = container.querySelector(".counter_num");
		const subtotal =
			container.parentElement.nextElementSibling.nextElementSibling;
		let subtotalVal = Number(subtotal.textContent.slice(1).split(",").join(""));

		const actualPriceCon = container.parentElement.previousElementSibling;
		let actualPriceVal = Number(
			actualPriceCon.textContent.slice(1).split(",").join("")
		);

		if (ev.target.classList.contains("fa-minus")) {
			spanCount.textContent -= 1;
			subtotalVal -= actualPriceVal;
			const str = subtotalVal.toString();

			currencyUpdateUITask(subtotal, str);

			if (parseInt(spanCount.textContent) <= 0) {
				spanCount.textContent = 0;
				subtotal.textContent = `₦0.00`;
			}

			subtotalAddTask();
			grandTotalTask();
		} else if (ev.target.classList.contains("fa-plus")) {
			spanCount.textContent++;
			const subtotalRender = parseInt(spanCount.textContent * actualPriceVal);
			const str = subtotalRender.toString();

			currencyUpdateUITask(subtotal, str);

			subtotalAddTask();
			grandTotalTask();
		}
	});
});

const subtotalAddTask = function () {
	const subtotalCon = queryAllElement(".check_product td:nth-child(5) ");

	let totalVal = 0;
	subtotalCon.forEach((tag) => {
		const tagVal = parseInt(tag.textContent.slice(1).split(",").join(""));
		totalVal += tagVal;
	});

	const subtotal = queryElement(".totalPurchase");
	const str = totalVal.toString();

	currencyUpdateUITask(subtotal, str);

	increementContainer.forEach((container) => {
		const counterNum = parseInt(
			container.querySelector(".counter_num").textContent
		);
	});

	const check = Array.from(increementContainer).every((container) => {
		const counterNum = parseInt(
			container.querySelector(".counter_num").textContent
		);

		return counterNum <= 0;
	});

	if (check) {
		subtotal.textContent = `₦0.00`;
	}
};
subtotalAddTask();

const shippingTask = function () {
	const shippingEl = queryAllElement(".check_product td:nth-child(4");

	let shippingTotal = 0;
	for (const ele of shippingEl) {
		if (ele.textContent.toLowerCase() === "free") continue;
		const elementVal = parseInt(ele.textContent.slice(1).split(",").join(""));
		shippingTotal += elementVal;
	}

	const shippingTotalEl = queryElement(".shipping_total");
	const str = shippingTotal.toString();

	currencyUpdateUITask(shippingTotalEl, str);
};
shippingTask();

const grandTotalTask = function () {
	const totalPurchase = queryElement(".totalPurchase");
	const shippingTotal = queryElement(".shipping_total");
	const grandTotal = queryElement(".grand_total");

	const totalPurchaseVal = parseInt(
		totalPurchase.textContent.slice(1).split(",").join("")
	);
	const shippingTotalVal = parseInt(
		shippingTotal.textContent.slice(1).split(",").join("")
	);

	const str = (totalPurchaseVal + shippingTotalVal).toString();

	currencyUpdateUITask(grandTotal, str);

	if (totalPurchase.textContent === "₦0.00") {
		const str = shippingTotalVal.toString();

		currencyUpdateUITask(grandTotal, str);
		if (str.length <= 3) {
			grandTotal.textContent = `₦${shippingTotalVal}`;
		}
	}
};
grandTotalTask();
