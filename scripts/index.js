"use strict";

import { navbarTask } from "./modules/nav_bar.js";
navbarTask("Home");

const sliderContainer = document.querySelector("#slider");
const firstCardOffset = sliderContainer.querySelector("div.card").offsetWidth;

const btns = document.querySelectorAll(".caro_btn button");
const cards = Array.from(sliderContainer.children);

cards.map((card, i) => {
	card.style.transform = `translateX(${i * 100}%)`;
});

const notificationTask = function () {
	const notifyDiv = document.createElement("div");
	notifyDiv.classList.add("notification");
	const pEl = document.createElement("p");
	pEl.classList.add("notification_content");
	const shopBtn = document.createElement("button");
	const cancelBtn = document.createElement("button");
	const img = document.createElement("img");
	const span2 = document.createElement("span");
	cancelBtn.classList.add("notification_btn");

	notifyDiv.appendChild(pEl);
	notifyDiv.appendChild(cancelBtn);
	pEl.appendChild(img);
	pEl.appendChild(span2);
	pEl.appendChild(shopBtn);

	img.src = "/assets/images/Vector.png";
	span2.textContent = "30% off men’s wear — Limited time!";
	shopBtn.innerHTML = `Shop Now <i class="fa-solid fa-arrow-right"></i>`;
	cancelBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	const header = document.querySelector("header");
	const main = document.querySelector("main");

	header.insertAdjacentElement("beforebegin", notifyDiv);
	main.style.marginTop = "7vh";
	header.style.top = "13vh !important";
	header.classList.add("header");

	cancelBtn.addEventListener("click", () => {
		notifyDiv.style.display = "none";
		header.classList.remove("header");
		header.style.top = "0";
		main.style.marginTop = "10vh";
	});
};
notificationTask();

/*
const carouselTask = function (sliderContainer, offsetWidth, carouselBtn) {
	const carouselChildren = [...sliderContainer.children];

	const correctOffset = Math.round(sliderContainer.offsetWidth / offsetWidth);

	carouselChildren.slice(correctOffset).map((card) => {
		sliderContainer.appendChild(card);
	});

	carouselChildren.slice(0, correctOffset).map((card) => {
		sliderContainer.appendChild(card);
	});

	carouselBtn.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			sliderContainer.scrollLeft =
				+e.target.textContent === "Previous" ? -offsetWidth : offsetWidth;
		});
	});

	console.log(sliderContainer);
};

carouselTask(sliderContainer, firstCardOffset, btns);
*/

// navLinks.forEach((link) => {
// 	console.log(link);
// });

// const targetStyleTask = function () {
// 	navLinks.forEach((link) => {
// 		if (link.textContent === "Home") {
// 			link.classList.add("target_page");
// 		}
// 	});

// 	navLinks.forEach((link) => {
// 		link.addEventListener("click", (ev) => {
// 			navLinks.forEach((link) => link.classList.remove("target_page"));
// 			ev.target.classList.add("target_page");
// 		});
// 	});
// };

// targetStyleTask();
