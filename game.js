/*
Possible additions:
- avg response time
- color options

Need to do:
- time remaining
*/

var board = document.getElementById("game_board");
var but_start = document.getElementById("start_game");
var score_count = document.getElementById("score_count");

//class code
var dot_class = function dot_class(){
    var change = function(e){
	e.preventDefault();
	this.setAttribute("fill", "green");
    }

    var drawDot = function(x,y){
	var f = document.createElementNS("http://www.w3.org/2000/svg","circle");
	f.setAttribute("cx", x);
	f.setAttribute("cy", y);
	f.setAttribute("r", 15);
	f.setAttribute("fill", "yellow");
	f.setAttribute("stroke", "black");
	f.addEventListener("click", change);
	board.appendChild(f);
    };
    var clicked = function(e){
	if(e.toElement == this){drawDot(e.offsetX, e.offsetY);}
    }
    board.addEventListener("click", clicked);
}

but_start.addEventListener("click", dot_class);

