  var video = document.querySelector("#webcam");

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      if (navigator.getUserMedia) {
          navigator.getUserMedia({
              video: true
          }, handleVideo, videoError);
      }

      function handleVideo(stream) {
          video.src = window.URL.createObjectURL(stream);
      }

      function videoError(e) {
          console.log(e)
      }


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
              trackerX = (900 - rect.x)  + ((xOffset - 900) / 2)
              trackerY = rect.y + 200;
            });
        });


      function fallingPizza() {
          let $pizzaSlices = $(),
              qt = 1;

          for (var i = 0; i < qt; ++i) {
              let $pizzaSlice = $('<img class="pizzaSlices" src ="../images/pizza.png">');
              $pizzaSlice.css({
                  'left': (($('#webcam').offset().left + 25) + Math.random() * $('#webcam').width() - 50) + 'px',
                  'top': '200px'
              });
              $pizzaSlices = $pizzaSlices.add($pizzaSlice);
          }

          $('#pizzaZone').prepend($pizzaSlices);

          $pizzaSlices.animate({
              top: '1000px'
          }, {
              duration: 4000,
              step: function(now, fx) {
                let pizzaX = $('.pizzaSlices').offset().left
                let pizzaY = $('.pizzaSlices').offset().top
                // console.log('pizza X: ', pizzaX, 'tracker X: ', trackerX)
                // console.log('pizza Y: ', pizzaY, 'tracker Y: ', trackerY)
                if ((pizzaX < trackerX + 75 && pizzaX > trackerX - 75) && (pizzaY < trackerY + 75 && pizzaY > trackerY - 75)) {
                  let left;
                  let top;
                  if (this) {
                    left = $(this).offset().left;
                    top = $(this).offset().top;
                  }
                  const images = ['../images/mingface.png', '../images/explosion.png', '../images/Om_nom_nom.png', '../images/cookie_monster.png', '../images/good_job.png', '../images/thumbs_up.png']
                  console.log(images[Math.floor(Math.random()*images.length)])
                  $(this).replaceWith( (`<img class="pizzaSlices" id="nomNom" src='${images[Math.floor(Math.random()*images.length)]}' style='left:${left}px; top:${top}px;'>` ))
                  setTimeout(function() {
                    $('#nomNom').remove()
                  }, 1000)
                }
              },
              complete: function() {
                $(this).remove()
              }
          });
      }

      const intervalToken = setInterval(fallingPizza, 3000)

