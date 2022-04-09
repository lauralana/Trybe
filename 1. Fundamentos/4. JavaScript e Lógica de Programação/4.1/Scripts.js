
// ---------------------------------------------------||-----------------------------------------------------
                                    // 1- Variaveis
console.log("1- Variáveis"); 

const myName = "Laura";
const birthCity = "Belo Horizonte";
let birthYear = 1997;
console.log(myName);
console.log(birthCity);
console.log(birthYear);

console.log("")
                          // 2- Tipos primitivos, tipage dinâmica e operação artmética
console.log("2- Tipos primitivos, tipage dinâmica e operação artmética");                          
const base = 5;
let height = 8;
const area = base * height;
console.log(base);
console.log(height);
console.log(area);

const perimeter = base + base + height + height
console.log(perimeter)

console.log("")
                                // 3- Condições IF e ELSE
console.log("3- Condições IF e ELSE")
 const grade =  91;
 if(grade >= 80){
    console.log("Parabéns, você foi aprovada(o)!")     
 } else if(grade < 80 && grade >=60){
    console.log("Você está na nossa lista de espera")
 } else { 
    console.log("Você foi reprovada(o)")     
 }

console.log("")
                                // 4- Operadores Lógicos
console.log("4- Operadores Lógicos")
// && (E)
console.log("A) && (e)")
const currentHour= 18;
let message = "";
if (currentHour >= 22) {
message = "Não deveríamos comer nada, é hora de dormir";
} else if(currentHour >=18 && currentHour <22){
message = "Rango da noite, vamos jantar :D";
} else if(currentHour >=14 && currentHour <18){
message = "Vamos fazer um bolo pro café da tarde?";
} else if(currentHour >=11 && currentHour <14){
message = "Hora do almoço!!!";
} else {
message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

console.log("")
// || (OR)
console.log("B) || (ou)")
let weekDay = "quinta"
if (weekDay === "segunda" || weekDay === "terça" || weekDay === "quarta" || weekDay === "quinta"|| weekDay === "sexta") {
console.log("Oba, mais um dia de aprendizado na Trybe! #VQV");
} else {
console.log("FINALMENTE, descanso merecido!");       
}

console.log("")

                                        // 5- Switch e Case
console.log("5- Switch e Case")                                        
let status= "lista";
switch(status){
case "aprovada":
        console.log("Parabéns pela aprovação!");
break;
case "lista":
        console.log("Você está na lista de espera. Vamos pensar positivo, você ainda pode conseguir!");   
break;
case "reprovado": 
        console.log("Infelizmente não foi dessa vez, mas não desista!");            
break;
default:
        console.log("Essa informação não existe!"); 
}

/* ------------------------------------------------||--------------------------------------------------

                                ANOTAÇÃO DA AULA AO VIVO DIA 06-04

Tipos primitivos
let cohort = 22; // number
let company = 'Trybe'; // string

console.log(cohort);
console.log ('Empresa:',company);

// JS tem uma tipagem fraca
cohort = 23;
console.log(cohort);
cohort = 'Turma22';
// A variavel inicial édo tipo number e dps mudamos para o tipo string, no JS não dá tanto problema, mas em outros sistemas sim.

console.log(company + cohort);
// Sinal de + combina do texto. Por isso se escrevermos '1' + 1 = 11

// 0 é diferente de null
// === Compara se tem, mesmo valor e se é do mesmo tipo ex: 1 === 1.0 TRUE ; '1' === 1 FALSE
// == Compara apenas valores
// = Atribuição

let number1 = 23;
let number2 = 45;

if(number1 < number2){
    console.log('number1 é menor que number2');
} else if (number1 > number2) {
console.log('number1 não é maior que number2');
}  else{
    console.log ('number1 é igual a number2')
}


let weekDay = 3;

switch (weekDay) {
case 1:
    console.log('Domingo');
    break;
case 2:
    console.log('Segunda');
    break;
case 3:
    console.log('Terça');
    break;
case 4:
    console.log('Quarta');
    break;
case 5:
    console.log('Quinta');
    break;
case 6:
    console.log('Sexta');
    break;
case 7:
    console.log('Sábado');
    break;
default:
    console.log('Ainda não existe esse dia')
}


--------------------------------------------||-------------------------------------------------------- */

/* Tipo de operadores: number, string (texto), boolean (true or false), undefined (o programador não especificou o conteudo) e null (pode ser redefinida) 
O comando - typeof - informa o tipo de operador usado
let movie = "Avengers"; // string
let score = 10.98; // number
let isValid = true; // boolean
let name; // undefined
let color = null; // redefinição  */

/* ------------------------------------ANOTAÇÃO--------------------------------------------------
! (NOT)
Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .
Strings...
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
Números...
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
Valores nulos...
console.log(!null); // true
Valores indefinidos..
console.log(!undefined); // true
---------------------------------------------X--------------------------------------------------------
   */