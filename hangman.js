// para inserir array com lista inicial de palavras, onde serão inseridas novas palavras pelo usuário
let palavras = ["GAME", "NUMBER", "DOG", "CAT", "TABLE", "BANANA", "ORANGE"];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavraSecreta);

//outras variáveis
let quantidadeErros = 0;
let acertos = 0;
let tentativas = "";
let letra = "";

desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaBoneco();


//FUNCIONAMENTO DOS BOTÕES

let botaoRegras = document.querySelector("#regras");
botaoRegras.addEventListener("click", mostraRegras);

let botaoJogar = document.querySelector("#iniciar-jogo");
botaoJogar.addEventListener("click", desenhaTracos);

function mostraRegras() {
    alert ('Descubra a palavra, ela está em inglês. Cada letra errada derruba um prato. Vamos começar?')
}

// REGEX - usado para verificar se apenas letras


//para pegar letras tecladas
window.addEventListener("keydown", function(tecla) {
    let letra = tecla.key;
    console.log(letra);

        if(!tentativas.includes(letra.toUpperCase()) && palavraSecreta.includes(letra.toUpperCase())) {
            
            for(let i = 0; i<palavraSecreta.length; i++) {
                var apresenta=palavraSecreta[i]
                if(apresenta == letra.toUpperCase()) {
                    pincel.fillStyle = "black";
                    pincel.font = "45px Arial";
                    pincel.fillText(apresenta, 155 + (70*i),175);
                    
                    acertos++;
                }
            }
        } else {
            tentativas = tentativas + letra;
            pincel.fillStyle = "black";
            pincel.font = "20px Arial";
            pincel.fillText("Tentativas: " + tentativas.toUpperCase(), 20 ,280);

            quantidadeErros++;

            desenhaBoneco(quantidadeErros);
        }
    
    verificaFimJogo();
});


function verificaFimJogo(){
    if(quantidadeErros >=6) {
        pincel.fillStyle = "orangered";
        pincel.font = "30px Arial";
        pincel.fillText("GAME OVER!", 170 ,70);
        pincel.fillText("A palavra era " + palavraSecreta, 200 ,100);

        //falta instrução para parar de receber entrada do teclado
    };

    if(acertos == palavraSecreta.length) {
        pincel.fillStyle = "orangered";
        pincel.font = "30px Arial";
        pincel.fillText("YOU WIN!", 180 ,100);
        
        //falta instrução para parar de receber entrada do teclado

    };
};

function desenhaBoneco() {
    switch(quantidadeErros) {
        case 1:
            desenhaCabeca();
            break;
        case 2:
            desenhaTronco();
            break;
        case 3:
            desenhaBracoEsquerdo();
            break;
        case 4:
            desenhaBracoDireito();
            break;
        case 5:
            desenhaPernaEsquerda();
            break;
        case 6:
            desenhaPernaDireita();
            break;
    }
}





