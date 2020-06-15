
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

document.addEventListener("DOMContentLoaded", function() {
  
  var note_el = document.getElementById("the_note");

  var rand = getRandom();
  
  str = piano_notes[rand].key;
  var res = str.replace("s", "#");

  note_el.innerHTML = res.toUpperCase();
  
  var audio = new Audio('GreatAndSoftPiano/'+piano_notes[rand].file+'.mp3');
  audio.play();  
  
});







