//para inserir área de desenho
let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    pincel.fillStyle = 'antiquewhite';
    pincel.fillRect(0, 0, 800, 1200);
    
    function desenhaPoste() {
        pincel.moveTo(30, 10);
        pincel.lineTo(30, 180);
    }

    function desenhaBarraSuperior() {
        pincel.moveTo(30, 10);
        pincel.lineTo(110, 10);
    }

    function desenhaApoio() {
        pincel.moveTo(110, 10);
        pincel.lineTo(110, 30);
    }

    function desenhaCabeca() {
        pincel.fillStyle= "orangered";
        pincel.beginPath();
        pincel.arc(110,45,15,0,2 * Math.PI,true);
        pincel.fill();
    }
    
    function desenhaTronco() {
        pincel.fillStyle= "orangered";
        pincel.fillRect(107, 55, 5, 50);    
    }

    function desenhaBracoEsquerdo() {
        pincel.fillStyle= "orangered";
        pincel.moveTo(110, 60);
        pincel.lineTo(110, 65);
        pincel.lineTo(135, 80);
        pincel.lineTo(135, 75);
        pincel.fill();
    }
    
    function desenhaBracoDireito() {
        pincel.fillStyle= "orangered";
        pincel.moveTo(110, 60);
        pincel.lineTo(110, 65);
        pincel.lineTo(85, 80);
        pincel.lineTo(85, 75);
        pincel.fill();
    }
    
    function desenhaPernaEsquerda() {
        pincel.fillStyle= "orangered";
        pincel.moveTo(110, 100);
        pincel.lineTo(110, 105);
        pincel.lineTo(85, 120);
        pincel.lineTo(85, 115);
        pincel.fill();
    }
    
    function desenhaPernaDireita() {
        pincel.fillStyle= "orangered";
        pincel.moveTo(110, 100);
        pincel.lineTo(110, 105);
        pincel.lineTo(135, 120);
        pincel.lineTo(135, 115);
        pincel.fill();
    }

    function desenhaTracos() {
        for (var i=0; i<palavraSecreta.length; i++){
            pincel.fillStyle= "black";
            pincel.moveTo(150 + (70*i), 180);
            pincel.lineTo(200 + (70*i), 180);
            pincel.stroke();
        }
    }
    





