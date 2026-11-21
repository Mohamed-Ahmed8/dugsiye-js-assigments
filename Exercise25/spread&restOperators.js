const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); 

console.log("----------");

function multiply(...num){
  return num.reduce((totl, no)=> totl * no, 1);

}
console.log(multiply(1,2, 3, 4, 5)); 