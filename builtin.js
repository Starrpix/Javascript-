console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));
console.log(Math.abs(-1000));
console.log(Math.pow(3,2));
console.log(Math.random()*10) // 0<10
console.log(Math.floor(1.1));
console.log(Math.ceil(2.3));
console.log(Math.floor(Math.random()*10))

//Math.max(1n,2n); // Can't convert a Bigint


//Dates
console.log(Date());

// Wrapper Object

console.log(new Date().getFullYear());
console.log(new Date().getMonth()); // Jan : 0 , Feb : 1 .....
console.log(new Date().getDate());

console.log(new Date().toISOString().split("T"));

let d1 = new Date();
let d2 = new Date();

d1.setFullYear(2023);
console.log(d1);

d2.setFullYear(2000);
console.log(d2);

d3 = d1.getFullYear()+d2.getFullYear();
d3;


let personDate = new Date();
personDate.setFullYear(1999);

const age = d1.getFullYear() - personDate.getFullYear();
age;
