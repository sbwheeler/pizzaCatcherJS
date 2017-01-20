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

        console.log('OFFSET: ', xOffset)

        tracking.track('#webcam', tracker);
        tracker.on('track', function(event) {
            event.data.forEach(function(rect) {
              trackerX = (900 - rect.x)  + ((xOffset - 900) / 2)
              trackerY = rect.y + 200;
            });
        });


      function fallingSnow() {

          var $pizzaSlices = $(),
              qt = 1;

          for (var i = 0; i < qt; ++i) {
              var $pizzaSlice = $('<img class="pizzaSlices" src ="pizza.png">');
              $pizzaSlice.css({
                  'left': (($('#webcam').offset().left + 25) + Math.random() * $('#webcam').width() - 50) + 'px',
                  'top': '200px'
              });
              // add this snowflake to the set of snowflakes
              $pizzaSlices = $pizzaSlices.add($pizzaSlice);
          }
          $('#pizzaZone').prepend($pizzaSlices);
          // console.log($('.snowflakes').offset().left)
          // console.log($('.snowflakes').offset().top)
          $pizzaSlices.animate({
              top: "1000px"
          }, {
              duration: 4000,
              step: function(now, fx) {
                let pizzaX = $('.pizzaSlices').offset().left
                let pizzaY = $('.pizzaSlices').offset().top
                // console.log('pizza X: ', pizzaX, 'tracker X: ', trackerX)
                // console.log('pizza Y: ', pizzaY, 'tracker Y: ', trackerY)
                if ((pizzaX < trackerX + 75 && pizzaX > trackerX - 75) && (pizzaY < trackerY + 75 && pizzaY > trackerY - 75)) {
                  let left = $(this).offset().left
                  let top = $(this).offset().top
                  $(this).replaceWith( (`<img class="pizzaSlices" src="../logo.png" style='left:${left}px; top:${top}px;'>` ));
                }
              },
              complete: function() {
                $(this).remove()
              }
          });
          // $('.snowflakes').remove()
      }

      var intervalToken = setInterval(fallingSnow, 3000)

