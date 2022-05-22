const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//console.log(elementoOndeVoceEsta);

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
//console.log(primeiroFilhoDoFilho);

const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;


const textElement = elementoOndeVoceEsta.nextSibling;
textElement.style.background = 'Blue';

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;


const terceiroFilho2 = pai.lastElementChild.previousElementSibling;