//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
return arrays.reduce((acc, element) => acc.concat(element))
}
console.log("1-");
console.log(flatten())
//-----------------------------------------------
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
 return books.reduce((acc, element) => `${acc} ${element.author.name},` , '')
}
console.log("2-");
console.log(reduceNames());


//3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
 return books.reduce((acc, element) => acc + (element.releaseYear - element.author.birthYear)/books.length , 0).toFixed(0)
}
console.log("3-");
console.log(averageAge()

)
//4- Encontre o livro com o maior nome.
function longestNamedBook() {
return books.reduce((acc, element) => {
  if(acc.length < element.name.length){
    acc = element.name;
  }
  return acc
})
}
console.log("4-");
console.log(longestNamedBook());


//5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, word) => {
    for(letter of word.toLowerCase()){
      if(letter === 'a'){
        acc += 1
      };
    }
    return acc
  }, 0)
}
console.log("5-");
console.log(containsA());


//6- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/* let media = [];
let nota = 0;

for(i = 0; i < grades.length; i += 1) {
  for(j of grades[i])
  {nota += j;}
  media.push({name: students[i], average: nota/(grades[i].length)
})
nota = 0;
}
console.log(media); */

function studentAverage() {
return grades.map((grade, i) => {
  return {name: students[i], average: grade.reduce((acc, element) => (acc + element))/grade.length}
})
}
console.log("6-");
console.log(studentAverage())
