                                   // BONUS
//1- Ordenar de maneira crescente    
//             0  1  2   3   4  5   6   7   8   9
console.log("1-")
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
valor = 0;
    for(let posicao1=1; posicao1 < numbers.length; posicao1+=1){
        for(let posicao0=0; posicao0 < posicao1; posicao0+=1){
            if (numbers[posicao0] > numbers[posicao1]){
//Numero na posicao0 é MAIOR que o numero na posicao1 ?
//NAO! Entao volta pro for e analisa o proximo  
                let valor = numbers[posicao0];
//SIM! Então valor recebe o numero da posicao0  e 
                numbers[posicao0] = numbers[posicao1];
//Numero da posicao0 recebe numero da posicao1
                numbers[posicao1] = valor;
//Numero da posicao1 recebe valor 
            }
        }   
    }    
    console.log(numbers);  
console.log("")
// 2- Ordenar de maneira decrescente
//             0  1  2   3   4  5   6   7   8   9
console.log("2-")
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
valor = 0;
    for(let index1=1; index1 < numeros.length; index1+=1){
        for(let index0=0; index0 < index1; index0+=1){
            if (numeros[index0] < numeros[index1]){
                let valor = numeros[index1];
                numeros[index1] = numeros[index0];
                numeros[index0] = valor;

            }
        }   
    }    
    console.log(numeros); 
console.log("")
// 3- Multiplicar o numero anterior pelo seguinte, o ultimo valor deve ser multiplicado por 2
console.log("3-")
let numb = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lista = [];
    for(let i=0; i < numb.length; i+=1){
// Percorrer o array numb
        if (i == numb.length -1){
           lista.push(numb[i] * 2);
// Se for o ultimo numero do array numb, multiplique por dois
        } else{
            lista.push(numb[i]*numb[i+1]);  
// Se não, multiplique o elemento atual pelo próximo            
        }    
    }
    console.table(lista);