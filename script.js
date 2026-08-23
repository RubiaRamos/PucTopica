const herois = [
    {
        nome: "Paladino",
        faccao: "Aliança",
        poderPrincipal: "Magia Sagrada",
        arma: "Martelo de Guerra"
    },

    {
        nome: "Necromancer",
        faccao: "Horda",
        poderPrincipal: "Reanimação",
        arma: "Foice Sombria"
    },

    {
        nome: "Hunter",
        faccao: "Neutro",
        poderPrincipal: "Domínio de Feras",
        arma: "Arco Longo"
    },

    {
        nome: "Antropomórficos",
        faccao: "Neutro",
        poderPrincipal: "Comunicação com felinos",
        arma: "Garras"
    }
];

const corpoTabela = document.getElementById("corpoTabela");
const campoBusca = document.getElementById("campoBusca");
const botaoOrdenar = document.getElementById("botaoOrdenar");

function mostrarHerois(lista) {

    corpoTabela.innerHTML = "";

    const mensagemVazia = document.getElementById("mensagemVazia");

    if (lista.length === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }

    lista.forEach(function (heroi) {

        const linha = document.createElement("tr");

        linha.innerHTML =
            "<td>" + heroi.nome + "</td>" +
            "<td>" + heroi.faccao + "</td>" +
            "<td>" + heroi.poderPrincipal + "</td>" +
            "<td>" + heroi.arma + "</td>";

        corpoTabela.appendChild(linha);
    });
}

campoBusca.addEventListener("input", function () {

    const termo = campoBusca.value.toLowerCase();

    const filtrados = herois.filter(function (heroi) {

        return heroi.nome.toLowerCase().includes(termo)
            || heroi.faccao.toLowerCase().includes(termo)
            || heroi.poderPrincipal.toLowerCase().includes(termo)
            || heroi.arma.toLowerCase().includes(termo);

    });

    mostrarHerois(filtrados);
});


botaoOrdenar.addEventListener("click", function () {

    herois.sort(function (a, b) {

        return a.nome.localeCompare(b.nome);

    });

    mostrarHerois(herois);

});


mostrarHerois(herois);

const botoesLerMais = document.querySelectorAll(".botao");

botoesLerMais.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const textoOculto = botao.previousElementSibling;

        textoOculto.classList.toggle("mostrar");

        if (textoOculto.classList.contains("mostrar")) {
            botao.textContent = "Ler menos";
        } else {
            botao.textContent = "Ler mais";
        }

    });

});

