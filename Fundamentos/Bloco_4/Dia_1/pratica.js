                                    //  1    ///
    // const sum = (a, b) => a + b;
    // console.log(sum(7, 7));

    // const sub = (a, b) => a - b;
    // console.log(sub(50, 25));

    // const mult = (a, b) => a * b;
    // console.log(mult(7, 4));

    // const div = (a, b) => a / b;
    // console.log(div(100, 50));

    // const mod = (a, b) => a % b;
    // console.log(60, 30);

    //          2        //
    // const bigger = (a, b) => a > b ? true : false;
    // console.log(bigger(30, 20));
    
    //           3                  ///
// const biggestOf3 = (a, b, c) => {
//     if (a > b && c) {
//         return a;
//     } else if (b > c) {
//         return b;
//     } else return c;
// }
// console.log(biggestOf3(4, 70, 6));

//                  4                       //

// const checker = (a) => a > 0 ? 'positive' : 'negative';
// console.log(checker(2));

//              5              // 

// const triangle = (a, b, c) => {
//     if (a+b+c === 180) {
//         return true;
//     } else if (a+b+c != 180) {
//         return false;
//     } else {return "não válido"}
    
// }
// console.log(triangle(-60, -60, -60));


//               6                   //
// const chess = (chessPiece) => {
//     switch (chessPiece.toLowerCase()) {
//         case 'rei':
//           console.log('Rei-> Uma casa apenas para qualquer direção.');
//           break;
//         case 'bispo':
//           console.log('Bispo-> Diagonal.');
//           break;
//         case 'rainha':
//           console.log('Rainha-> Diagonal, horizontal e vertical.');
//           break;
//         case 'cavalo':
//           console.log('Cavalo -> "L" pode pular sobre as peças.');
//           break;
//         case 'torre':
//           console.log('Torre -> Horizontal e vertical.');
//           break;
//         case 'peão':
//           console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//           break;
//         default:
//           console.log('Erro, peça inválida!');
//           break;
//       };
// }
// console.log(chess('TORRE'));

//              7                //

function rateConversor (grade) {
    if (grade < 0 || grade > 100) {
        console.log("Erro, nota incorreta!");
      } else if (grade >= 90) {
        console.log("A");
      } else if (grade >= 80) {
        console.log("B");
      } else if (grade >= 70) {
        console.log("C");
      } else if (grade >= 60) {
        console.log("D");
      } else if (grade >= 50) {
        console.log("E");
      } else {
        console.log("F");
      }
};
rateConversor(92);
console.log(rateConversor(40));