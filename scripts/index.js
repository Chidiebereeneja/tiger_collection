"use strict";

import { navbarTask } from "./modules/nav_bar.js";
import { imgDescriptionTask } from "./modules/imageDescription.js";
import { queryAllElementTask, queryElementTask } from "./modules/varible.js";
navbarTask("Home");

document.addEventListener("DOMContentLoaded", function () {
	new Splide("#splide", {
		type: "fade",
		perPage: 1,
		autoplay: true,
		interval: 10000,
		speed: 1000,
	}).mount();

	new Splide("#newArrivalSlide", {
		type: "loop",
		perPage: 3,
		lazyLoad: true,
		speed: 1000,
		padding: "10%",
		pagination: false,
	}).mount();

	new Splide("#feedbackSlide", {
		type: "loop",
		perPage: 3,
		lazyLoad: true,
		speed: 1000,
		padding: "10%",
		pagination: false,
	}).mount();
});

const imgFileConverterTask = async function (url) {
	const filename = url.split("/").slice(-1).join("");
	const mimetype = "image/jpeg";

	try {
		const response = await fetch(url);
		const buffer = response.arrayBuffer();
		const fileObj = new File([buffer], filename, { type: mimetype });

		return fileObj;
	} catch (err) {}
};

const navBarotificationTask = function () {
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
	const header = queryElementTask("header");
	const main = queryElementTask("main");

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

	shopBtn.addEventListener("click", () => {
		window.location.href = "pages/men_category.html";
	});
};
navBarotificationTask();

imgDescriptionTask(".category_images", "Home", "span.txt");
imgDescriptionTask(".women_categories", "Home", ".txt");
imgDescriptionTask(".LimeLight", "Home", ".LimeLight .txt");
imgDescriptionTask(".arrivalList", "Home", ".arrivalList .txt");
