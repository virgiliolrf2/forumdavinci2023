const countries = [
    { className: 'mex', flag: 'mexico.png', name: 'México' },
    { className: 'arg', flag: 'argentina.png', name: 'Argentina' },
    { className: 'bol', flag: 'bolivia.png', name: 'Bolívia' },
    { className: 'col', flag: 'colombia.png', name: 'Colômbia' },
    { className: 'per', flag: 'peru.png', name: 'Peru' },
    { className: 'cub', flag: 'cuba.png', name: 'Cuba' },
    { className: 'br', flag: 'brasil.png', name: 'Brasil' },
    { className: 'eua', flag: 'usa.png', name: 'Estados Unidos' },
    { className: 'urg', flag: 'uruguai.png', name: 'Uruguai' },
    { className: 'els', flag: 'elsalvador.png', name: 'El Salvador' },
    { className: 'nic', flag: 'nicaragua.png', name: 'Nicarágua' },
    { className: 'ven', flag: 'venezuela.png', name: 'Venezuela' },
    { className: 'mex', flag: 'mexico.png', name: 'México' },
    { className: 'chi', flag: 'chile.png', name: 'Chile' },
    { className: 'hon', flag: 'honduras.png', name: 'Honduras' },
    { className: 'cos', flag: 'costarica.png', name: 'Costa Rica' },
    { className: 'sse', flag: 'santase.png', name: 'Santa Sé' },
    { className: 'can', flag: 'canada.png', name: 'Canadá' }
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
