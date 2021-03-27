const items = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handler () {
	const randomNum = getRandomNumber();
	document.body.style.backgroundColor = items[getRandomNumber()];
	color.textContent = items[getRandomNumber()];
	btn.style.backgroundColor = items[getRandomNumber()];
}

btn.addEventListener("click", handler);

function getRandomNumber() {
	return Math.floor(Math.random() * items.length);
}