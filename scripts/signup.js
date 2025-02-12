"use strict";

import { anchorActiveTasks } from "../scripts/modules/nav_bar.js";
import {
	addStyle,
	removeStyle,
	inputStyleMatch,
} from "./modules/form-style.js";

anchorActiveTasks("Sign Up");

const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("sign_up");

passwordInput.addEventListener("input", inputStyleMatch);

signUpBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("input.input-txt");
	console.log(inputs);
});
