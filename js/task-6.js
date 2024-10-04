function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	destroyBoxes();
	let divSize = 20;
	const divArr = [];

	for (let index = 0; index < amount; index++) {
		const newDiv = document.createElement("div");
		divSize += 10;

		newDiv.style.width = `${divSize}px`;
		newDiv.style.height = `${divSize}px`;
		newDiv.style.backgroundColor = getRandomHexColor();

		divArr.push(newDiv);
	}

	return divArr;
}

function destroyBoxes() {
	document.querySelector("#boxes").innerHTML = "";
}

const inputElement = document.querySelector("input[type='number']");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

btnCreate.addEventListener("click", (event) => {
	const countBoxes = Number(inputElement.value);
	inputElement.value = "";

	if (countBoxes > 0 && countBoxes <= 100) {
		boxesDiv.append(...createBoxes(countBoxes));
	}
});

btnDestroy.addEventListener("click", destroyBoxes);
