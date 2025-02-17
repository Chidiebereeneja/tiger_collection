"use strict";

import { anchorActiveTasks } from "../scripts/modules/nav_bar.js";
import {
	addStyle,
	removeStyle,
	inputStyleMatch,
	regexEmailTest,
	regexTest,
	eyePasswordTask,
} from "./modules/form-style.js";

anchorActiveTasks("Sign Up");

const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("sign_up");
const terms = document.getElementById("terms_condition");
const pEl = document.getElementById("warning-terms");
const hideBtn = document.querySelector("button#hide-btn");

const formDataObj = {};

passwordInput.addEventListener("input", inputStyleMatch);

const inputArr = [];
signUpBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("input.input-txt");

	inputs.forEach((input) => inputArr.push(input));
	const inputCheck = inputArr.every((input) => input.value !== "");
	const arrCheck = Array.from(inputs).filter((input) => input.value === "");
	x;

	Array.from(inputs).map((input) => {
		if (input.value === "") return;
		else if (!terms.checked) {
			removeStyle(pEl, "hidden");
			addStyle(pEl, "error");
		} else {
			formDataObj[input.id] = input.value;
		}
	});

	// if (formDataObj.length === undefined) return;
});

terms.addEventListener("change", (e) => {
	if (e.target.checked) {
		addStyle(pEl, "hidden");
	}
});

hideBtn.addEventListener("click", (e) => {
	eyePasswordTask(e, hideBtn);
});

// onSignIn(googleUser);
