const body = document.body
const tagH1 = document.createElement('h1')
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(tagH1)
//document.createElement('div')
let elementMain = document.createElement('main')
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

let elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

let paragraph = document.createElement('p');
paragraph.innerHTML = '<strong>Texto Show</strong>';
elementSection.appendChild(paragraph);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
elementMain.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
elementMain.appendChild(rightSection);

let elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = `https://picsum.photos/200`;
leftSection.appendChild(elementImg);
let elementUl = document.createElement('ul');
rightSection.appendChild(elementUl);
let arrNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', "Oito", 'Nove', 'Dez']
for (let number in arrNumbers) {
    let elementLi = document.createElement('li');
    elementLi.innerHTML = arrNumbers(number);
    elementUl,appendChild(elementLi);
}

