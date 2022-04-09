//8- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log("8-")
lista = [];
for (let i=1; i <= 25; i+=1){
lista.push(i);
}
console.log(lista)

console.log("")

//9- Utilizando o array criado no exercicio 8 imprima o resultado da divisão de cada um dos elementos por 2.
console.log("9-")
for (let i=0; i < lista.length; i+=1){
console.table(lista[i] / 2);
}