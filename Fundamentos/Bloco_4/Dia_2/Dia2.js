let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0 ;
let media = 0;
let contador = 0
for( let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
    contador = contador + index
    media = soma / 10;
    
}
console.log(media);
//
//
//*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for( let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > maiorValor ){
        maiorValor = numbers[index]
    }

}
console.log("O maior número é:", maiorValor)
//
//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 5;

for( let index = 0; index < numbers.length; index +=1){
    if (numbers[index] < menorValor ){
        menorValor = numbers[index]
    }

}