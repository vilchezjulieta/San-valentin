/* Te amo pinchilinsh */
$(document).ready(function () {
  $(".mainContainer")
    .mouseenter(function () {
      $(".tarjeta").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".tarjeta").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

window.addEventListener('load', iniciar, false);

let cursor; 


function preload(){
 cursor.load.image('ladybug','img/ladybug.png'); 
}
function iniciar() {
  var ladybug = cursor.create('ladybug');
  
  ladybug.addEventListener('click', mouseLadybug, false);
  

}

function mouseLadybug(e) {
  document.documentElement.style.cursor = "('img/ladybug.png'),auto";
}