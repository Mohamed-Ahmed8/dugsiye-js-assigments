const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers.reduce((multiplier, number) => {
    return multiplier * number;
}, 1);
console.log(multipliedNumbers);