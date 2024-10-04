function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const showColorValue = document.querySelector(".color");

btnChangeColor.addEventListener("click", (event) => {
	const colorValue = getRandomHexColor();

	document.body.style.backgroundColor = colorValue;
	showColorValue.textContent = colorValue;
});
