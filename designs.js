const pixelCanvasElem = document.getElementById("pixel_canvas");
const sizePickerElem = document.getElementById("sizePicker");
const widthInputElem = document.getElementById("input_width");
const heightInputElem = document.getElementById("input_height");
const colorPickerElem = document.getElementById("colorPicker");
let color = "#000000";

function makeGrid(width, height) {
	pixelCanvasElem.innerHTML = "";
	for (let row = 0; row < width; row++) {
		let rowElem = document.createElement("tr");
		for (let column = 0; column < height; column++) {
			let columnElem = document.createElement("td");
			rowElem.appendChild(columnElem);
		}
		pixelCanvasElem.appendChild(rowElem);
	}
}

sizePickerElem.addEventListener("submit", function(event) {
	event.preventDefault();
	let width = widthInputElem.value;
	let height = heightInputElem.value;
	makeGrid(width, height);
});

pixelCanvasElem.addEventListener("click", function(event) {
	if (event.target.tagName === "TD") {
		event.target.style.backgroundColor = color;
	}
});

colorPickerElem.addEventListener("change", function(event) {
	color = event.target.value;
});
