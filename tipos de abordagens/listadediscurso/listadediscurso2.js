const countries = [
    { elem: document.querySelector('.eua'), flag: '/tipos de abordagens/debatemoderado/usa.png', name: 'Estados Unidos' },
    { elem: document.querySelector('.eng'), flag: '/tipos de abordagens/debatemoderado/eng.png', name: 'Reino Unido' },
    { elem: document.querySelector('.rus'), flag: '/tipos de abordagens/debatemoderado/russia.png', name: 'Rússia' },
    { elem: document.querySelector('.ch'), flag: '/tipos de abordagens/debatemoderado/china.png', name: 'China' },
    { elem: document.querySelector('.fra'), flag: '/tipos de abordagens/debatemoderado/frança.png', name: 'França' },
    { elem: document.querySelector('.sud'), flag: '/tipos de abordagens/debatemoderado/sudao.png', name: 'África do Sul' },
    { elem: document.querySelector('.br'), flag: '/tipos de abordagens/debatemoderado/brasil.png', name: 'Brasil' },
    { elem: document.querySelector('.eg'), flag: '/tipos de abordagens/debatemoderado/egito.png', name: 'Egito' },
    { elem: document.querySelector('.afs'), flag: '/tipos de abordagens/debatemoderado/africadosul.png', name: 'África do Sul' },
    { elem: document.querySelector('.jap'), flag: '', name: 'RSF' },
    { elem: document.querySelector('.eti'), flag: '/tipos de abordagens/debatemoderado/etiopia.png', name: 'Etiópia' },
    { elem: document.querySelector('.ale'), flag: '/tipos de abordagens/debatemoderado/alemanha.png', name: 'Alemanha' },
    { elem: document.querySelector('.irã'), flag: '/tipos de abordagens/debatemoderado/ira.png', name: 'Irã' },
    { elem: document.querySelector('.ind'), flag: '/tipos de abordagens/debatemoderado/india.png', name: 'Índia' },
    { elem: document.querySelector('.turq'), flag: '/tipos de abordagens/debatemoderado/turquia.png', name: 'Turquia' },
    { elem: document.querySelector('.isr'), flag: '/tipos de abordagens/debatemoderado/suldao2.png', name: 'Sudão do Sul' },
    { elem: document.querySelector('.ua'), flag: '/tipos de abordagens/debatemoderado/uniao-africana.png', name: 'União Africana' }
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