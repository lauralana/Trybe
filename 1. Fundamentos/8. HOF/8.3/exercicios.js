const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//1- Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames() {
  return books.map(
    (element) =>
      `O livro ${element.name} é do gênero ${element.genre} e foi escrito por ${element.author.name}.`
  );
}
console.log("1- ");
console.log(formatedBookNames());

//2- Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
function nameAndAge(arr) {
  let info = books.map((element) => ({
    author: element.author.name,
    age: element.releaseYear - element.author.birthYear,
  }));
  return info.sort((a, b) => a.age - b.age);
}
console.log("2- ");
console.log(nameAndAge());

//3- Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction() {
  return books.filter(
    (element) =>
      element.genre === "Ficção Científica" || element.genre === "Fantasia"
  );
}
console.log("3- ");
console.log(fantasyOrScienceFiction());

//4- Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
function oldBooksOrdered(year) {
  const sinceWasRelease = books.filter(
    (element) => year - element.releaseYear > 60
  );
  return sinceWasRelease.sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log("4- ");
console.log(oldBooksOrdered(2022));

//5- Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  const verifyAuthor = books.filter(
    (element) =>
      element.genre === "Ficção Científica" || element.genre === "Fantasia"
  );
  const authorName = verifyAuthor.map((element) => element.author.name);
  return authorName.sort();
}
console.log("5- ");
console.log(fantasyOrScienceFictionAuthors());

//6- Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks(year) {
  const over60years = books.filter(
    (element) => year - element.releaseYear > 60
  );
  return over60years.map((element2) => element2.name);
}
console.log("6- ");
console.log(oldBooks(2022));

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName() {
return threeDotsAuthor = books.find((elementBook) => elementBook.author.name.split('.').length === 4).name

}
console.log("7- ");
console.log(authorWith3DotsOnName())