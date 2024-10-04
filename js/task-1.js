"use strict";

const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((item) => {
	console.log("Category name:", item.querySelector("h2").textContent);

	console.log("Elements:", item.querySelectorAll("li").length);
});
