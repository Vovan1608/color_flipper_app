const items = [
	"green", "red", "DarkKhaki", "LightGoldenrodYellow", "PapayaWhip", "Yellow", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "LightSalmon", "Orange", "MediumSpringGreen", "MediumSeaGreen", "SpringGreen", "SeaGreen", "ForestGreen"
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function handler () {
	const randomNum = getRandomNumber();
	document.body.style.backgroundColor = items[getRandomNumber()];
	color.textContent = items[getRandomNumber()];
	btn.style.backgroundColor = items[getRandomNumber()];
	document.querySelector(".nav").style.backgroundColor = items[getRandomNumber()];
}

btn.addEventListener("click", handler);

function getRandomNumber() {
	return Math.floor(Math.random() * items.length);
}