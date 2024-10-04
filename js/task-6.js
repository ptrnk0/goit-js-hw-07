function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	let divSize = 20;
	const divArr = [];

	for (let index = 0; index <= amount; index++) {
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

const inputDiv = document
	.querySelector("input[type='number']")
	.addEventListener("change", (event) => {
		event.currentTarget.value;
	});

document
	.querySelector("button[data-create]")
	.addEventListener("click", (event) => {
		document
			.querySelector("#boxes")
			.append(...createBoxes(Number(inputDiv)));
	});
