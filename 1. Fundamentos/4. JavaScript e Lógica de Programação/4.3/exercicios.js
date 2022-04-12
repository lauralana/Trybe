console.log("")
//1
console.log("1-")
let fatorial= 1;
for(i=1; i <= 10; i++){
   fatorial = fatorial * i;
}
console.log(fatorial);

console.log("")
//2
console.log("2-")
let word = 'laura';
let wordInvertida ='';
for(i=0; i < word.length; i++){
wordInvertida = wordInvertida + word[(word.length - 1) - i]  
}
console.log(wordInvertida);

console.log("")
//3
console.log("3-")
let numeros = ['java', 'javascript', 'python', 'html', 'css'];
let maior = numeros[0];
let menor = numeros[0];
for(i=0; i < numeros.length; i++){
   if(numeros[i].length > maior.length){
      maior = numeros[i];
   }else if(numeros[i].length < menor.length){
      menor = numeros[i];
   }
}
console.log(maior);
console.log(menor);

console.log("")
//4
console.log("4-")
