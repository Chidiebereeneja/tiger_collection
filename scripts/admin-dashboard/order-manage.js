"use strict";

import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

const notificationBell = document.getElementById("notify_bell");
const menuList = document.querySelector(".menu-list").children;
const prodProgressContainer = document.getElementById(
	"product_progress_container"
);
const modalBtns = document.querySelectorAll("div#modal_header_btns li button");

const allObj = [];

menuModalTask();
defaultTask(menuList, "Order Management");

const PendingObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Pending",
	},
];

const cancelledObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Cancelled",
	},
];

const confirmedObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		customer_name: "Collins Doe",
		profit: "₦654",
		profit_percentage: "16%",
		status: "Confirmed",
	},
];

const subModalObj = [
	{
		order_id: "#123456789",
		created: "2 min ago",
		product_name: "Urban Shirt",
		quantity: "x1",
		price: "₦999.29",
		total_price: "₦3,000.29",
		dicount: "5%",
	},
	{
		order_id: "#123456789",
		created: "40 min ago",
		product_name: "Urban Shirt",
		quantity: "x8",
		price: "₦999.29",
		total_price: "₦3,000.29",
		dicount: "30%",
	},
	{
		order_id: "#123456789",
		created: "2 hours ago",
		product_name: "Urban Shirt",
		quantity: "x2",
		price: "₦999.29",
		total_price: "₦3,000.29",
		dicount: "15%",
	},
	{
		order_id: "#123456789",
		created: "2 min ago",
		product_name: "Urban Shirt",
		quantity: "x1",
		price: "₦999.29",
		total_price: "₦3,000.29",
		dicount: "5%",
	},
];

PendingObj.forEach((obj, i) => {
	allObj.push(obj);
	allObj.push(confirmedObj[i]);
	allObj.push(cancelledObj[i]);
});

const checkStatusTask = function (str) {
	if (str === "Pending") {
		return "pending_sty";
	} else if (str === "Confirmed") {
		return "confirm_sty";
	} else if (str === "Cancelled") {
		return "cancel_sty";
	}
};

const modalRenderTask = function (
	arrObj,
	idStr,
	countRender,
	pignationCounter
) {
	const sectionCont = document.getElementById(idStr);
	const pignationCont = sectionCont.querySelector("div.pagination_container");
	const pignationCounterCont = pignationCont.querySelector(
		"div.pignation_count"
	);
	const selectEl = pignationCont.querySelector("#nums_show");
	const totalNumsCon = selectEl.nextElementSibling;

	const firstRenderSliceObj = arrObj.slice(0, 10);

	if (sectionCont.getAttribute("data-shown")) return;

	sectionCont.setAttribute("data-shown", true);
	firstRenderSliceObj.map((obj, i) => {
		i++;
		sectionCont.querySelector("table").innerHTML += `
			<tbody>
				<tr class="row">
					<td>${obj.order_id}</td>
					<td>${obj.created}</td>
					<td>${obj.customer_name}</td>
					<td>₦654</td>
					<td>₦154 <mark>${obj.profit_percentage}</mark></td>
					<td><span class=${checkStatusTask(obj.status)}>${obj.status}</span></td>
					<td>
					<button><i class="fa-solid fa-angle-down"></i></button>
					</td>
				</tr>
			</tbody>
		`;
	});

	arrObj.map((_, i) => {
		i++;

		if (i === pignationCounter) {
			const div = document.createElement("div");
			const checkRender =
				countRender === 1
					? "nums_pagination  active_pagination"
					: "nums_pagination";

			div.setAttribute("class", checkRender);
			div.textContent = countRender;
			pignationCounterCont.appendChild(div);

			selectEl.innerHTML += `
			<option value="Showing">Showing ${i++}</option>
		`;
			countRender++;
			pignationCounter += 10;
		}
	});

	totalNumsCon.textContent = arrObj.length;
};

modalRenderTask(allObj, "all_", 1, 10);

const targetRenderTask = function (str) {
	const idKey = `${str}_`;

	if (str === "pending") {
		modalRenderTask(PendingObj, idKey, 1, 10);
	} else if (str === "confirmed") {
		modalRenderTask(confirmedObj, idKey, 1, 10);
	} else if (str === "cancelled") {
		modalRenderTask(cancelledObj, idKey, 1, 10);
	} else {
		modalRenderTask(allObj, idKey, 1, 10);
	}
};

const modalBtnTask = function (ev) {
	ev.stopPropagation();
	const targetEl = ev.target;
	const targetTxt = targetEl.textContent.toLowerCase();
	const targetDisplayContainer = document.getElementById(`${targetTxt}_`);
	const allProgressCont = document.querySelectorAll("section.progress_");

	targetRenderTask(targetTxt);

	if (!targetDisplayContainer) return;

	// Hide all sections
	allProgressCont.forEach((cont) => cont.classList.add("hidden"));
	targetDisplayContainer.classList.remove("hidden");

	// Update active button
	const firstElementBtn = targetDisplayContainer.querySelector("button");
	if (firstElementBtn) {
		firstElementBtn.setAttribute("data-container-id", `${targetTxt}_`);
	}

	modalBtns.forEach((btn) => btn.classList.remove("active_modal_header"));
	targetEl.classList.add("active_modal_header");

	// subModalTask(targetDisplayContainer);
};
modalBtns.forEach((el) => {
	el.addEventListener("click", modalBtnTask.bind(this));
});
