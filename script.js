
/* const piano_notes*/

function getRandom() {
  return Math.floor(Math.random() * 88);
}

var synth = window.speechSynthesis;

var voices = [];
function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
                                    const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
                                    if ( aname < bname ) return -1;
                                    else if ( aname == bname ) return 0;
                                    else return +1;
                                    });
}
populateVoiceList();

function speak(text){

        var utterThis = new SpeechSynthesisUtterance(text);
        
        utterThis.voice = voices[74];  
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
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
    audio.play().then(function(){  
    
        setTimeout(function(){ 
 
          speak(res.toUpperCase());
                  
          note_el.innerHTML = res.toUpperCase();

        }, 2000);
      
    });
      
  });  
    
});







