const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers){
        return 1;
    } if (studentAnswers === "N.A"){
        return 0;
    } 
    return 0.5;
}

const score = (rightAnswers, studentAnswers, callback) => {
    let finalScore = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const callBackReturn = callback(rightAnswers[index], studentAnswers[index]);
        finalScore += callBackReturn;
      }
      return `Final Result: ${finalScore} points`;
};

console.log(score(rightAnswers, studentAnswers, check));