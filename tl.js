//template literals

let firstName = "Arbin";
let lastName = "Chhatkuli";

console.log(firstName+"\" "+lastName);

// This is concatenation

// Now using template literals

// `${firstName} ${lastName}`
//multi line string using template literal 
console.log(`${firstName.toLowerCase()}" ${lastName}



Hello
`);

console.log(`${1+1}`);

//easily hookup and expression
function ok(){
    return "ok";
}

console.log(`${ok()}`);


//Typecasting


let num1 = "10"; // string
let num2 = "20"; // string

//if added it will be concatenated in js

let sum = parseInt(num1) + parseInt(num2);
// let sum = +(num1) + +(num2); shortcut
console.log(sum);

//Nested Template Literal


const fName = "John";
const lName = "Doe";
const age = 30;


const greeting = `Hello, ${fName} ${lName}!
You are ${age} years old.
Your full name in uppercase is ${`${fName} ${lName}`.toUpperCase()}`;
console.log(greeting);

// `${name} ${lname} ${age} ${`{name} `{lname}.toUpperCase()}`


//Tagged Template Literals

//tag`${literal}`
//mainly to delete data and manipulate and show other

const xName = "John";
const yName = "Doe";
const zage = 30;



let data = js`The data is of ${xName} and surname ${yName}`;
function js(string,exp1,exp2){
    console.log(string);
    console.log(exp1);
    console.log(exp2);


    return exp1+exp2;
}