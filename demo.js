// Learnt from Everyday Karma 1 Month JS

console.log("Hey")
console.warn("THis is warning message")
console.error("fetching failed")
console.log(window);
console.log(document);
console.log(window.innerHeight);
console.log(window.document);
console.log(window.screen.height);
console.log(screen.height);
document.write("Hello");

const price = 10;
console.log(price);

 
var myprice = 100;
console.log(myprice);

myprice = 120;
console.log(myprice);

let b = "hello";
console.log(typeof(b));

let a = new String("Hello");
console.log(a);
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.charAt(1));
//wrapper object

//concatenate using object itself
let c = new String("Arbin");
console.log(c.concat("Chhatkuli"));
console.log(typeof(a));

var i=10;
console.log(i);



for (let i=0; i<5 ; i++){
console.log(i);
}

var i =5;

function abc(){
    console.log('I love pancreas'+i);
}

abc();


let d = 10;
console.log(typeof(d));

let e = new Number(14353425324352312432);
console.log(e); // limitation in number
console.log(e.toPrecision());
console.log(typeof(e));
//console.log(e.)

let f = BigInt(241242313213123);
console.log(f);
console.log(typeof(f));


//boolean
let isValid = true;
let g = new Boolean(true);
console.log(typeof(g));
console.log(typeof(isValid));


let h;
console.log(typeof(h));


let j = null;
console.log(typeof(j));

//symbil
const symb1 = Symbol();
const symb2 = Symbol("foo");
const symb3 = Symbol("foo");

if(symb2 === symb3){
    console.log("True");
}
else{ 
    console.log("False");
}

//objects

let student = {
name: "Arbin",
age: 12,
class: 13
}

console.log(typeof(student));

//using symbol to prevent overriding

let animal = {
    name: "Dog",
    age: 5,
    name: "Cat",//Symbol() 
}

console.log(animal.age);