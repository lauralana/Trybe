// FUNCTION
//1
console.log("1-")
const str = 'arara';
//criar uma variavel para armazenar a string reversa
let strReversa = '';
// percorrer a str (for)
// O index começa da ulltima posição e vai até a primeira;
for (let i = str.length - 1; i >= 0; i -= 1) {
  // A cada iteração guardamos a letra na strReversa;
  strReversa = strReversa + str[i];
  console.log(strReversa);
}
if (strReversa.toLowerCase() == str.toLowerCase()) {
  console.log("É palíndromo!")
} else {
  console.log("Não é palíndromo!")
}

//OU 
console.log("OU")

function ehPalindromo(parametro) {
  let palavra = parametro;
  let palavraInvertida = palavra.split("").reverse().join("")

  if (palavra.toLowerCase() == palavraInvertida.toLowerCase()) {
    return "SIM! " + palavra + ' = ' + palavraInvertida + ", logo classifica-se como palíndromo."
  } else {
    return "NÃO! " + palavra + " é diferente " + palavraInvertida + " logo não é um palíndromo."
  }
}
console.log(ehPalindromo("socorram me em marrocos"))

console.log("")
console.log("                       " + "Função para os exercícios 2 e 3" + "                    ")

function arrayDeNumeros(xNumeros, numeroMaximo) {
  let array = [];
  for (i = 0; i < xNumeros; i += 1) {
    array.push(Math.floor(Math.random() * (numeroMaximo + 1)));
  }
  return array
}
//A função descrita imprimi 6 números aleatórios de 0 até 100 e será usada no exercício 2 e 3
//console.log(arrayDeNumeros(6,100));

//2
console.log("2-")

function indiceDoMaior(array) {
  let maiorNum = array[0]
  for (let n of array) {
    if (n > maiorNum) {
      maiorNum = n
    }
  }
  return "O array é: [" + array + "]. O maior número desse array é: " + maiorNum + ". E o indice dele é: " + array.indexOf(maiorNum) + "."
}
console.log(indiceDoMaior(arrayDeNumeros(6, 100)));

console.log("")
//3
console.log("3-")
function indiceDoMenor(array) {
  let menorNum = array[0]
  for (n of array) {
    if (n < menorNum) {
      menorNum = n
    }
  }
  return "O array é: [" + array + "]. O menor número desse array é: " + menorNum + ". E o indice dele é: " + array.indexOf(menorNum) + "."
}
console.log(indiceDoMenor(arrayDeNumeros(6, 100)));
