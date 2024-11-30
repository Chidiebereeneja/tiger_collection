"use strict";

const allOrderObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Pending",
		payment: "POD",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Cancelled",
		payment: "CC",
	},
];

const completedOrderObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "POD",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Completed",
		payment: "CC",
	},
];

const canceledOrderObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Cancelled",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Cancelled",
		payment: "POD",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Cancelled",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Cancelled",
		payment: "CC",
	},
];

const pendingOrderObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Pending",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Pending",
		payment: "POD",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Pending",
		payment: "CC",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		profit: "₦654",
		status: "Pending",
		payment: "CC",
	},
];

const subModalObj = [
	{
		sku_id: "#123456789",
		name: "Urban Shirt",
		price: "₦999.29",
		qty: "X1",
		disc: "5%",
		total: "₦3,000.29",
	},
	{
		sku_id: "#123456789",
		name: "Urban Shirt",
		price: "₦999.29",
		qty: "X1",
		disc: "5%",
		total: "₦3,000.29",
	},
	{
		sku_id: "#123456789",
		name: "Urban Shirt",
		price: "₦999.29",
		qty: "X1",
		disc: "5%",
		total: "₦3,000.29",
	},
	{
		sku_id: "#123456789",
		name: "Urban Shirt",
		price: "₦999.29",
		qty: "X1",
		disc: "5%",
		total: "₦3,000.29",
	},
];

const checkStrTask = function (str) {
	if (str === "Completed") {
		return "confirm_sty";
	} else if (str === "Pending") {
		return "pending_sty";
	} else {
		return "cancel_sty";
	}
};

const allOrderCon = document.querySelector("#all_Order");
const completedCon = document.querySelector("#completed_order_progress");
const cancelledCon = document.querySelector("#cancelled_order_progress");
const pendingCon = document.querySelector("#pending_order_progress");
const modalProBtns = document.querySelectorAll("#modal_header_btns ul button");

const containers = document.querySelectorAll(".pending_order_container");

let pignationCounter = 10;
let countRender = 1;

let strCountNum = 10;
const checkNumsTask = function (strNum) {
	console.log(strNum);

	if (strNum <= 9) {
		console.log(strNum);
	} else if (strNum === strCountNum) {
		strCountNum += 10;
		console.log(strCountNum);
	}
};
const iterationTasks = function (arr, htmlContainer) {
	const pignationContainer = document.querySelector("div.pignation_count");
	const selectContainer = htmlContainer.nextElementSibling;
	const selectEl = selectContainer.querySelector("#nums_show");
	const totalNumsCon = selectEl.nextElementSibling;

	arr.map((obj, i) => {
		i++;

		if (i === pignationCounter) {
			pignationCounter += 10;

			pignationContainer.innerHTML += `
			<div class="nums_pagination ${
				countRender === 1 ? "active_pagination" : ""
			}">${countRender}</div>
			`;

			countRender++;
		}

		htmlContainer.innerHTML += `
            <tbody>
                <tr class="row">
                    <td>${obj.order_id}</td>
                    <td>${obj.created}</td>
                    <td>${obj.profit}</td>
                    <td>${obj.payment}</td>
                    <td><span class=${checkStrTask(obj.status)}>${
			obj.status
		}</span></td>
                    <td>
                    <button><i class="fa-solid fa-angle-down"></i></button>
                    </td>
                </tr>
            </tbody>
        `;

		selectEl.innerHTML += `
			<option value="Showing">Showing ${i++}</option>
		`;

		checkNumsTask(i);
	});

	totalNumsCon.textContent = arr.length;

	if (pignationContainer.innerHTML === "") {
		const parentEl = pignationContainer.parentNode;
		parentEl.querySelectorAll("button").forEach((btn) => {
			btn.classList.add("hidden");
		});
	}
};

iterationTasks(allOrderObj, allOrderCon);
iterationTasks(completedOrderObj, completedCon);
iterationTasks(canceledOrderObj, cancelledCon);
iterationTasks(pendingOrderObj, pendingCon);

const methodChaining = (arr) =>
	arr.at(0).at(0).toUpperCase() + arr.at(0).slice(1);
const modalBtnTask = function (btns) {
	btns.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			const btnTxt = btn.textContent.toLowerCase().split(" ");

			let containerId;
			if (btnTxt.length === 1) {
				const btnTxtArr1 = methodChaining(btnTxt);
				containerId = `${btnTxtArr1}_container`;
			} else if (btnTxt.length > 1) {
				const btnTxtArr1 = methodChaining(btnTxt.slice(0, 1));
				const btnTxtArr2 = methodChaining(btnTxt.slice(1, 2));
				containerId = `${btnTxtArr1}_${btnTxtArr2.toLowerCase()}_container`;
			}

			const [targetCon] = Array.from(containers).filter((container) => {
				return container.id === containerId;
			});

			containers.forEach((container, i) => {
				container.classList.add("hidden");
				btns[i].classList.remove("active_modal_header");
			});

			targetCon.classList.remove("hidden");
			btn.classList.add("active_modal_header");
		});
	});
};

modalBtnTask(modalProBtns);
