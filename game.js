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

var f = document.createElementNS("http://www.w3.org/2000/svg", "image");
f.setAttributeNS('http://www.w3.org/1999/xlink','href','target.png');

var score;
var count;

//needs to click once on board before it registers 'correct' click
var game_fn = function game_fn() {
  //resets every time Play! button is pressed
  score = 0;
  score_count.innerHTML = score.toString();
  console.log(score);
  count = 10;
  time_count.innerHTML = count.toString();

  //set initial attributes of target image
  var size = Math.floor((Math.random()*50)+50);
  f.setAttributeNS(null,'height',size);
  f.setAttributeNS(null,'width',size);
  f.setAttribute(null,"x", Math.floor((Math.random()*750)));
  f.setAttribute(null,"y", Math.floor((Math.random()*400)));
  board.appendChild(f);

  //new counter for every new game
  var counter = setInterval(timer, 1000);
  function timer() {
    count-= 1;
    time_count.innerHTML = count;
    if (count <= 0) {
      clearInterval(counter);
      alert("TIME'S UP!\nYour final score was: " + score.toString() );
      f.removeEventListener("click", change);
      return;
    }
  }

  var change = function(e){
    e.preventDefault();
    var size = Math.floor((Math.random()*10)+100);
    f.setAttributeNS(null,'height',size);
    f.setAttributeNS(null,'width',size);
    f.setAttribute("x", Math.floor((Math.random()*750)));
    f.setAttribute("y", Math.floor((Math.random()*400)));
    score += 5;
    console.log(score);
    score_count.innerHTML = score.toString();
    board.appendChild(f);

  }

  var score = function score() {
    //if did not click on target, sub points
    //if did click on target, add and change coor
    f.addEventListener("click", change);
  }
  //have to click board once before starting game to init move_dot
  board.addEventListener("click", score);
};

but_start.addEventListener("click", game_fn);
