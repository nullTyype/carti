// play function;
const carti = document.querySelector("#carti");
var isPlaying = false;
const audio = new Audio("./assets/longtime.mp3");

carti.addEventListener("click", () => {
   if (isPlaying)
   {
      audio.pause();
      isPlaying = false;
   }
   else {
      audio.play();
      isPlaying = true;
   }
});


// misc func;
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }