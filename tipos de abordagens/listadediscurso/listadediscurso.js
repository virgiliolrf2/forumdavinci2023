const countries = [
    { elem: '.eua', flag: '/tipos de abordagens/debatemoderado/usa.png', name: 'Estados Unidos' },
    { elem: '.rus', flag: '/tipos de abordagens/debatemoderado/russia.png', name: 'Rússia' },
    { elem: '.ch', flag: '/tipos de abordagens/debatemoderado/china.png', name: 'China' },
    { elem: '.eng', flag: '/tipos de abordagens/debatemoderado/eng.png', name: 'Inglaterra' },
    { elem: '.fra', flag: '/tipos de abordagens/debatemoderado/frança.png', name: 'França' },
    { elem: '.esl', flag: '/tipos de abordagens/debatemoderado/eslovenia.png', name: 'Eslovênia' },
    { elem: '.br', flag: '/tipos de abordagens/debatemoderado/brasil.png', name: 'Brasil' },
    { elem: '.ita', flag: '/tipos de abordagens/debatemoderado/italia.png', name: 'Itália' },
    { elem: '.iug', flag: '/tipos de abordagens/debatemoderado/iugoslávia.png', name: 'Iugoslávia' },
    { elem: '.jap', flag: '/tipos de abordagens/debatemoderado/japao.png', name: 'Japão' },
    { elem: '.cro', flag: '/tipos de abordagens/debatemoderado/croacia.png', name: 'Croácia' },
    { elem: '.ale', flag: '/tipos de abordagens/debatemoderado/alemanha.png', name: 'Alemanha' },
    { elem: '.mac', flag: '/tipos de abordagens/debatemoderado/macedonia.png', name: 'Macedônia' },
    { elem: '.bos', flag: '/tipos de abordagens/debatemoderado/bosnia.png', name: 'Bósnia e Herzegovina' },
    { elem: '.turq', flag: '/tipos de abordagens/debatemoderado/turquia.png', name: 'Turquia' },
    { elem: '.gre', flag: '/tipos de abordagens/debatemoderado/grecia.png', name: 'Grécia' },
    { elem: '.otan', flag: '/tipos de abordagens/debatemoderado/otan.png', name: 'OTAN' }
];


const container = document.querySelector('.botoes');
const nome = document.querySelector('.nome');
const imagem = document.querySelector('.bandeira');
let running = false;
let draggingItem = null;

function moverCopiaPais(nomePais, bandeiraPath, nomeDisplay) {
    return function() {
        imagem.src = bandeiraPath;
        nome.textContent = nomeDisplay;
    };
}

function ExcluirCopiaPais(copiaPais) {
    if (copiaPais && copiaPais.parentNode) {
        copiaPais.parentNode.removeChild(copiaPais);
    }
}

function CopiarPais(pais) {
    const copiaPais = document.querySelector(pais.elem).cloneNode(true);
    container.appendChild(copiaPais);
    console.log('fui criado');
    copiaPais.style.marginRight = '40vh';
    copiaPais.addEventListener('dragstart', dragStart);
    copiaPais.addEventListener('dragover', dragOver);
    copiaPais.addEventListener('drop', drop);
    copiaPais.addEventListener('dragend', dragEnd);
    copiaPais.addEventListener('click', function() {
        moverCopiaPais(pais.name, pais.flag, pais.name)();
        ExcluirCopiaPais(copiaPais);
    });
    container.appendChild(copiaPais)
    copiaPais.draggable = true;
}

countries.forEach(pais => {
    const elements = document.querySelectorAll(pais.elem);
    elements.forEach(element => {
        element.addEventListener('click', function() {
            CopiarPais(pais);
            console.log('oi');
        });
    });
});

// Resto do seu código (drag and drop, timer, etc.)


function dragStart(e) {
    draggingItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function drop(e) {
    if (draggingItem !== this) {
        const container = this.parentNode;
        container.insertBefore(draggingItem, this.nextSibling);
    }
}

function dragEnd() {
    draggingItem = null;
}



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