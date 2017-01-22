let time = 30;

$('#site').addClass("hiddenClass");

let intervalId;
let level = 0;
function onTimer() {
  if (time === 30) {
    intervalId = setInterval(() => fallingPizza(level), ((Math.random() * (3000 - (2000 - (100 * level))) + (2000 - (100 * level)))))
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
    $('#start').show()
    $('#mycounter').hide()
    $('#score').hide()
    time = 30
    score = 0;
    clearInterval(intervalId)

  } else {
    setTimeout(onTimer, 1000);
  }
}

function addScore() {
  $('#score').show();
  document.getElementById('score').innerHTML = 'Score: 0';
}

