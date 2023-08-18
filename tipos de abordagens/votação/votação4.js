document.addEventListener('DOMContentLoaded', function() {
    var afavor = 0;
    var abster = 0;
    var contra = 0;
    var contador = 0;
  
    var bandeiras = ['/tipos de abordagens/debatemoderado/argentina.png',
    '/tipos de abordagens/debatemoderado/bolivia.png',
    '/tipos de abordagens/debatemoderado/canada.png',
    '/tipos de abordagens/debatemoderado/colombia.png',
    '/tipos de abordagens/debatemoderado/peru.png',
    '/tipos de abordagens/debatemoderado/cuba.png',
    '/tipos de abordagens/debatemoderado/uruguai.png',
    '/tipos de abordagens/debatemoderado/nicaragua.png',
    '/tipos de abordagens/debatemoderado/elsalvador.png',
    '/tipos de abordagens/debatemoderado/venezuela.png',
    '/tipos de abordagens/debatemoderado/usa.png',
    '/tipos de abordagens/debatemoderado/mexico.png',
    '/tipos de abordagens/debatemoderado/chile.png',
    '/tipos de abordagens/debatemoderado/honduras.png',
    '/tipos de abordagens/debatemoderado/costarica.png',
    '/tipos de abordagens/debatemoderado/santase.png'];
    var contador = 0;
    var imagemBandeira = document.getElementById("bandeira");
    var botao1 = document.getElementById('botao1');
    var botao2 = document.getElementById('botao2');
    var botao3 = document.getElementById('botao3');
    var mensagem = document.getElementById('mensagem'); 
    var container = document.querySelector('.container'); 
    var votacaoEncerrada = false; 
  
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
  