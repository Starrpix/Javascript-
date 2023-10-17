//Destructuring assignment

let planets = ["Sun","Moon","Earth"];
//let planet1 = planets[0];
//let planet2 = planets[1];

let [planet1,planet2] = ["Sun","Moon"];
console.log(planet1,planet2);

let [solar1,solar2,solar3] = [planets];
console.log(solar1,solar2,solar3);

//spread operator

const [body1,... rest] = ["Sun","Moon","Earth"];
console.log(body1);
console.log(rest);


let plants = ["Sunflower","Moonflower","Earthflower"];
let ferns = ["ferni","corni","secri"];

//combine two arrays using spread operator

let flora = ["Blossom",...plants,...ferns];
console.log(flora);

//or using concat function ??
//let flora = plants.concat(ferns);
//console.log(flora);

let [first,second] = flora;
console.log(first,second);


let rings = ["Diamond","Sapphire","Gold"];
const price = ["10000$","3000$","7000$"];

const budget= ["Ruby","Titanium",...rings,...price];
const [hold1,...future]=budget;
console.log(future);


// destructuring assignments in object

let student = {
    name:"ram",
    age: 20
}

console.log(student.name);

//but here...

const {name="Hari",age} = student;
//we can assign a name inside here if the object keys are empty
name;
age;

//giving alias or nickname 


let student1 = {
  //  forname:"Shyam",
    name:"shyam",
    agein: 21,
    location: {
        zipcode: 44207,
        lattitude: 1,
        longitude: 2
    }
}

// now only studentName would be shown
const {forname:studentName = //using in case no value 
"Sita",agein} = student1;
studentName;
agein;

//using spreading operator
const {forname,...otherdata} = student1;
console.log(otherdata);

//accessing data withing keys

console.log(student1.location.zipcode);

const {location:{zipcode}} = student1;
zipcode;


//assigning

//let a = {}
//Object.assign(a,student1);

//Instead of this , we use spreading operator

let a = {...student1,...student};

//student overrides name
a;
//see it does the job easily 🥳🥳🥳

//deep copy

let tea = {
    name:"Tokla",
    agein: 21,
    location: {
        zipcode: 44207,
        lattitude: 1,
        longitude: 2,
        details:{...student1}
    }
};



//const {location:{details:{location:{lattitude}}}} = tea;

let c = Object.assign({...student},tea);
c;

