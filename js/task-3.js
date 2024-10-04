"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const userInputEvent = (event) => {
	const userName = event.currentTarget.value.trim();
	if (userName.length > 0) {
		nameOutput.textContent = userName;
	} else {
		nameOutput.textContent = "Anonymous";
	}
};

nameInput.addEventListener("input", userInputEvent);
