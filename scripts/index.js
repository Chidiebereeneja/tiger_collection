"use strict";

const sliderContainer = document.querySelector("#slider");
const firstCardOffset = sliderContainer.querySelector("div.card").offsetWidth;
const canvas_1 = document.getElementById("canvas_1");
console.log(canvas_1);

const btns = document.querySelectorAll(".caro_btn button");
const cards = Array.from(sliderContainer.children);

cards.map((card, i) => {
	card.style.transform = `translateX(${i * 100}%)`;
});

const drawCanvas = async function (canvas) {
	const response = await fetch("/assets/images/Hawaiian-Shirts.jpeg");
	const image = await response.blob();
	const imageUrl = URL.createObjectURL(image);

	const img = new Image();
	img.src = imageUrl;

	img.onload = function () {
		const ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0);
	};
	console.log(imageUrl);
};

drawCanvas(canvas_1);

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
