const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é intligência artificial? ",
        alternativas: [
            {
                texto: "é um campo da ciênca da computação que se dedica a criar sistemas capazes de realizar tarefas que normalmente exigem inteligência humana ",
                afirmacao: "afirmação"
            },
            {
                texto: "A capaidade de sitemas computacionais realizarem tarefas que requerem inteligência humana ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual é o impacto da inteligência artificial no mundo do trabalho? ",
        alternativas: [
            {
                texto: "substituição de algumas funções humanas por autoamação ",
                afirmacao: "afirmação"
            },
            {
                texto: "criação de novas profissões focadas em desenvolvimnto e manutenção de IA",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quais são os dois tipos principais de aprendizado de máquina?",
        alternativas: [
            {
                texto: "aprendizado supervisionado e aprendizao não supervsionado ",
                afirmacao: "afirmação"
            },
            {
                texto: "aprendizado supervisionado e aprendizado por reforço ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "como a inteligênia artificial pode ser aplicada na medicina?",
        alternativas: [
            {
                texto: "diagnóstico de doenças por meio de análise de exames médicos ",
                afirmacao: "airmação"
            },
            {
                texto: "criação de novos medicamentos de forma autônoma",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quais são os pricipais desafios éticos relacionados a inteligência artificial? ",
        alternativas: [
            {
                texto: "possívis decisões enviesadas em sistemas de IA",
                afirmacao: "afirmação"
            },
            {
                texto: "uso indevido de dados pessoais e privcidade ",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
