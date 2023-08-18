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
    '/tipos de abordagens/debatemoderado/sudao.png',
    '/tipos de abordagens/debatemoderado/suldao2.png',
    '/tipos de abordagens/debatemoderado/egito.png',
    '/tipos de abordagens/debatemoderado/africa-do-sul.png',
    '/tipos de abordagens/debatemoderado/japao.png',
    '/tipos de abordagens/debatemoderado/etiopia.png',
    '/tipos de abordagens/debatemoderado/alemanha.png',
    '/tipos de abordagens/debatemoderado/ira.png',
    '/tipos de abordagens/debatemoderado/india.png',
    '/tipos de abordagens/debatemoderado/turquia.png',
    '/tipos de abordagens/debatemoderado/israel.png',
    '/tipos de abordagens/debatemoderado/uniao-africana.png'];
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
      container.style.display = "none";
      mensagem.style.display = "block";
      mensagem.style.whiteSpace = "pre-line";
    }
  });
  