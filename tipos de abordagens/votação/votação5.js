document.addEventListener('DOMContentLoaded', function() {
    var afavor = 0;
    var abster = 0;
    var contra = 0;
    var contador = 0;
  
    var bandeiras = ['/tipos de abordagens/debatemoderado/usa.png',
    '/tipos de abordagens/debatemoderado/eng.png',
    '/tipos de abordagens/debatemoderado/russia.png',
    '/tipos de abordagens/debatemoderado/china.png',
    '/tipos de abordagens/debatemoderado/frança.png',
    '/tipos de abordagens/debatemoderado/ucrania.png',
       '/tipos de abordagens/debatemoderado/canada.png',
    '/tipos de abordagens/debatemoderado/africa-do-sul.png',
    '/tipos de abordagens/debatemoderado/japao.png',
    '/tipos de abordagens/debatemoderado/bielorrussia.png',
    '/tipos de abordagens/debatemoderado/alemanha.png',
    '/tipos de abordagens/debatemoderado/ira.png',
    '/tipos de abordagens/debatemoderado/india.png',
    '/tipos de abordagens/debatemoderado/turquia.png',
    '/tipos de abordagens/debatemoderado/israel.png',
    '/tipos de abordagens/debatemoderado/polonia.png'];
    var contador = 0;
    var imagemBandeira = document.getElementById("bandeira");
    var botao1 = document.getElementById('botao1');
    var botao2 = document.getElementById('botao2');
    var botao3 = document.getElementById('botao3');
    var mensagem = document.getElementById('mensagem'); // Add an element for displaying the message
    var container = document.querySelector('.container'); // Get the container
    var votacaoEncerrada = false; // Track if the voting is finished
  
    botao1.addEventListener("click", function() {
      afavor = afavor + 1;
      console.log("A favor: " + afavor);
      atualizarBandeira();
    });
  
    botao2.addEventListener("click", function() {
      abster = abster + 1;
      console.log("Abster: " + abster);
      atualizarBandeira();
    });
  
    botao3.addEventListener("click", function() {
      contra = contra + 1;
      console.log("Contra: " + contra);
      atualizarBandeira();
    });
  
    function atualizarBandeira() {
      contador = (contador + 1) % bandeiras.length;
      imagemBandeira.src = bandeiras[contador];
      console.log("A favor: " + afavor + ", Abster: " + abster + ", Contra: " + contra);
  
      if (contador === 0 && votacaoEncerrada === false) {
        votacaoEncerrada = true;
        exibirResultado();
      }
    }
  
    function exibirResultado() {
      var totalVotos = afavor + abster + contra;
      mensagem.innerHTML= "Votação encerrada. <br> <br> a favor: " + afavor + "<br> Abster: " + abster + "<br>Contra: " + contra;
      container.style.display = "none"; // Hide the container
      mensagem.style.display = "block"; // Display the message
      mensagem.style.whiteSpace = "pre-line";
    }
  });
  