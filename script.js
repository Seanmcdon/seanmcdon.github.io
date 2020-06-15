
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

document.addEventListener("DOMContentLoaded", function() {
  
  var note_el = document.getElementById("the_note");

  note_el.innerHTML = piano_notes[getRandom()].key.toUpperCase();
  
  var res = piano_notes[getRandom()].key.replace("s", "#");

  note_el.innerHTML = res;
  
});






