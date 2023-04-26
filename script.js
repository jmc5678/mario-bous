window.onload = init;
    function init() {
      setInterval(mover, 10);
      izquierda = 0;
    }

    function mover() {
      izquierda++;
      if (izquierda < 550) {
        document.querySelector(".corredor").style.left = izquierda + 'px';
      } else {
        izquierda = 0;
      }
    } 

    const objeto = document.getElementById('objeto');

    let posicionX = window.innerWidth/2 - objeto.clientWidth/2;
    let posicionY = window.innerHeight/2 - objeto.clientHeight/2;
    
    objeto.style.left = posicionX + 'px';
    objeto.style.top = posicionY + 'px';
    
    document.addEventListener('keydown', function(event) {
      switch(event.keyCode) {
        case 37:
          posicionX -= 10;
          break;
        case 38:
          posicionY -= 10;
          break;
        case 39:
          posicionX += 10;
          break;
        case 40:
          posicionY += 10;
          break;
        default:
          break;
      }
    
      objeto.style.left = posicionX + 'px';
      objeto.style.top = posicionY + 'px';
    });
    