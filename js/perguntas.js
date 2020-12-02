const perguntas = [
    {
        "questao": "O que é COVID-19?",
        "numero": 1,
        "alternativas": [
            {
                "alternativa": "é uma doença causada pelo coronavírus, denominado SARS-CoV-2.",
                "letra": "A",
                "correta": true
            },
            {
                "alternativa": "é uma doença causada pelo coronavírus, denominado SARS-CoV",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "é uma doença causada pelo coronavírus, denominado 2019-nCoV.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "é uma doença causada pelo coronavírus, denominado MERS-CoV",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Como é transmitido o COVID-19?",
        "numero": 2,
        "alternativas": [
            {
                "alternativa": "É transmitido pelo Ar.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "É transmitido por Animais.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "É transmitido pela Água.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "É transmitido por contato com outra pessoa que já tenha o vírus.",
                "letra": "D",
                "correta": true
            }
        ]
    },
    {
        "questao": "Quais são os sintomas mais comuns do COVID-19?",
        "numero": 3,
        "alternativas": [
            {
                "alternativa": "Dor nas costas e lombar.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "Variar de um resfriado, sensação febril ou febre associada a dor de garganta, dor de cabeça, tosse, coriza) até uma pneumonia severa.",
                "letra": "B",
                "correta": true
            },
            {
                "alternativa": "Dor nos olhos e na cabeça.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "Diarreia e dor abdominal.",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Quem está mais vulnerável à COVID-19?",
        "numero": 4,
        "alternativas": [
            {
                "alternativa": "Bebês e Crianças até 10 anos de idade.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "Gestantes.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "Adultos entre 35 a 45 Anos.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "Pessoas idosas e pessoas com condições médicas pré-existentes (como pressão alta, doenças cardíacas, doenças pulmonares, câncer ou diabete).",
                "letra": "D",
                "correta": true
            }
        ]
    },
    {
        "questao": "Quais as complicações mais comuns do coronavírus?",
        "numero": 5,
        "alternativas": [
            {
                "alternativa": "Síndrome Respiratória Aguda Grave – SRAG",
                "letra": "A",
                "correta": true
            },
            {
                "alternativa": "Síndrome Gripal.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "Surto de H1N1.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "Síndrome respiratória do Oriente Médio (mers).",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Sobre as recomendações de prevenção à COVID-19, assinale a alternativa correta: <br/><br/> 1 - Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%. <br/> 2 - Retire qualquer recipiente do seu quintal, que possa acumular água parada, como pneus e latas velhas. <br/> 3 - Não compartilhe objetos de uso pessoal como talheres, toalhas, pratos e copos. <br/> 4 - Evitar a exposição excessiva ao sol, principalmente entre os horários das 10h às 16h, e sempre fazer uso de filtro solar.",
        "numero": 6,
        "alternativas": [
            {
                "alternativa": "Apenas a resposta 1 está correta.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "As respostas 1 e 3 estão corretas.",
                "letra": "B",
                "correta": true
            },
            {
                "alternativa": "Apenas as respostas 3 e 4 estão corretas.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "As respostas 3 e 4 estão incorretas.",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Como deve ser feito o período de quarentena, em casa, caso comece a apresentar os sintomas?",
        "numero": 7,
        "alternativas": [
            {
                "alternativa": "Deve ser um período de isolamento domiciliar, evitando contato também com os outros moradores da casa, especialmente se forem idosos ou pessoas com doenças crônicas.",
                "letra": "A",
                "correta": true
            },
            {
                "alternativa": "Deve-se evitar dirigir veículos automotores, ou operar maquinas pesadas que exijam maior atenção.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "A cada 4 horas, a pessoa que apresenta os sintomas, deve fazer gargarejo com água morna, limão e sal.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "O paciente com sintomas deve higienizar a boca e garganta constantemente com antisséptico bucal, pois esse é capaz de matar o vírus.",
                "letra": "D",
                "correta": false
            }
        ]
    },
    {
        "questao": "Qual é o tempo de incubação do novo coronavírus?",
        "numero": 8,
        "alternativas": [
            {
                "alternativa": "De acordo com a Organização das Nações Unidas (ONU), o tempo de incubação do novo Corona vírus em seres humanos pode variar de 15 a 30 dias.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "O tempo médio de incubação é variável de acordo com o paciente. Podendo este chegar a 2 meses.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "O período varia de 2 a 5 dias, com o tratamento adequado, pode ser curado já no segundo dia.",
                "letra": "C",
                "correta": false
            },
            {
                "alternativa": "De acordo com a Organização Mundial da Saúde (OMS), no caso da Covid-19 esse intervalo varia de 1 a 14 dias, geralmente ficando em torno de 5 dias.",
                "letra": "D",
                "correta": true
            }
        ]
    },
    {
        "questao": "A cerca do uso de mascaras caseiras, podemos afirmar que:",
        "numero": 9,
        "alternativas": [
            {
                "alternativa": "Apenas máscaras cirúrgicas ou N95 tem eficiência contra a contaminação do novo Corona vírus.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "O uso de máscaras deve ser evitado, pois as mesmas, acumulam resíduos respiratórios que propiciam a propagação do novo Corona vírus.",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "O uso de máscaras caseias pode ser eficiente, desde que, sejam fabricadas de acordo com as orientações do ministério da saúde. A prática ainda permite que, máscaras cirúrgicas ou N95 possam ser destinadas a profissionais de saúde, diante da demanda deficitária no mercado. ",
                "letra": "C",
                "correta": true
            },
            {
                "alternativa": "A utilização de máscaras caseiras, não impede a disseminação de gotículas expelidas do nariz ou da boca do usuário no ambiente.",
                "letra": "D",
                "correta": false
            }
        ]
    },           
    {
        "questao": "Por que a doença causada pelo novo vírus recebeu o nome de Covid-19?",
        "numero": 10,
        "alternativas": [
            {
                "alternativa": "Por ser essa a décima nona variação evolutiva do vírus, tendo sua história iniciada no ano 2000 com o Covid-01.",
                "letra": "A",
                "correta": false
            },
            {
                "alternativa": "COVID significa Corona Virus Decade (Década do Coronavírus), enquanto “19” se refere a 2019, quando os primeiros casos conhecidos completaram 10 anos de descobertos",
                "letra": "B",
                "correta": false
            },
            {
                "alternativa": "COVID significa Corona Virus Disease (Doença do Coronavírus), enquanto “19” se refere a 2019, quando os primeiros casos foram divulgados.",
                "letra": "C",
                "correta": true
            },
            {
                "alternativa": "Este é um nome exclusivamente científico, sem nenhuma referência relevante, fora dos laboratórios que descobriram o vírus.",
                "letra": "D",
                "correta": false
            }
        ]
    }   
]