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
var time_count = document.getElementById("time");

//needs to click once on board before it registers 'correct' click
var game_fn = function game_fn(){
  var f = document.createElementNS("http://www.w3.org/2000/svg", "image");
  var size = Math.floor((Math.random()*50)+50);
  f.setAttributeNS(null,'height',size);
  f.setAttributeNS(null,'width',size);
  f.setAttributeNS('http://www.w3.org/1999/xlink','href','target.png');
  f.setAttribute(null,"x", Math.floor((Math.random()*750)));
  f.setAttribute(null,"y", Math.floor((Math.random()*400)));
  board.appendChild(f);
  var score = 0;


  var startTimer = function() {
    var count = 30;
    var counter = setInterval(timer, 1000);
    function timer() {
      count-= 1;
      time_count.innerHTML = count;
      if (count <= 0) {
        clearInterval(counter);
        alert("TIME'S UP!\nYour final score was:  " + score.toString());
        return;
      }
    }
  }
  startTimer();

  var change = function(e){
    e.preventDefault();
    var size = Math.floor((Math.random()*10)+100);
    f.setAttributeNS(null,'height',size);
    f.setAttributeNS(null,'width',size);
    f.setAttribute("x", Math.floor((Math.random()*750)));
    f.setAttribute("y", Math.floor((Math.random()*400)));
    score += 5
    score_count.innerHTML = score.toString();
  }

  var move_dot = function move_dot(){
    f.addEventListener("click", change);
    board.appendChild(f);
  }

  board.addEventListener("click", move_dot);
};

but_start.addEventListener("click", game_fn);
