/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


    /*Exercicio 1*/      
function changeParagraph(){
    let swapText = document.getElementsByTagName('p')[1];
    swapText.innerHTML = "Morano nas Zoropa otra veis"
}
    changeParagraph();

    /*Exercicio 2 */
function turnGreenBox(){
    let turnGreen = document.getElementsByClassName('main-content')[0];
    turnGreen.style.background = 'rgb(76,164,109)';
}    
    turnGreenBox();

    /* Exercicio 3 */

function turnRedBox(){
    let turnRed = document.getElementsByClassName('center-content')[0]
    turnRed.style.background = '#f2f0f7';

}   
    turnRedBox();

    /* Exercicio 4 */

function headerOne(){
    let fixText = document.getElementsByTagName('h1')[0];
    fixText.innerText = 'Exercício 5.1 - Java Script'; 
}
    headerOne();

    /* Exercicio 5 */

function UpperCase(){
    let capsLockOn = document.getElementsByTagName('p')[0];
    capsLockOn.innerHTML = capsLockOn.innerHTML.toUpperCase();
}    
    UpperCase();


function exibition(){
    let tagsP = document.getElementsByTagName('p');
    for (let index = 0; index < tagsP.length; index += 1) {
        console.log(tagsP[index].innerHTML)
    }
}
    exibition();