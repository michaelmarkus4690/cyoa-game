let typing = new Audio('audio/typing.mp3');
let hp = 100;
let speed = 15;
let i = 0;

function startgame() {
  document.getElementById("startpage").style.display = "none";
  document.getElementById("game").style.display = "block";
  textanimation();
}

let txt = 'You wake up disoriented, your head pounding and your body covered in a cold sweat. The room is dimly lit, casting eerie shadows on the cracked walls. As you try to sit up, your hands touch something slimy and foul-smelling. Panic sets in as you realize you are lying in a grimy bathtub filled with vomit, swarming cockroaches, and other repulsive substances. ';

function textanimation() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(textanimation, speed);
  } else {
  }
}

