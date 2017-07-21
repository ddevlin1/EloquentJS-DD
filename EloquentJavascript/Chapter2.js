var onMouseClick = function (e) {
	//alert("You've clicked the mouse");
}

document.body.addEventListener("click", onMouseClick);

function callFunction(fName){
  var t0 = performance.now();
  window[fName]();
  var t1 = performance.now();
  document.getElementById('lblTimer').value = t1-t0;
}

function onTriangleButtonClick() {
	var line = "#";

	for (i = 0; i < 10; i++) {
		console.log(line);
		line += "#";
	}
}

function fizzBuzzClick() {
	for (i = 1; i < 101; i++) {
		s = "";
		if (i % 3 == 0)
			s += "Fizz";
		if (i % 5 == 0)
			s += "Buzz";
		if (s == "")
			console.log(i);
		else
			console.log(s);
	}
}

function chessBoard(size) {
  var day = new Date();
  var startTime = day.getTime();
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

  var x = new Date();
  console.log(output);
  console.log(x.getTime() - startTime);
}
