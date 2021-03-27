import {btn, color, getRandomNumber} from "./helpers/common.js";

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

function handler () {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += items[getRandomNumber()];
	}
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
}

btn.addEventListener("click", handler);

// function getRandomNumber() {
// 	return Math.floor(Math.random() * hex.length);
// }