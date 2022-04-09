                             //EXERCICIOS  
//1-
console.log("1-")
const a = 10;
console.log('Primeiro valor: '+ (a));
const b = 2;
console.log('Segundo valor: '+ (b));

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

console.log("")

//2-
console.log("2-")
const A = 20;
console.log('Primeiro valor: '+ (A));
const B = 4;
console.log('Segundo valor: '+ (B));
if(A < B){
    console.log('Primeiro valor é MENOR que o segundo valor');
} else {
    console.log('Primeiro valor é MAIOR que o segundo valor');
}

console.log("")

//3-
console.log("3-")
const Aa = 30;
    console.log('Valor de Aa: '+ (Aa));
const Bb = 6;
    console.log('Valor de Bb: '+ (Bb));
const Cc = 11;
    console.log('Valor de Cc: '+ (Cc));    
if(Aa > Bb && Aa > Cc){
     console.log('O valor de A é o maior');
} else if(Bb > Aa && Bb > Cc){
     console.log('O valor de B é o maior');
} else{
    console.log('O valor de C é o maior');
}

console.log("")

//4- 
console.log("4-")
const valor = -10;
if (valor < 0){
    console.log('O valor é NEGATIVO');
} else if(valor > 0){
    console.log('O valor é POSITIVO');
} else {
    console.log('O valor é ZERO');
}

console.log("")

// 5- 
console.log("5-")
const angulo1 = -45;
const angulo2 = 180;
const angulo3 = 90;
console.log('A soma dos angulos internos de um triangulo é sempre: 180');

if(angulo1 + angulo2 > angulo3 && angulo2 + angulo3 > angulo1 && angulo3 + angulo1 > angulo2 || angulo1 + angulo2 + angulo3 === 180) {
    console.log('TRUE');
} else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log('Erro: nenhum angulo pode ser menor que zero')
} else {
    console.log('FALSE');
}

console.log("")

//6 
console.log("6-")
const chessPiece = 'Torre' ;
switch (chessPiece.toLowerCase()){
    case "rei":
      console.log("Qualquer direção.Porém apenas uma casa.");
      break;
    case "rainha":
        console.log("Move na diagonal, horizontal e vertical. Quantas casas desejar.");
        break;
    case "bispo":
        console.log("Move na diagonal. Quantas casas desejar.");
        break;
    case "cavalo":
        console.log("Move em forma de L. Pode pular peças.");
        break;
    case "torre":
        console.log("Move na horizontal ou vertical. Quantas casas desejar.");
        break;
    case "peão":
        console.log("Move apenas uma casa para frente, o primeiro movimento podem ser duas casas.Derruba as peças do adversario pela diagonal.");
        break;
    default:
        console.log("Erro! Peça inválida!")  
        break;               
}

console.log("")

//7
console.log("7-")
const nota = 70;
switch (true){
    case nota>=90 :
        console.log('Nota A');
    break;
    case nota>=80 && nota<90:
        console.log('Nota B');
    break;
    case nota>=70 && nota<80:
        console.log('Nota C');
    break;
    case nota>=60 && nota<70:
        console.log('Nota D');
    break;
    case nota>=50 && nota<60:
        console.log('Nota E');
    break;
    case nota<50 && nota>0:
        console.log('Nota F');
    break;
    case nota<0 || nota>100:
        console.log('ERRO!');
    break;
}
// OU
console.log("OU")
if(nota<0 || nota>100){
console.log('ERRO!');
}else  if(nota>=90){
    console.log('Nota A');
} else if(nota>=80){
    console.log('Nota B')
} else if(nota>=70){
    console.log('Nota C')
} else if(nota>=60){
    console.log('Nota D');
}else if(nota>=50){
    console.log('Nota E');
}else {
    console.log('Nota F');
}

console.log("")  

//8
console.log("8-")
const n1 =1;
const n2 =1;
const n3 =1;
if(n3%2==0 || n2%2==0 || n1%2==0){
    console.log("TRUE");
} else {
    console.log("Não apresenta números pares.")
}

console.log("")

//9
console.log("9-")
const x=2;
const y=8;
const z=1;
if(x%2==0 && y%2==0 && z%2==0){
    console.log("Todos valores são pares");
} else {
    console.log("TRUE")
}
//OU
console.log("OU"); 

let impar = false;
if ((x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0)) {
  impar = true;
}
console.log(impar);

console.log("")

//10
console.log("10-")
const custoDoProduto = 2;
const valorDeVenda = 10;
const lucro = ([(valorDeVenda) - (custoDoProduto * 1.2)] * 1000);
console.log('Custo do produto: ' + custoDoProduto)
console.log('Custo de Venda: ' + valorDeVenda)
if(valorDeVenda <= 0 && custoDoProduto <=0){
    console.log ("ERRO!")
} else {
    console.log("O lucro obtido é de " + lucro);
}

console.log("")

//11
console.log("11-")

const salarioBruto = 3000;
console.log ('O salario bruto informado é de: R$' + salarioBruto)
var INSS;
var IR;
if (salarioBruto <= 1556.94){
   INSS = salarioBruto * 0.08;
    console.log('O valor do INSS a ser descontado do salario bruto é: R$'+INSS.toFixed(2) );
}else if(salarioBruto <= 2594.92){
    INSS = salarioBruto * 0.09;
    console.log('O valor do INSS a ser descontado do salario bruto é: R$'+INSS.toFixed(2));
}else if(salarioBruto <= 5189.82){
    INSS = salarioBruto * 0.11;
    console.log('O valor do INSS a ser descontado do salario bruto é: R$'+INSS.toFixed(2));
}else {
    INSS = 570.88
    console.log( 'O valor do INSS a ser descontado do salario bruto é: R$570,88');
}

var novoSalario = salarioBruto - INSS;
console.log('R$' + novoSalario.toFixed(2) + ' esse é o valor do salário sem desconto do Imposto de Renda');

if (novoSalario <= 1903.98){
    IR =  0;
    console.log('Você está isento do pagamento de Imposto de Renda.');  
} else if(novoSalario <=2826.65){
    IR = ((novoSalario * 0.075) - 142.80);
    console.log('O valor do IR a ser descontado é: R$'+ IR.toFixed(2));
}else if(novoSalario <=3751.05){
    IR = ((novoSalario * 0.15) - 354.80);
    console.log('O valor do IR a ser descontado é: R$'+ IR.toFixed(2));
}else if(novoSalario <=4664.68){
    IR = ((novoSalario * 0.225) - 636.13);
    console.log('O valor do IR a ser descontado é: R$'+ IR.toFixed(2));
}else {
    IR = ((novoSalario * 0.275) - 869.36);
    console.log('O valor do IR a ser descontado é: R$'+ IR.toFixed(2));}
    
    let valorFinal = (novoSalario - IR);
    console.log('O salário líquido a ser recebido é de: R$' + valorFinal.toFixed(2)); 