 const people = [
    { name: "Ali", age: 25, city: "Marko"},
    { name: "Ahmed", age: 30, city: "Bosaaso"},
    { name: "Hassan", age: 35, city: "Hargeysa"}
 ]
 console.log("Properties and values of each person in the array:");
 for(let person of people){
    for(let key in person){
        console.log(key + ": " + person[key]);
    }
    console.log("-----");
 }