var fps = 10;
var xEscenario = 0;


function atacar() {

   console.log('estas atacando a tu enemigo!!!');

   
}

function mueveescenario() {
   xEscenario++;
   console.log(xEscenario);
}


function principal() {

    mueveescenario();

}

setInterval(principal, 1000 / fps);


