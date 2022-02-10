let botaoInserePalavra = document.querySelector("#btn-nova-palavra");

botaoInserePalavra.addEventListener("click", function (e){
    e.preventDefault();

    let p = document.querySelector("#input-nova-palavra").value;
    let novaPalavra = p.toUpperCase();

    palavras.push(novaPalavra);
    console.log (palavras);
})



