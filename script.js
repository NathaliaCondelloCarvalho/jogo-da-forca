let palavras = ["GAME", "NUMBER", "DOG", "CAT", "TABLE", "BANANA", "ORANGE"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

let quantidadeErros = 0;
let acertos = 0;
let tentativas = "";
let letra = "";
let letraspermitidas="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyz"
let letrasTecladas=[]

desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaBoneco();


//FUNCIONAMENTO DOS BOTÕES
let botaoRegras = document.querySelector("#regras");
botaoRegras.addEventListener("click", mostraRegras);

let botaoJogar = document.querySelector("#iniciar-jogo");
botaoJogar.addEventListener("click", iniciaJogo);

function mostraRegras() {
    alert ('Descubra a palavra, ela está em inglês. Cada letra errada derruba um prato. Vamos começar?');
}

function iniciaJogo(){
    desenhaTracos();
    document.addEventListener("keyup", jogar);
}

function jogar(event) {
    let l = event.key;
    let letra = l.toUpperCase();

    if(letraspermitidas.includes(letra)) {
        if(!letrasTecladas.includes(letra)){
            if(palavraSecreta.includes(letra)) {
                for(let i = 0; i<palavraSecreta.length; i++) {
                    var apresenta=palavraSecreta[i]
                    if(apresenta == letra) {
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
                pincel.fillText("Tentativas: " + tentativas, 20 ,280);

                quantidadeErros++;
                letrasTecladas.push(letra)

                desenhaBoneco(quantidadeErros);
        }
        verificaFimJogo();
        } else{alert ("Você já tentou esta letra")}
    } else {alert ("Utilize apenas letras")}
}

function verificaFimJogo(){
    if(quantidadeErros >=6) {
        pincel.fillStyle = "orangered";
        pincel.font = "30px Arial";
        pincel.fillText("GAME OVER!", 170 ,70);
        pincel.fillText("A palavra era " + palavraSecreta, 200 ,100);

        document.removeEventListener("keyup", jogar);
    };

    if(acertos == palavraSecreta.length) {
        pincel.fillStyle = "orangered";
        pincel.font = "30px Arial";
        pincel.fillText("YOU WIN!", 180 ,100);

        document.removeEventListener("keyup", jogar);
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





