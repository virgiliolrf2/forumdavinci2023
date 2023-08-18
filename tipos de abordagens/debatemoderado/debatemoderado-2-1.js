const eng = document.getElementById('eng');
const eua = document.querySelector('.eua');
const rus = document.querySelector('.rus');
const ch = document.querySelector('.ch');
const fra = document.querySelector('.fra');
const sud = document.querySelector('.sud');
const br = document.querySelector('.br');
const eg = document.querySelector('.eg');
const afs = document.querySelector('.afs'); // África do Sul
const jap = document.querySelector('.rsf');
const eti = document.querySelector('.eti');
const ale = document.querySelector('.ale');
const ira = document.querySelector('.irã'); // Irã
const ind = document.querySelector('.ind');
const isr = document.querySelector('.isr'); // Israel
const ua = document.querySelector('.ua'); // União Africana
const nome = document.querySelector('.nome');
const imagem = document.querySelector('.bandeira');
let running = false;

function moverCopiaEua() {
    imagem.src = 'usa.png';
    nome.textContent = 'Estados Unidos';
}

function moverCopiaEng() {
    imagem.src = 'eng.png';
    nome.textContent = 'Reino Unido';
}

function moverCopiaRus() {
    imagem.src = 'russia.png';
    nome.textContent = 'Rússia';
}

function moverCopiaCh() {
    imagem.src = 'china.png';
    nome.textContent = 'China';
    if (copiaCh) {
        copiaCh.style.display = 'none';
    }
}

function moverCopiaFra() {
    imagem.src = 'frança.png';
    nome.textContent = 'França';
    if (copiaFra) {
        copiaFra.style.display = 'none';
    }
}

function moverCopiaSud() {
    imagem.src = 'sudao.png';
    nome.textContent = 'Sudão';
    if (copiaSud) {
        copiaSud.style.display = 'none';
    }
}

function moverCopiaBr() {
    imagem.src = 'brasil.png';
    nome.textContent = 'Brasil';
    if (copiaBr) {
        copiaBr.style.display = 'none';
    }
}

function moverCopiaEg() {
    imagem.src = 'egito.png';
    nome.textContent = 'Egito';
    if (copiaEg) {
        copiaEg.style.display = 'none';
    }
}

function moverCopiaAfs() {
    imagem.src = 'africa-do-sul.png';
    nome.textContent = 'África do Sul';
    if (copiaAfs) {
        copiaAfs.style.display = 'none';
    }
}

function moverCopiaJap() {
    nome.textContent = 'Forças Paramilitares';
    imagem.src = '';
    if (copiaJap) {
        copiaJap.style.display = 'none';
    }
}

function moverCopiaEti() {
    imagem.src = 'etiopia.png';
    nome.textContent = 'Etiópia';
}

function moverCopiaAle() {
    imagem.src = 'alemanha.png';
    nome.textContent = 'Alemanha';
    if (copiaAle) {
        copiaAle.style.display = 'none';
    }
}

function moverCopiaIra() {
    imagem.src = 'ira.png';
    nome.textContent = 'Irã';
    if (copiaIra) {
        copiaIra.style.display = 'none';
    }
}

function moverCopiaInd() {
    imagem.src = 'india.png';
    nome.textContent = 'Índia';
    if (copiaInd) {
        copiaInd.style.display = 'none';
    }
}

function moverCopiaTurq() {
    imagem.src = 'turquia.png';
    nome.textContent = 'Turquia';
    if (copiaTurq) {
        copiaTurq.style.display = 'none';
    }
}

function moverCopiaIsr() {
    imagem.src = 'suldao2.png';
    nome.textContent = 'Suldão do Sul';
    if (copiaIsr) {
        copiaIsr.style.display = 'none';
    }
}

function moverCopiaUa() {
    imagem.src = 'uniao-africana.png';
    nome.textContent = 'União Africana';
    if (copiaUa) {
        copiaUa.style.display = 'none';
    }
}

eua.addEventListener('click', moverCopiaEua);
rus.addEventListener('click', moverCopiaRus);
ch.addEventListener('click', moverCopiaCh);
fra.addEventListener('click', moverCopiaFra);
sud.addEventListener('click', moverCopiaSud);
br.addEventListener('click', moverCopiaBr);
eg.addEventListener('click', moverCopiaEg);
afs.addEventListener('click', moverCopiaAfs);
jap.addEventListener('click', moverCopiaJap);
eti.addEventListener('click', moverCopiaEti);
irã.addEventListener('click', moverCopiaIra);
isr.addEventListener('click', moverCopiaIsr);
ua.addEventListener('click', moverCopiaUa);
eng.addEventListener('click', moverCopiaEng)

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer() {
const currentTime = new Date().getTime();
const elapsedTime = new Date(currentTime - startTime);
timerElement.innerHTML = elapsedTime.toISOString().substr(11, 8);
}

const initialImage = startButton.querySelector('img').getAttribute('src');

function startTimer() {
if (!running) {
    if (initialImage === 'play.png') {
    startButton.innerHTML = '<img src="restart.png" alt="reiniciar">';
    }
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
} else {
    startButton.innerHTML = '<img src="play.png" alt="Iniciar">';
    resetTimer();
}
}
function stopTimer() {
    if (running) {
    clearInterval(timerInterval);
    running = false;
    }
}

function resetTimer() {
    stopTimer();
    timerElement.innerHTML = '00:00:00';
}

startButton.addEventListener('click', startTimer);