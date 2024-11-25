"use strict";

const notificationBell = document.getElementById("notify_bell");
const menuList = document.querySelector(".menu-list");
const notificationPopup = document.querySelector(".notification_popup");
const cancel_notify = document.getElementById("cancel_notify");
const logoutCon = document.getElementById("log_out_li");
const logoutPopup = document.querySelector(".log_out_popup");

const defaultStyleTask = function () {
	const listEl = menuList.querySelector("li");
	listEl.classList.add("active");
};
defaultStyleTask();
const ctx = document.getElementById("chart_table");
const profitCnvas = document.getElementById("canvas--profit-line");
const weekdaysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dataAmountArr = [0, 60000, 20000, 30000, 40000, 5000, 25000];

function chartTableTask(ctx, weekdaysArr, dataAmountArr, color, labelDes) {
	new Chart(ctx, {
		type: "line",
		data: {
			labels: weekdaysArr,
			datasets: [
				{
					label: labelDes,
					data: dataAmountArr,
					borderWidth: 3,
					borderColor: color,
					backgroundColor: color,
					fill: false,
				},
			],
		},
	});
}
chartTableTask(
	ctx,
	weekdaysArr,
	dataAmountArr,
	"#8A33FD",
	"Customers Sale Chart"
);

chartTableTask(
	profitCnvas,
	weekdaysArr,
	dataAmountArr,
	"#1EB564",
	"Profit Chart"
);

function doubleChartTableTask() {
	const ctx = document.getElementById("blue_line");
	const weekdaysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const dataAmountArr = [0, 60000, 20000, 30000, 40000, 5000, 25000];
	const dataAmountArr2 = [0, 20000, 100000, 20000, 80000, 6000, 25000];
	new Chart(ctx, {
		type: "line",
		data: {
			labels: weekdaysArr,
			datasets: [
				{
					label: "Sales",
					data: dataAmountArr,
					borderColor: "#0F60FF",
					backgroundColor: "#0F60FF",
					fill: false,
				},
				{
					label: "Cost",
					data: dataAmountArr2,
					borderColor: "#0FB7FF",
					backgroundColor: "#0FB7FF",
					fill: false,
				},
			],
		},
		options: {
			legend: { display: false },
		},
	});
}
doubleChartTableTask();

function inventoryChartTask(
	selector,
	dataAmountArr,
	labelDes,
	typeChart,
	weekdaysArr = ""
) {
	const ctx = document.getElementById(selector);
	new Chart(ctx, {
		type: typeChart,
		data: {
			labels: weekdaysArr,
			datasets: [
				{
					label: labelDes,
					data: dataAmountArr,
					backgroundColor: [
						"rgb(54, 162, 235)",
						"rgb(255, 205, 86)",
						"#0FB7FF",
						"#1EB564",
						"#8a33fd",
						"rgb(255, 99, 132)",
					],
					fill: false,
				},
			],
		},
	});
}
inventoryChartTask(
	"canvas--discount-line",
	dataAmountArr,
	"Total Inventory",
	"doughnut"
);
inventoryChartTask("order--green-line", dataAmountArr, "Orders Chart", "pie");
inventoryChartTask(
	"canvas-red",
	dataAmountArr,
	"Discounted Chart",
	"bar",
	weekdaysArr
);

menuList.addEventListener("click", (ev) => {
	const lis = menuList.querySelectorAll("li");
	lis.forEach((li) => {
		li.classList.remove("active");
	});

	if (ev.target.tagName === "LI") {
		ev.target.classList.add("active");
		const span = ev.target.querySelector("span").textContent.split(" ");

		if (span.length >= 2) {
			window.location.href = `${span.at(0).toLowerCase()}-manage.html`;
		}
	} else if (ev.target.tagName === "SPAN" || ev.target.tagName === "I") {
		const parentEl = ev.target.parentNode;
		parentEl.classList.add("active");
		const span = parentEl.querySelector("span").textContent.split(" ");

		if (span.length >= 2) {
			window.location.href = `${span.at(0).toLowerCase()}-manage.html`;
		}
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
