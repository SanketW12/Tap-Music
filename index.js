
window.addEventListener("load", () => {


const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const ball = document.querySelector(".ball");
const colors = [ "#60d394" , "#d36060" , "#c060d3" , "#6860d3" , "#d3d160" , "#60b2d3" ];

pads.forEach(playy);


function playy(pad,i){
  pad.addEventListener("click", function(){
    sounds[i].currentTime=0;
    sounds[i].play();
    animateball(i);
  })
}
function animateball(i){
 const bubble = document.createElement("div");
 ball.appendChild(bubble);
 bubble.style.backgroundColor=colors[i];
 console.log(colors[i]);
 bubble.style.animation="jump 1s ease";
 bubble.addEventListener("animationend", function() {
   ball.removeChild(this);
 } )
}



});
