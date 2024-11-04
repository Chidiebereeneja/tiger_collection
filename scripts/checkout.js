"use strict";

import {
	defaultStyleTask,
	currencyUpdateUITask,
	queryAllElementTask,
	queryElementTask,
} from "./modules/varible.js";
defaultStyleTask("Cart");

const numFormatter = (el) =>
	parseInt(el.textContent.slice(1).split(",").join(""));

(function () {
	const addToCartEl = queryElementTask(".add_to_cart_btn");

	addToCartEl.addEventListener("click", (e) => {
		e.preventDefault();
		window.history.back();
	});
})();

(function () {
	const subtotals = queryAllElementTask(".aside_2 figure figcaption + p");
	const subtotalCon = queryElementTask(".subTotal p:nth-child(2) strong");

	let subTotalPrice = 0;
	subtotals.forEach((el) => {
		const subNum = numFormatter(el);
		subTotalPrice += subNum;
	});

	const str = subTotalPrice.toString();

	currencyUpdateUITask(subtotalCon, str);
})();

(function () {
	const subtotalCon = queryElementTask(".subTotal p:nth-child(2) strong");
	const totalPur = queryElementTask(".totalPur p:nth-child(2) strong");
	const totalShippinFee = queryElementTask(
		".shipping_fee p:nth-child(2) strong"
	);

	const addPrice = numFormatter(subtotalCon) + numFormatter(totalShippinFee);
	const str = addPrice.toString();

	currencyUpdateUITask(totalPur, str);
})();

const billCheckBoxTask = function () {
	const billCheckbox = queryAllElementTask(".billing_address input");

	let isChecked = false;
	billCheckbox.forEach((input) => {
		input.addEventListener("input", (ev) => {
			const targetEl = ev.target;
			const elId = parseInt(targetEl.id.slice(-1));
			const queryId = elId === 1 ? 2 : 1;
			const unChekedEl = document.getElementById(`bill_${queryId}`);

			if (unChekedEl.checked) {
				unChekedEl.checked = false;
			}
		});
	});
};
billCheckBoxTask();

const cashDeliveryTask = function () {
	const cashDeliveryEl = queryElementTask(".cash_on_delivery input");
	let isChecked = false;

	cashDeliveryEl.addEventListener("click", (ev) => {
		if (!isChecked) {
			ev.target.checked = true;
			isChecked = true;
		} else {
			ev.target.checked = false;
			isChecked = false;
		}
	});
};

cashDeliveryTask();

const stateRender = async function () {
	const response = await fetch("/scripts/modules/state.json");

	const data = await response.json();
	return data;
};

stateRender().then((data) => {
	const statesDropdown = document.getElementById("states");
	for (const state in data) {
		const option = document.createElement("option");
		option.value = state;
		option.text = state;
		statesDropdown.add(option);
	}
});
