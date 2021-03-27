"use strict";

const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handler () {
	const randomNum = 2;
	document.body.style.backgroundColor = colors[randomNum];
	color.textContent = colors[randomNum];
}

btn.addEventListener("click", handler);

function getRandomNumber() {
	return Math.random()
}