const word = "abacaxi";
const wordArray = word.split("");
let letrasChutadas = [];
let vidas = 6;
let palavra = Array(word.length).fill("_");

class Forca {
  chutar(letra) {
    if (letrasChutadas.includes(letra) || letra.length > 1) {
      return;
    }

    letrasChutadas.push(letra);

    if (wordArray.includes(letra)) {
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] == letra) {
          palavra[i] = letra;
        }
      }
    } else {
      vidas -= 1;
    }
  }

  buscarEstado() {
    if (vidas == 0) {
      return "perdeu";
    }
    if (palavra.includes("_") == false) {
      return "ganhou";
    }
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
