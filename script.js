
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

document.addEventListener("DOMContentLoaded", function() {
  
  var button = document.getElementById("start-button");
  button.addEventListener("click", function(e){
   
    var note_el = document.getElementById("the_note");
    note_el.innerHTML = "?";
    
    var rand = getRandom();

    str = piano_notes[rand].key;
    var res = str.replace("s", "#");
    
    var audio = new Audio('GreatAndSoftPiano/'+piano_notes[rand].file+'.mp3');
    document.getElementById("readystateone").innerHTML = audio.readyState;
    audio.play();  
    document.getElementById("readystatetwo").innerHTML = audio.readyState;
    
    setTimeout(function(){ 
      
      document.getElementById("readystatethree").innerHTML = audio.readyState;    
      note_el.innerHTML = res.toUpperCase();
      
    }, 2000);
  
    document.getElementById("readystatefour").innerHTML = audio.readyState;   
    
  });  
    
});







