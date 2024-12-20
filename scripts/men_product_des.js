"use strict";

import { queryElementTask, queryAllElementTask } from "./modules/varible.js";

const imgTargetEl = queryElementTask("#product_preview");
const productCont = queryElementTask(".product_img_");
const trackPage = document.getElementById("trackPage");
const relatedProductImg = queryAllElementTask(".related_product img");
const addToCartBtn = document.querySelector(".add_to_cart");
const navPopupCon = document.querySelector(".popup__con");

const loadPageTask = function () {
	const h1El = queryElementTask(".women_arr + h1");
	const trackPageEl = queryElementTask(".women_arr #trackPage");
	const productObj = JSON.parse(localStorage.getItem("productObj"));
	const img = document.createElement("img");

	img.src = productObj.src;
	h1El.textContent = productObj.name;
	trackPageEl.textContent = productObj.active;

	imgTargetEl.appendChild(img);

	trackPageEl.addEventListener("click", (ev) => {
		const checkElement = ev.target.textContent;
		if (checkElement === "Similar") {
			productCont.scrollIntoView({ behavior: "smooth" });
		} else {
			window.history.back();
		}
	});
};
loadPageTask();

const SimilarProducts = function () {
	productCont.addEventListener("click", (ev) => {
		const imgPrev = imgTargetEl.querySelector("img");
		const renderName = queryElementTask(".women_arr + h1");

		if (ev.target.tagName === "IMG") {
			imgPrev.src = ev.target.src;
			const targetName = ev.target.parentElement.querySelector(".txt");
			renderName.textContent = targetName.textContent;

			trackPage.textContent = "Similar";

			imgTargetEl.scrollIntoView({ behavior: "smooth" });
		} else if (ev.target.tagName === "I") {
			const spanEl = ev.target.parentElement;
			spanEl.classList.toggle("wished");

			const img = spanEl.previousElementSibling.previousElementSibling;

			const prevImage = imgTargetEl.querySelector("img");
			prevImage.setAttribute("data-src-file", img.src);

			const unDefinedSrc = imgPrev.src.split("/").slice(-1).join("");

			if (unDefinedSrc === "undefined") {
				const productName = spanEl.previousElementSibling.querySelector(".txt");
				renderName.textContent = productName.textContent;

				const imgSrc = imgPrev.getAttribute("data-src-file");
				imgPrev.src = imgSrc;
				trackPage.textContent = "Similar";
			}
		}
	});
};
SimilarProducts();

const sizeClickTask = function () {
	const sizeCon = queryElementTask(".size_container p:nth-last-child(1)");

	sizeCon.addEventListener("click", (eve) => {
		if (eve.target.tagName === "SPAN") {
			eve.target.classList.toggle("sizeSelector");
		}
	});
};
sizeClickTask();

relatedProductImg.forEach((img) => {
	img.addEventListener("click", () => {
		const imgSrc = img.src;
		imgTargetEl.querySelector("img").src = imgSrc;
	});
});

addToCartBtn.addEventListener("click", (ev) => {
	ev.stopPropagation();
	navPopupCon.classList.remove("hidden");
	navPopupCon.classList.add("add_right_animate");
	console.log(navPopupCon);

	setTimeout(() => {
		navPopupCon.classList.add("hidden");
		navPopupCon.classList.remove("add_right_animate");
	}, 4 * 1000);
});
