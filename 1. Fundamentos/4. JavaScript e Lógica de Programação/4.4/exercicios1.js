// OBEJTOS E FOR/IN
console.log("")
//1
console.log("1-")
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem-vinda, ' + info.personagem + '!')  

console.log("")
//2
console.log("2-")
info['recorrente'] = 'Sim'
console.log(info)

console.log("")
//3
console.log("3-")
for(let key in info){
    console.log(key)
}

console.log("")
//4 ja declarei a variavel key no exercicio 3
console.log("4-")
for(key in info){
    console.log(info[key])
}

console.log("")
//5
console.log("5-")
info['personagem'] += ' & Tio Patinhas',
info['origem'] += ' & Christmas on Bear Mountain, Dells Four Color Comics #178',
info['nota'] += ' & O último MacPatinhas',
info['recorrente'] = 'Ambos'
console.log(info)

console.log("")
//6
console.log("6-")
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama: ' + leitor['livrosFavoritos'][0]['titulo']);

  console.log("")
  //7
  console.log("7-")
  leitor.livrosFavoritos.push(
    {    
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
autor: 'JK Rowling',
editor: 'Rocco',
    }
  )
  console.log(leitor.livrosFavoritos[1])

console.log("")
//8
console.log("8-")
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + ' livros favoritos.' + ' O que Laura mais gosta da lista de livros de ' + leitor.nome  + ' é ' + leitor['livrosFavoritos'][1]['titulo'] + '.')