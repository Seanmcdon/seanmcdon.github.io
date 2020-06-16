

function triggerEvent(el, type){
	   if ('createEvent' in document) {
	        // modern browsers, IE9+
	        var e = document.createEvent('HTMLEvents');
	        e.initEvent(type, false, true);
	        el.dispatchEvent(e);
	    } else {
	        // IE 8
	        var e = document.createEventObject();
	        e.eventType = type;
	        el.fireEvent('on'+e.eventType, e);
	    }
}

function getRandom() {
  return Math.floor(Math.random() * 88);
}

var synth = window.speechSynthesis;

function speak(text){

        var utterThis = new SpeechSynthesisUtterance(text);
        
        utterThis.voice = synth.getVoices()[55];    
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
  
}

document.addEventListener("DOMContentLoaded", function() {
	
  document.getElementById("ver").innerHTML = "version 2:34";
                          
  var button = document.getElementById("start-button");
  button.addEventListener("click", function(e){
                          
    var note_el = document.getElementById("the_note");
    note_el.innerHTML = "?";
    
    var rand = getRandom();

    str = piano_notes[rand].key;
  
    var n = str.search("s");
    if(n != -1) var res = str.replace("s", " sharp");
    else var res = str + " natural";
    setTimeout(function(){ 
           
	  speak(res.toUpperCase());	
          note_el.innerHTML = res.toUpperCase();

    }, 10000);
	  
	  
	  
    var audio = new Audio('GreatAndSoftPiano/'+piano_notes[rand].file+'.mp3');
    audio.play();
      
  });  
    
});







