tracking.ColorTracker.registerColor('pink', function(r, g, b) {
  if ((r > 180) && (g < 130 && g > 40) && (b < 160 && b > 80)) return true;
  return false;
})
const tracker = new tracking.ColorTracker(['pink']);

let trackerX;
let trackerY;

//for determining offset with different screen size
let xOffset = document.getElementById('fullcontainer').offsetWidth;

tracking.track('#webcam', tracker);
tracker.on('track', function(event) {
  event.data.forEach(function(rect) {
    trackerX = (900 - rect.x) + ((xOffset - 900) / 2)
    trackerY = rect.y + 200;
  });
});

let score = 0;

const pizzaImages = ['../images/pizza.png', '../images/pizzasmile.png', '../images/realpizza.png', '../images/olivepizza.png']

function fallingPizza(level) {
  let $pizzaSlice = $(`<img class="pizzaSlices" src ='${pizzaImages[Math.floor(Math.random()*pizzaImages.length)]}'>`);
  $pizzaSlice.css({
    'left': (($('#webcam').offset().left + 25) + Math.random() * $('#webcam').width() - 50) + 'px',
    'top': '200px'
  });


  $('#pizzaZone').prepend($pizzaSlice);

  $pizzaSlice.animate({
    top: '1000px'
  }, {
    duration: ((1 /level) * (Math.random() * (6000 - 4000) + 4000)),
    step: function(now, fx) {
      let pizzaX = $('.pizzaSlices').offset().left
      let pizzaY = $('.pizzaSlices').offset().top

      // console.log('pizza X: ', pizzaX, 'tracker X: ', trackerX)
      // console.log('pizza Y: ', pizzaY, 'tracker Y: ', trackerY)

      if ((pizzaX < trackerX + 75 && pizzaX > trackerX - 75) && (pizzaY < trackerY + 75 && pizzaY > trackerY - 75)) {
        score++;
        $('#score').html('Score: ' + score.toString());
        let left;
        let top;
        if (this) {
          left = $(this).offset().left;
          top = $(this).offset().top;
        }
        const images = ['../images/mingface.png', '../images/explosion.png', '../images/Om_nom_nom.png', '../images/cookie_monster.png', '../images/good_job.png', '../images/thumbs_up.png']
        $(this).replaceWith((`<img class="pizzaSlices" id="nomNom" src='${images[Math.floor(Math.random()*images.length)]}' style='left:${left}px; top:${top}px;'>`))
        setTimeout(function() {
          $('#nomNom').remove()
        }, 1000)
        $(this).finish()
      }
    },
    complete: function() {
      $(this).remove()
    }
  });
}
