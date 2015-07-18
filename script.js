var length = 16;
var width = 16;



var main = function() {
	generateSquares(length, width);
	$("#button").click(function(){
		length = prompt("Enter new length");
		width = prompt("Enter new width");
		$("table").empty();
		generateSquares(length,width);
	})
}

var draw = function() {
	
}

function generateSquares(length, width){
	var squareWidth = 600/length;
	for (i=0; i < length; i++){
		$("table").append("<tr></tr>");
	}
	for (i=0; i < width; i++){
		$("tr").append("<td style='width:" + squareWidth + "px; height:" + squareWidth + "px;'><div class='square'></div></td>")
	}
	$(".square").hover(function(){
		$(this).addClass("red");
	})
}

$(document).ready(main);
