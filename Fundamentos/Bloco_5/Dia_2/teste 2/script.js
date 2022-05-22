
let irmaoVoceEsta = document.createElement('section');
irmaoVoceEsta.id = 'irmaoVoceEsta';
pai.appendChild(irmaoVoceEsta)
//console.log(irmaoVoceEsta)


let voceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDoPadeiro =document.createElement('div');
filhoDoPadeiro.id = 'chamander';
voceEsta.appendChild(filhoDoPadeiro);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
let quartaGeracao = document.createElement('div');
quartaGeracao.id = 'pokemon';
primeiroFilhoDoFilho.appendChild(quartaGeracao);

let terceiroFilho = quartaGeracao
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);

let pai = document.querySelector('#pai');
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  }
  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    irmaoVoceEsta.remove();