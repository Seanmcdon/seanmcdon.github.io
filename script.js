
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

const note_el = document.getElementById("the_note");

note_el.innerHTML = piano_notes[getRandom()].key;




