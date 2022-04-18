// BUSCANDO ELEMENTOS
let ordem = document.getElementsByTagName('section');
for (let i = 0; i < ordem.length; i += 1) {
    console.log(ordem[i])
}

//1
let elemento2 = document.getElementById("elementoOndeVoceEsta");

//2
let elemento0 = elemento2.parentElement;
elemento0.style.color = "#2D273D";

//3
let elemento3 = document.getElementById("primeiroFilhoDoFilho");
elemento3.innerText = "O SEGUNO FILHO é meu terceiro elemento";

//4
let elemento1 = elemento0.firstElementChild;

//5
elemento1 = elemento2.previousElementSibling;

//6
let elementoAtenção = elemento2.nextSibling;

//7
let elemento5 = elemento2.nextElementSibling;

//8
elemento5 = elemento0.lastElementChild.previousElementSibling;

// ----------------------------||-------------------------------------
// CRIANDO ELEMENTOS
//1
let elementoIrmao = document.createElement('section');
elementoIrmao.id = 'irmaoDoElemento2';
elemento2.appendChild(elementoIrmao);

//2
let elementoFilho = document.createElement('section');
elementoFilho.id = 'filhoDoElemento2';
elemento2.appendChild(elementoFilho);

//3
let primeiroFilhoDoFilho2 = document.createElement('section')
primeiroFilhoDoFilho2.id = 'filhoDoElemento3';
elemento3.appendChild(primeiroFilhoDoFilho2);

//4
elemento5 = primeiroFilhoDoFilho2.parentElement.parentElement.nextElementSibling;

// ----------------------------||-------------------------------------
// REMOVENDO ELEMENTOS
//1
for (let i = elemento0.childNodes.length -1; i >= 0 ; i -= 1) {
    let currentChildren = elemento0.childNodes[i];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
}
const elemento4 = document.getElementById('segundoEUltimoFilhoDoFilho');
elemento4.remove(); 
