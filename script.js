
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

document.addEventListener("DOMContentLoaded", function() {
  
  var note_el = document.getElementById("the_note");

  str = piano_notes[getRandom()].key.toUpperCase();
  var res = str.replace("s", "#");

  note_el.innerHTML = res;
  
});






