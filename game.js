/*
Possible additions:
- avg response time
- color options
- make the target move after certain number of seconds/ if user too slow, too bad!!
- if do not click on img, then deduct points

Need to do:
- add response time
*/

var board = document.getElementById("game_board");
var but_start = document.getElementById("start_game");
var score_count = document.getElementById("score_count");
var time_count = document.getElementById("time");

var f = document.createElementNS("http://www.w3.org/2000/svg", "image");
f.setAttributeNS('http://www.w3.org/1999/xlink','href','target.png');

var score = 0;
var count = 10;
var level = 1;
var size_det; //determines size of target based on level
var game_over; //if reach level 10, game over

//needs to click once on board before it registers 'correct' click
var game_fn = function game_fn() {
  level = 1;
  size_det = 110 - (level * 20);

  //set initial attributes of target image
  var size = Math.floor((Math.random()*20)+size_det);
  f.setAttributeNS(null,'height',size);
  f.setAttributeNS(null,'width',size);
  f.setAttribute(null,"x", Math.floor((Math.random()*700)));
  f.setAttribute(null,"y", Math.floor((Math.random()*350)));
  board.appendChild(f);

  //new counter for every new game
  var counter = setInterval(timer, 1000);
  function timer() {
    count-= 1;
    time_count.innerHTML = count;

    if (count <= 0) { //END OF LEVEL/TIME OF ONE GAME
      clearInterval(counter);
      f.removeEventListener("click", change);
      level += 1;
      if (level == 5) {
          alert("YOU FINISHED THE GAME!\n\nFINAL SCORE: " + score.toString());
          score = 0;
          return;
      }

      function getConfirmation() {
        var r = confirm( "TIME'S UP!\nLEVEL: " + level.toString() +
                        "\nSCORE: " + score.toString() +
                        "\n\nOK: CONTINUE\nCANCEL: END GAME");
        if (r == true) {
          x = "Player wants to continue! Press Play! to start next level."
          level += 2;
        }
        else {
          x = "***FINAL SCORE: " + score.toString() + "***";
          score = 0;
          score_count.innerHTML = score.toString();
        }

        document.getElementById("continue").innerHTML = x;
      }
      getConfirmation();

      count = 10;
      time_count.innerHTML = count.toString();
      //board.removeEventListener("click", score);
      return;
    }
  }

  var change = function(e){
    e.preventDefault();
    var size = Math.floor((Math.random()*20)+size_det);
    f.setAttributeNS(null,'height',size);
    f.setAttributeNS(null,'width',size);
    f.setAttribute("x", Math.floor((Math.random()*700)));
    f.setAttribute("y", Math.floor((Math.random()*350)));
    score += 5;
    console.log(score);
    score_count.innerHTML = score.toString();
    board.appendChild(f);
  }

    f.addEventListener("click", change);
    //board.addEventListener("click", change);
};

but_start.addEventListener("click", game_fn);
