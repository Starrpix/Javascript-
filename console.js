console.log(console);

console.log("12");
console.error("Red");

console.info("hello");

let ab= [
    {
        name:"Arbin",
        age:20
    },
    {
        name:"Watch",
        age:3
    }
];

console.table(ab);

console.group("For loop data");
for(let i=0;i<=10;i++){
    console.log(i);
}
console.groupEnd();

console.time("timer");
for(let x=0; x<=10; x++){
    console.log("y",x+1);
}
console.timeEnd("timer");