const isDeath = false;
const isUser = true;
//if else
if(isDeath){
    console.log("dead");
}
else{
    console.log("alive");
}

// ?: Ternary Operation
// (condition)? <true>:<false> ; 

(isDeath) ? console.log("dead") : console.log("alive");
console.log(isDeath ? "dead":"alive");

(isDeath) 
? console.log("dead") 
: (isUser) 
? console.log("User")
:console.log("Not User") ;

//&& operator
if(isDeath && isUser){
    console.log(1);
}
else{
    console.log(2);
}

console.log((isDeath&&isUser) ? 1:2);
isDeath&&isUser&&console.log("Works");


// || or operator
if(isDeath || isUser){
    console.log(1);
}
else{
    console.log(2);
}


isDeath||isUser||console.log("Works");


let data = "Hello"||"World";
console.log(data);
let data1 = null ||"World";
console.log(data1);

// ?? nullish operator

let isNull;
console.log(isNull??"Null");

let isNull1 = "Value";
console.log(isNull1??"Null");

//comparision operator "=="
//checks value
let j = "10";
let k = 10;

console.log(j==k ? true:false);

//comparision operator "==="
//checks value and datatype

let l = "10";
let m = 10;

console.log(j===k ? true:false);

