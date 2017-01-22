let time = 10;

$('#site').addClass("hiddenClass");

let intervalId;
let level = 1;
function onTimer() {
  if (time === 10) {
    intervalId = setInterval(() => fallingPizza(level), ((3500 - (200*level))))
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

  }

   else {
    setTimeout(onTimer, 1000);
  }
}

if (level > 2) {
    console.log('HIBCDIBCDUIBCIUDBCIDBICUBDIUBCDUIBciu')
    alert('Game Over! Your Score is = ' + score + '!');
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

function addScore() {
  $('#score').show();
  document.getElementById('score').innerHTML = 'Score: 0';
}

