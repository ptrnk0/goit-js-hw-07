"use strict";

const loginForm = document.querySelector(".login-form");

const loginFormEvent = (event) => {
	event.preventDefault();
	const form = event.target;
	const email = form.elements.email.value.trim();
	const password = form.elements.password.value.trim();

	if (email.length > 0 || password.length > 0) {
		console.log({
			email: email,
			password: password,
		});

		form.reset();
	} else {
		alert("All form fields must be filled in");
	}
};

loginForm.addEventListener("submit", loginFormEvent);
