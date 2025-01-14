"use strict";

// import { getAttribute } from "@splidejs/splide/src/js/utils";
import { menuModalTask, defaultTask } from "../modules/menu-list-modal.js";

menuModalTask();

const menuList = document.querySelector(".menu-list").children;
const uploadContainer = document.querySelector("figure.upload-btn");

defaultTask(menuList, "Add Products");

const fileInput = uploadContainer.querySelectorAll("input");
const figureContainer = document.querySelectorAll(".image-grid figure");
const colorModalContainer = document.querySelector("div.color_container");
const paletteContainer = colorModalContainer.querySelector(
	"article.modal_container"
);

const colorPaletteObj = [
	"#000000",
	"#845EF7",
	"#339AF0",
	"#0000FF",
	"#22B8CF",
	"#51CF66",
	"#FCC419",
	"#FF6A6A",
	"#F06595",
	"#CDD3D9",
	"#5F3DC4",
	"#1864AB",
	"#0B7285",
	"#2B8A3E",
	"#E67700",
	"#C92A2A",
];

let counter = 0;
fileInput.forEach((input) => {
	input.addEventListener("change", (ev) => {
		const imageFile = ev.target.files[0];

		const imageReader = new FileReader();
		imageReader.readAsDataURL(imageFile);

		imageReader.addEventListener("load", (ev) => {
			const check = renderImageTask(ev.target.result, counter);
			console.log(check);

			if (check === false) {
				const classCheck = Array.from(figureContainer).filter((figure) =>
					figure.classList.contains("tracker")
				);
				console.log(classCheck);

				counter = classCheck.length;
			} else {
				counter++;
			}
		});
	});
});

function renderImageTask(srcFile, counter) {
	let check;
	let track;

	figureContainer.forEach((fig, i) => {
		// const dataAttr = fig.getAttribute("data-track");
		if (dataAttr && dataAttr === "true") {
			if (i === counter) {
				fig.innerHTML = `
				<button><i class="fa-solid fa-xmark"></i></button>
				<img src="${srcFile}" width="166px" alt="" />
				<figcaption>Image 1</figcaption>
			`;
				fig.setAttribute("data-track", false);

				check = false;
			}

			return check;
		} else {
			if (i === counter) {
				track = Number(fig.id.slice(-1));
				fig.innerHTML = `
				<button><i class="fa-solid fa-xmark"></i></button>
				<img src="${srcFile}" width="166px" alt="" />
				<figcaption>Image 1</figcaption>
			`;
				fig.setAttribute("data-track", false);
				fig.setAttribute("class", "tracker");
				// console.log(fig);

				fig.addEventListener("click", (ev) => {
					removeElementTask(fig, ev);
				});

				check = true;
			}
			return check;
		}
	});

	return check;
}

function removeElementTask(fig, ev) {
	if (ev.target.tagName === "I") {
		const id = Number(fig.id.slice(-1));
		const childrenEl = fig.children;

		Array.from(childrenEl).map((child) => child.remove());
		counter = id - 1;
		fig.setAttribute("data-track", true);
		// console.log(fig);
	}
}

colorPaletteObj.map((color) => {
	paletteContainer.innerHTML += `
		<div style="background-color: ${color};" data-rgb-color = "${color}" class="rgb-color"></div>
	`;
});

let clickTrackColor = false;
colorModalContainer.addEventListener("click", (ev) => {
	ev.preventDefault();
	if (
		ev.target.tagName.toLowerCase() === "i" &&
		ev.target.classList.contains("fa-angle-down")
	) {
		if (!clickTrackColor) {
			paletteContainer.classList.remove("hidden");
			ev.target.style.transform = `rotate(180deg)`;

			clickTrackColor = true;
		} else {
			paletteContainer.classList.add("hidden");
			ev.target.style.transform = `rotate(0deg)`;
			clickTrackColor = false;
		}
	} else if (ev.target.classList.contains("rgb-color")) {
		const renderColor = document.querySelector("div.selected_color");
		const colorCode = ev.target.getAttribute("data-rgb-color");
		renderColor.style.backgroundColor = colorCode;
	}
});
