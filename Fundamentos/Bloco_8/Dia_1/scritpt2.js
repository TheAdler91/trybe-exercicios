const Checker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);

    return callback(myNumber, number) ? 'YEAH' : 'Try Again!'
};

console.log(lotteryResult(5, Checker));