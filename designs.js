const $form = $("form");
const $pixel_canvas = $("#pixel_canvas");
const $width = $("#input_width");
const $height = $("#input_height");
const $colorPicker = $("#colorPicker");
let color = "#000000";

function makeGrid(width, height) {
	$pixel_canvas.empty();
	for (let i = 0; i < height; i++) {
		$pixel_canvas.append("<tr> </tr>");
		for (let l = 0; l < width; l++) {
			$("tr:last").append("<td> </td>");
		}
	}

	$("td").click(function(event) {
		const $cellElem = $(this);
		$cellElem.css("background-color", color);
	});
}

$form.submit(function(event) {
	const width = $width.val();
	const height = $height.val();
	makeGrid(width, height);
	event.preventDefault();
});

$colorPicker.change(function() {
	color = $colorPicker.val();
});
