const countries = [
    { elem: document.querySelector('.mex'), flag: '/tipos de abordagens/debatemoderado/mexico.png', name: 'México' },
    { elem: document.querySelector('.arg'), flag: '/tipos de abordagens/debatemoderado/argentina.png', name: 'Argentina' },
    { elem: document.querySelector('.bol'), flag: '/tipos de abordagens/debatemoderado/bolivia.png', name: 'Bolívia' },
    { elem: document.querySelector('.col'), flag: '/tipos de abordagens/debatemoderado/colombia.png', name: 'Colômbia' },
    { elem: document.querySelector('.per'), flag: '/tipos de abordagens/debatemoderado/peru.png', name: 'Peru' },
    { elem: document.querySelector('.cub'), flag: '/tipos de abordagens/debatemoderado/cuba.png', name: 'Cuba' },
    { elem: document.querySelector('.br'), flag: '/tipos de abordagens/debatemoderado/brasil.png', name: 'Brasil' },
    { elem: document.querySelector('.eua'), flag: '/tipos de abordagens/debatemoderado/usa.png', name: 'Estados Unidos' },
    { elem: document.querySelector('.urg'), flag: '/tipos de abordagens/debatemoderado/uruguai.png', name: 'Uruguai' },
    { elem: document.querySelector('.els'), flag: '/tipos de abordagens/debatemoderado/elsalvador.png', name: 'El Salvador' },
    { elem: document.querySelector('.nic'), flag: '/tipos de abordagens/debatemoderado/nicaragua.png', name: 'Nicarágua' },
    { elem: document.querySelector('.ven'), flag: '/tipos de abordagens/debatemoderado/venezuela.png', name: 'Venezuela' },
    { elem: document.querySelector('.mex'), flag: '/tipos de abordagens/debatemoderado/mexico.png', name: 'México' },
    { elem: document.querySelector('.chi'), flag: '/tipos de abordagens/debatemoderado/chile.png', name: 'Chile' },
    { elem: document.querySelector('.hon'), flag: '/tipos de abordagens/debatemoderado/honduras.png', name: 'Honduras' },
    { elem: document.querySelector('.cos'), flag: '/tipos de abordagens/debatemoderado/costarica.png', name: 'Costa Rica' },
    { elem: document.querySelector('.sse'), flag: '/tipos de abordagens/debatemoderado/santase.png', name: 'Santa Sé' },
    { elem: document.querySelector('.can'), flag: '/tipos de abordagens/debatemoderado/canada.png', name: 'Canadá' }
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
    const copiaPais = pais.elem.cloneNode(true);
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
    copiaPais.draggable = true;
}

countries.forEach(pais => {
    pais.elem.addEventListener('click', function() {
        CopiarPais(pais);
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