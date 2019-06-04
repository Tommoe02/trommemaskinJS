
//referanser til HTML elementer
const audio = document.querySelectorAll("audio");

//Globale variabler
const knapper = ["a","s","d","f","g","h","j","k","l"];

//Hendelsesfunktions
document.onkeydown = function(event){
  //console.log(event.key);

  for(let i = 0;i < 9; i ++){
    console.log(i);
    if(event.key ===knapper[i]){
      audio[i].play();
      audio[i].currentTime = 0;
    }
  }
}
