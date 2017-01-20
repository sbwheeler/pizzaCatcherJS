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
        // tracker.setInitialScale(2);
        // tracker.setStepSize(.5);
        // tracker.setEdgesDensity(0.1);
        let trackerX;
        let trackerY;
        tracking.track('#webcam', tracker);
        tracker.on('track', function(event) {
            event.data.forEach(function(rect) {
              trackerX = (900 - rect.x)
              trackerY = rect.y + 200;
                // console.log('PINK', 'X: ', rect.x, 'Y: ', rect.y)
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
                // console.log(pizzaX)
                // console.log(pizzaY, trackerY)
                if ((pizzaX < trackerX + 50 && pizzaX > trackerX - 50) && (pizzaY < trackerY + 50 && pizzaY > trackerY - 50)) {
                  $(this).remove()
                }
              },
              complete: function() {
                $(this).remove()
              }
          });
          // $('.snowflakes').remove()
      }

      var intervalToken = setInterval(fallingSnow, 3000)
