                                        // OBJETOS
//1
console.log('1-')
let player = {
    name:'Marta',
    lastName:'Silva',
    age:34,
    medals:{ golden: 2, silver: 3 }, 
    //medals é um objeto dentro de do objeto player 
};
console.log(player)

console.log("");
//2
console.log("2-");
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.' );

console.log("");
//3
console.log("3-");
player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

console.log("");
//4
console.log("4-");
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log("");
//5
console.log("5-");
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro ' + player.medals.silver + ' medalhas de prata.')

                                    // FOR IN & FOR OF
// FOR OF é usado apenas para arrays        

console.log("");   
//1
console.log("1-");    
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let key in names){ 
    console.log('Olá, ' + names[key])
}


console.log("");
//2-
console.log("2-");
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
for (let key in car)  {
    console.log(key,car[key])
}
                               
  