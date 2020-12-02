let enviar = false;

function carregaPerguntas(){
    let quiz = document.getElementById("quiz");
    let montaperguntas = [];
    let listaperguntas = [];

    for(var i = 0; i < perguntas.length;i++){
        montaperguntas = [];

        for(var o = 0; o < perguntas[i].alternativas.length;o++){
            montaperguntas.push(
                `<label>
                    <input onclick=habilitaBotao() type="radio" id="resposta" name=${perguntas[i].numero} value=${perguntas[i].alternativas[o].correta}>
                    <b>${perguntas[i].alternativas[o].letra}</b> - 
                    ${perguntas[i].alternativas[o].alternativa}
                </label>`
            )


        }

        listaperguntas.push(
            `<h2>${i + 1} - ${perguntas[i].questao}</h2>
            ${montaperguntas.join(" ")}`
        )
        
    }

    quiz.innerHTML = listaperguntas.join(" ");
}

function habilitaBotao(){
    let checaMarcacoes = 0
    let respostas = document.querySelectorAll("#resposta");
    let botao = document.getElementById("botao");

    for(var i = 0; i < respostas.length;i++){
        if(respostas[i].checked === true){
            checaMarcacoes++

        }
    }

    if(checaMarcacoes === perguntas.length){
        enviar = true;
        botao.style.backgroundColor = "#222";
        botao.style.borderColor = "green";

    }
}

function resultado(){
    let respostas = document.querySelectorAll("#resposta");
    let resultadoFinal = document.getElementById("resultadoFinal");
    let respostasCertas = 0;

    if(!enviar){
        window.alert("Favor marcar todas as opções antes de Enviar!");
    }else{

        for(var i=0; i < respostas.length; i++){

            if(respostas[i].value === "true" && respostas[i].checked === true){
                respostasCertas++
            }

        }

        let resultado = respostasCertas / perguntas.length * 100;

        resultadoFinal.hidden = false;
        resultadoFinal.innerHTML = `O resultado do seu teste é ${resultado}`;

    }

    



    

    

}
