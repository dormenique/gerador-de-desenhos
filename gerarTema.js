function gerarTema(){
    var sujeito = ["cachorro", "gato", "lâmpada", "banana", "garfo"];
    var ação = ["vestido de", "montado em um", "ao lado de um"];
    var elemento = ["unicórnio", "drag queen", "abelha", "marinheiro", "monstro"];
    var complemento = ["cores quentes", "cores complementares", "preto e branco", "pontilhismo", "esquema monocromático"];

    var randomSujeito = sujeito[Math.floor(Math.random() * sujeito.length)];
    var randomAção = ação[Math.floor(Math.random() * ação.length)];
    var randomElemento = elemento[Math.floor(Math.random() * elemento.length)];
    var randomComplemento = complemento[Math.floor(Math.random() * complemento.length)];
   
    document.getElementById('resultado').innerHTML="Um" + " " + randomSujeito + " " + randomAção + " " + randomElemento + " " + "em" + " " + randomComplemento
}

