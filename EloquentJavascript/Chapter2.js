var onMouseClick = function (e) {
	//alert("You've clicked the mouse");
}

document.body.addEventListener("click", onMouseClick);

function onTriangleButtonClick() {
	var line = "#";

	for (i = 0; i < 7; i++) {
		console.log(line);
		line += "#";
	}
}

function fizzBuzzClick() {
	for (i = 1; i <= 100; i++) {
		s = "";
		if (i % 3 == 0)
			s += "Fizz";
		if (i % 5 == 0)
			s += "Buzz";
		console.log(s||i);
	}
}

function chessBoard(size) {
  var tmp;
  if(!size)
    size = document.getElementById('btnChess').value;

  var line = "";

  for(i = 0; i < size; i++){
    if(i%2 == 0)
      line += " ";
    else
      line += "#";
  }

  var output = "";

  for(i = 0; i < size; i++){
    if(i%2 == 0)
     output+=line;
    else
     output+="#"+line.substring(0,line.length-1);

    output += "\n";
  }

  console.log(output);
}
