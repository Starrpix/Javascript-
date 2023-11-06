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

console.log(window);
//let response = window.confirm("Do you want to exit?");

//let vari = prompt("Your ip address",123);
//console.log(vari);

var apple = "Red";


//document.title = "Welcome to JS session";
//document.body.bgColor = "teal";

//document.getElementsByTagName("h1");

//document.getElementsByTagName("h1")[0].innerHTML = "Soluble";
const heading1 = document.getElementsByTagName("h1")[0];
//heading1.innerHTML = "Ramified";
//heading1.innerText = "ok <p> Red </p> People";
//shows tags as it is innerText

heading1.innerHTML = "ok <h3> Speak </h3>";
//executes tags


const paragraph1 = document.getElementById("para");
//paragraph1.innerHTML = "Sleep";
//Tag : getElementsByTagName
//Id : getElementsById
//Class : getElementsByClassName

//for class . and for id #
const v = document.querySelector(".heady > p");
console.log(v);

//v.style = "color:red";
v.title = "Hello Paragraph";
v.setAttribute("style","color:green");


//removing
const p = document.querySelector("#para");
//p.removeAttribute("style");



//adding new 
const i = document.querySelector("#para1");

const heading = document.createElement("h2");
heading.innerText = "inside paragraph";
i.append(heading);

//i.appendChild(heading);
//Takes Node


//const j = document.querySelector("#para2 > h1");
//j.style.backgroundColor = "blue";
// j.style.color = "white";


//to catch data

const div = document.getElementById("para2");
console.log(div.dataset);
//div.dataset.newData = "x";
// <div data-new-data="x">
//console.log(div.classList);

div.classList.add("Remove");