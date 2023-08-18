const countries = [
    { className: 'eua', flag: 'usa.png', name: 'Estados Unidos' },
    { className: 'rus', flag: 'russia.png', name: 'Rússia' },
    { className: 'ch', flag: 'china.png', name: 'China' },
    { className: 'eng', flag: 'eng.png', name: 'Inglaterra' },
    { className: 'fra', flag: 'frança.png', name: 'França' },
    { className: 'esl', flag: 'eslovenia.png', name: 'Eslovênia' },
    { className: 'br', flag: 'brasil.png', name: 'Brasil' },
    { className: 'ita', flag: 'italia.png', name: 'Itália' },
    { className: 'iug', flag: 'iugoslávia.png', name: 'Iugoslávia' },
    { className: 'jap', flag: 'japao.png', name: 'Japão' },
    { className: 'cro', flag: 'croacia.png', name: 'Croácia' },
    { className: 'ale', flag: 'alemanha.png', name: 'Alemanha' },
    { className: 'mac', flag: 'macedonia.png', name: 'Macedônia' },
    { className: 'bos', flag: 'bosnia.png', name: 'Bósnia e Herzegovina' },
    { className: 'turq', flag: 'turquia.png', name: 'Turquia' },
    { className: 'gre', flag: 'grecia.png', name: 'Grécia' },
    { className: 'otan', flag: 'otan.png', name: 'OTAN' }
];


const convertedCountries = countries.map(country => ({
    elem: document.querySelector(`.${country.className}`),
    flag: country.flag,
    name: country.name
}));

const nome = document.querySelector('.nome');
const imagem = document.querySelector('.bandeira');
let running = false;
let startTime;
let timerInterval;

function moverCopiaPais(pais) {
    return function() {
        imagem.src = pais.flag;
        nome.textContent = pais.name;
        const copiaElement = pais.elem;
        if (copiaElement) {
            copiaElement.style.display = 'block';
        }
    };
}

convertedCountries.forEach(pais => {
    const button = pais.elem;
    if (button) {
        button.addEventListener('click', moverCopiaPais(pais));
    }
});

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