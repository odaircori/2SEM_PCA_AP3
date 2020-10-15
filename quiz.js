const questoes = [
    {
        "questao": "Qual destas formas é a forma correta de prevenção contra covid-19?",
        "numero": 1,
        "alternativas": [
            {
                "alternativa": "Usar máscara em locais públicos, lavar bem as mãos e usar álcool em gel",
                "letra": "A",
                "correta": true
            },
            {
                "alternativa": "Teste B",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "Teste C",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "Teste D",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Pergunta 2?",
        "numero": 2,
        "alternativas": [
            {
                "alternativa": "Usar máscara em locais públicos, lavar bem as mãos e usar álcool em gel",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "Teste B",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "Teste C",
                "letra": "C",
                "correta": true
            },
            {
                "alternativa": "Teste D",
                "letra": "D",
                "correta": false
            }
        ]
    }    
]

let enviar = false;

function carregaPerguntas(){
    let quiz = document.getElementById("quiz");
    let montaPerguntas = [];
    let listaPerguntas = [];

    for(var i = 0; i < questoes.length;i++){
        montaPerguntas = [];

        for(var o = 0; o < questoes[i].alternativas.length;o++){
            montaPerguntas.push(
                `<label>
                    <input onclick=habilitaBotao() type="radio" id="resposta" name=${questoes[i].numero} value=${questoes[i].alternativas[o].correta}>
                    <b>${questoes[i].alternativas[o].letra}</b> - 
                    ${questoes[i].alternativas[o].alternativa}
                </label>`
            )


        }

        listaPerguntas.push(
            `<h2>${questoes[i].questao}</h2>
            ${montaPerguntas.join(" ")}`
        )
        
    }

    quiz.innerHTML = listaPerguntas.join(" ");
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

    if(checaMarcacoes === questoes.length){
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

        let resultado = respostasCertas / questoes.length * 100;

        resultadoFinal.hidden = false;
        resultadoFinal.innerHTML = `O resultado do seu teste é ${resultado}`;

    }

    



    

    

}
