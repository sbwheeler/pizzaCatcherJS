let time = 10;

$('#site').addClass("hiddenClass");

let intervalId;
let level = 5;
function onTimer() {

  if($('#endgame')) $('#endgame').remove()

  if (time === 10) {
    if (level > 5) level = 1;
    intervalId = setInterval(() => fallingPizza(level), ((3500 - (150*level))))
    level += 1
  }
  $('#site').removeClass("hiddenClass");
  $('#site').addClass("showClass");
  $('#mycounter').show()
  $('#start').hide()
  document.getElementById('mycounter').innerHTML = time + ' Seconds Left';
  time--;

  if (time < 0) {
    $('#site').removeClass("showClass");
    $('#site').addClass("hiddenClass");
    document.getElementById('start').innerHTML = 'Start Game: Level ' + level;
    $('#start').show()
    $('#mycounter').hide()
    $('#score').hide()
    time = 10
    clearInterval(intervalId)
    endCheck(level)
  }

   else {
    setTimeout(onTimer, 1000);
  }
}

function endCheck(level) {
if (level > 5) {
    $("#startbuttondiv").after(`<br/><div id='endgame'> Game Over! Your score is ${score}! </div>`)
    $('#site').removeClass("showClass");
    $('#site').addClass("hiddenClass");
    document.getElementById('start').innerHTML = 'Start New Game';
    $('#start').show()
    $('#mycounter').hide()
    $('#score').hide()
    score = 0
    time = 10
    clearInterval(intervalId)
  }
}

function addScore() {
  $('#score').show();
  document.getElementById('score').innerHTML = `Score: ${score}`;
}

