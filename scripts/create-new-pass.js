"use strict";

const formReset = document.querySelector("#formReset");
const popupCon = document.querySelector(".popupCon");
const backToLoginBtn = document.querySelector("#BacktoLogin");

formReset.addEventListener("click", (ev) => {
	ev.stopPropagation();
	ev.preventDefault();

	if (ev.target.type === "submit") {
		popupCon.classList.remove("animate-translate");
		popupCon.classList.remove("hidden");
		void popupCon.offsetWidth;
		popupCon.classList.add("animate-translate");

		setTimeout(() => {
			popupCon.classList.add("hidden");
			popupCon.classList.remove("animate-translate");
		}, 4 * 1000);

		ev.target.classList.add("hidden");
		backToLoginBtn.classList.remove("hidden");
	} else if (ev.target.tagName.toLowerCase() == "i") {
	}
});

popupCon.addEventListener("click", (ev) => {
	ev.stopPropagation();
	if (ev.target.tagName === "I") {
		popupCon.classList.add("hidden");
		popupCon.classList.remove("animate-translate");
	}
});

backToLoginBtn.addEventListener("click", (ev) => {
	ev.stopPropagation();
	ev.preventDefault();
	window.location.href = "/pages/signin.html";
});
