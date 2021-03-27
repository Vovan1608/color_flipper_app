// import {btn, color, getRandomNumber} from "./helpers/general.js";

const items = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handler () {
	const randomNum = getRandomNumber();
	document.body.style.backgroundColor = items[randomNum];
	color.textContent = items[randomNum];
}

btn.addEventListener("click", handler);

function getRandomNumber() {
	return Math.floor(Math.random() * items.length);
}