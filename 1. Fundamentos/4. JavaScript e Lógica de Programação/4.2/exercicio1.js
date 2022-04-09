//Todos exercicios sao baseados no array numbers

//1-
console.log("1-")
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let valores = 0; valores < numbers.length; valores +=1){
console.log(numbers[valores]);
}

console.log("")
//2- Para ajudar na visualização mandar depurar
console.log("2-")
let soma = 0;
for (let i = 0; i < numbers.length; i +=1){
    soma += numbers[i];
 }
 console.log(soma);
 
 console.log("")
//3-
// ja declarei soma e i no exercicio 2
console.log("3-")
soma = 0;
for (i = 0; i < numbers.length; i +=1) {
        soma +=[i]; 
}
let ma = soma / numbers.length;
console.log(ma);

console.log("")
//4- 
// i ja foi declarado no exercicio 2
console.log("4-")
for (i=0; i < numbers.length; i+=1){
    if (numbers[i] > 20) {
        console.log (numbers[i] + ' é maior que 20')
    } else {
        console.log (numbers[i] + ' é menor ou igual a 20')
    }
}

console.log("")
//5- 
// i ja foi declarado no exercicio 2
console.log("5-")
let valor = 0;
for(i=0; i < numbers.length; i+=1){ 
    if(valor < numbers[i]){
        valor = numbers[i]  
    }
}
console.log('Esse é o maior valor: '+ valor);

console.log("")
//6-
// i ja foi declarado no exercicio 2
console.log("6-")
for(i=0; i < numbers.length; i+=1){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i] + ' esse é um número par!')
    } else {
        console.log(numbers[i] + ' esse é um número ímpar!')
    }
}

console.log("")
//7- 
// i ja foi declarado no exercicio 2
console.log("7-")
valor = numbers[0];
for(i=0; i < numbers.length; i++){
    if(valor > numbers[i]){
 valor = numbers[i];
    }
}
console.log ('Esse é o menor valor: '+ valor)