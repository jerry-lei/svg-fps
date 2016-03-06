/*
Possible additions:
- avg response time
- color options

Need to do:
- time remaining (easy to add response time afterwards)
*/

var board = document.getElementById("game_board");
var but_start = document.getElementById("start_game");
var score_count = document.getElementById("score_count");


//needs to click once on board before it registers 'correct' click
var game_fn = function game_fn(){
  var f = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  f.setAttribute("r", Math.floor((Math.random()*10)+20));
  f.setAttribute("cx", Math.floor((Math.random()*800)));
  f.setAttribute("cy", Math.floor((Math.random()*450)));
  f.setAttribute("fill","red");
  board.appendChild(f);
  var score = 0;

  var change = function(e){
    e.preventDefault();
    f.setAttribute("r", Math.floor((Math.random()*10)+20));
    f.setAttribute("cx", Math.floor((Math.random()*800)));
    f.setAttribute("cy", Math.floor((Math.random()*450)));
    score += 5
    score_count.innerHTML = score.toString();
  }
  var move_dot = function move_dot(){
    f.addEventListener("click", change);
    board.appendChild(f);
  }
  board.addEventListener("click", move_dot);
}

but_start.addEventListener("click", game_fn);
