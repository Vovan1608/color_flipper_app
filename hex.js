const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handler () {
	let hexColorBody = "#";
	let hexColorBtn = "#";
	let hexColorNav = "#";

	for (let i = 0; i < 6; i++) {
		hexColorBody += items[getRandomNumber()];
		hexColorBtn += items[getRandomNumber()];
		hexColorNav += items[getRandomNumber()];
	}

	document.body.style.backgroundColor = hexColorBody;
	color.textContent = hexColorBody;
	btn.style.backgroundColor = hexColorBtn;
	document.querySelector(".nav").style.backgroundColor = hexColorNav;
}

btn.addEventListener("click", handler);

function getRandomNumber() {
	return Math.floor(Math.random() * items.length);
}