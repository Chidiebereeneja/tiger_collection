"use strict";
import { anchorActiveTasks } from "../scripts/modules/nav_bar.js";
import {
	addStyle,
	removeStyle,
	inputStyleMatch,
} from "./modules/form-style.js";

const hideBtn = document.querySelector("button#hide-btn");
const password = document.getElementById("password");
const emailOrUsername = document.getElementById("username");
const actionFormBtn = document.querySelectorAll("div.btns_container button");
const signInBtn = document.querySelector("button#sign_in");
// const regexTest = /^[A-Z][\w\d]{8}$/g;
const regexEmailTest = /^[\w._%+-]+@[a-z]+\.[a-z]{2,4}$/g;
const regexUsernameTest = /^[\w._]{2,}$/g;

const formDataObj = {};

anchorActiveTasks("Sign In");

// function initClient() {
// 	gapi.load("auth2", function () {
// 		gapi.auth2.init({
// 			client_id:
// 				"125132724795-01j0o6fmrphte9nl3kp3bju4abkfjd0l.apps.googleusercontent.com",
// 			scope: "profile email",
// 		});
// 	});
// }

// initClient();

// function onSignIn(googleUser) {
// 	var profile = googleUser.getBasicProfile();
// 	console.log("Name: " + profile.getName());
// 	console.log("Email: " + profile.getEmail());
// }

// // Attach the event listener to your custom button
// document.getElementById("customBtn").addEventListener("click", function () {
// 	gapi.auth2
// 		.getAuthInstance()
// 		.signIn()
// 		.catch(function (error) {
// 			console.error("Sign-in error:", error);
// 		});
// });

// Open the popup window for OAuth
// let oauthWindow = window.open(
// 	"https://accounts.google.com/o/oauth2/v2/auth?client_id=125132724795-01j0o6fmrphte9nl3kp3bju4abkfjd0l.apps.googleusercontent.com",
// 	"oauthPopup",
// 	"width=600,height=600"
// );

// console.log(oauthWindow);
// // Check if the popup is closed with a delay
// const checkPopup = setInterval(function () {
// 	if (oauthWindow.closed) {
// 		clearInterval(checkPopup); // Stop checking once the window is closed
// 		console.log("Popup closed!");
// 		// Do something after the popup closes, e.g., process the OAuth response
// 	}
// }, 500); // Check every 500ms

// function initClient() {
// 	gapi.load("auth2", function () {
// 		gapi.auth2.init({
// 			client_id:
// 				"125132724795-01j0o6fmrphte9nl3kp3bju4abkfjd0l.apps.googleusercontent.com",
// 			// scope: "profile email",
// 		});
// 	});
// }

// initClient();

// function onSignIn(googleUser) {
// 	var profile = googleUser.getBasicProfile();
// 	console.log("Name: " + profile.getName());
// 	console.log("Email: " + profile.getEmail());
// }
// function onSignIn(googleUser) {
// 	console.log("hello user signin");
// 	var profile = googleUser.getBasicProfile();
// 	console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
// 	console.log("Name: " + profile.getName());
// 	console.log("Image URL: " + profile.getImageUrl());
// 	console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
// document.getElementById("customBtn").addEventListener("click", function () {
// 	gapi.auth2.getAuthInstance().signIn();
// });

function handleGoogleLogin() {
	// The "g_id_onload" element will initialize the login flow
	google.accounts.id.initialize({
		client_id:
			"125132724795-01j0o6fmrphte9nl3kp3bju4abkfjd0l.apps.googleusercontent.com", // Replace with your actual Google Client ID
		callback: handleCredentialResponse,
	});

	// Render the Google Sign-In button
	google.accounts.id.prompt();
}
// document
// .getElementById("google-login-button")
// .addEventListener("click", handleGoogleLogin);

function handleCredentialResponse(response) {
	console.log("Encoded JWT ID token: " + response.credential);
	// You can now send the token to your server to verify the user and create a session
	// Example: send the token to your backend for authentication
	// Example using Fetch API
	/*
      fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: response.credential })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
      */
}

let hidePasswordCheck = false;

// const addStyle = (targetEl, str) => {
// 	targetEl.classList.add(str);
// };

// const removeStyle = (targetEl, str) => {
// 	targetEl.classList.remove(str);
// };

let trackBtn = false;
actionFormBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		actionFormBtn.forEach((btn) => {
			removeStyle(btn, "hidden");
		});

		const label = document.getElementById("label_show_status");
		const targetEl = e.target;
		if (targetEl.id === "text") {
			emailOrUsername.type = "text";
			label.textContent = "Username";
		} else {
			emailOrUsername.type = "email";
			label.textContent = "Email";
		}

		addStyle(targetEl, "hidden");
	});
});

// function inputStyleMatch(e) {
// 	const targetEl = e.target;
// 	if (targetEl.id === "password") {
// 		targetEl.classList.add("noMatchStyle");
// 		document.querySelector("#warningMsg").classList.remove("hidden");

// 		if (regexTest.test(targetEl.value.trim())) {
// 			removeStyle(targetEl, "noMatchStyle");
// 			addStyle(targetEl, "matchStyle");
// 		} else {
// 			removeStyle(targetEl, "matchStyle");
// 			addStyle(targetEl, "noMatchStyle");
// 		}
// 	}
// }

let hasAtSymbol = false; // Track if @ symbol has been entered

hideBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const iTag = hideBtn.querySelector("i");
	const attr = iTag.getAttribute("data-eye-open");
	const classTxt = `${iTag.classList.value.slice(0, 10).trim()} ${attr}`;
	iTag.setAttribute("data-eye-open", iTag.classList.value.slice(10));
	iTag.className = classTxt;

	if (!hidePasswordCheck) {
		password.setAttribute("type", "text");
		hidePasswordCheck = true;
	} else {
		password.setAttribute("type", "password");
		hidePasswordCheck = false;
	}
});

const inputs = document.querySelectorAll("input");
signInBtn.addEventListener("click", (e) => {
	e.preventDefault();

	inputs.forEach((input) => {
		if (input.value.trim() === "") {
			addStyle(input, "noMatchStyle");
		} else if (input.id === "username") {
			if (regexEmailTest.test(input.value)) {
				removeStyle(input, "noMatchStyle");
				formDataObj.usernameOrEmail = input.value;
			}
		} else if (input.id === "password") {
			formDataObj.password = input.value;
			removeStyle(input, "noMatchStyle");
		}
	});

	console.log(formDataObj);
});

password.addEventListener("keyup", inputStyleMatch);
emailOrUsername.addEventListener("keyup", inputStyleMatch);
