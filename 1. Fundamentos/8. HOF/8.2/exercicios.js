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

//1- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(year) {
return books.find((element) => element.author.birthYear == year).author.name
}
console.log("1- " + authorBornIn1947(1947))


//2- Retorne o nome do livro de menor nome.
function smallerName() {
  let smallerNameBook = books[0].name;
  books.forEach((element) => {
    if(element.name.length < smallerNameBook.length){
      smallerNameBook = element.name
    }
  })
  return smallerNameBook;
}
console.log("2- " + smallerName());


//3- Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook(nletters) {
  return books.find((element) => element.name.length === nletters).name
  }
  console.log("3- " + getNamedBook(26));

//4- Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
} 
console.log("4- ")
console.log(booksOrderedByReleaseYearDesc());


//5- Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
 return books.every((element) => element.author.birthYear >= 1900 && element.author.birthYear <= 1999);
}
console.log("5- " + everyoneWasBornOnSecXX());


//6- Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
return books.some((element) => element.releaseYear >=1980 && element.releaseYear <=1989);
}
console.log("6- " + someBookWasReleaseOnThe80s())


//7- Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique(array) {
    return array.every(element => !array.some(el => el.author.birthYear === element.author.birthYear && el.author.name !== element.author.name)
    )
}
console.log("7- " + authorUnique(books))