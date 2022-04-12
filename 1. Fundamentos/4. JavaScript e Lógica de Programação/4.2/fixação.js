                            // 1- ARRAY []
console.log("1-")                            
//A) 
console.log("A)")                           
let menu = ['home', 'serviços', 'portfólio', 'links'];
let menuServicos = menu[1] ;
console.log('1A: ' + menuServicos)
         //OU
console.log('OU')         
menuServicos = menu[menu.length -3];
console.log('1A: ' + menuServicos)

console.log("")
//B)
console.log("B)")
let indexOfPortfolio = 2;
console.log('1B: ' + indexOfPortfolio);

console.log("")
//C)
console.log("C)")
menu.push('Contato');
console.log('1C: ' + menu);

console.log("")
                            //2- FOR
console.log("2-")
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index +=1){
    console.log('2: ' + groceryList[index]);
}
                 //OU
console.log('OU')  
groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let lista of groceryList){
    console.log ('2:' + lista);
}
console.log("")
                            //3- FOR OF
console.log("3-")
//A
console.log("A)")
let names = ['João', 'Maria','Antônio', 'Margarida'];
for (let pessoas of names) {
console.log ('3A: ' + pessoas);
}
console.log("")
//B)
console.log("B)")
let word = 'HELLO';
for (let letter of word) {
console.log ('3B: ' + letter);
}
console.log("")
//C)
console.log("C)")
let numbers = [1,2,3,5,8,13];
for (let fibo of numbers) {
fibo +=2;
console.log('3C: ' + fibo);
}

