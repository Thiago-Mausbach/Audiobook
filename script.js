const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;
let tocando = 0
let capituloAtual = 1;

function tocarFaixa () {
    botaoPlayPause.classList.remove('bi-play')
    botaoPlayPause.classList.add('bi-pause-circle')
    audioCapitulo.play();
    tocando = 1;
}

function pausarFaixa() {
    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play')
    audioCapitulo.pause();
    tocando = 0;
}

function proximaFaixa() {
    capituloAtual == numeroCapitulos ? capituloAtual = 1 : capituloAtual += 1 ;
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNome();
}

function voltarFaixa() {
    capituloAtual == 1 ? capituloAtual = numeroCapitulos : capituloAtual -= 1 ;
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNome();
}
function tocarPausar () {
tocando == 0 ? tocarFaixa() : pausarFaixa();
}

function trocarNome () {
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

botaoPlayPause.addEventListener('click', tocarPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
