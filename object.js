
//object

let book ={
    name: "Three Body Problem",
    author: "Liu Cixin",
    price: 2000,
    read(){
        return this.name+this.description();
    },
    description: function (){
        return ` a book that has won Hugo Award was written by ${this.author}`; // using template literal
    },
    //nested objects
    place:{
        //even more nesting of object
        address:{
            street: "Z Street",
            zipcode: 44207
        },
        special: "Books"
    }
};
console.log(book.author);
console.log(book.description());
console.log(book.name);

//alternate acess

console.log(book["name"]);
console.log(book["description"]());

//Wrapper object

let b = new Object ({
    name: "wrapper",
    behaviour: "good"
});

//Modify

book.name = "Dark Forest";
console.log(book.name);

book.authorAge = 12;
book.others = function(){
    return "others";
}
console.log(book);
//delete book.read;

console.log(book.description());
console.log(book.read());

console.log(book.place.address)

console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));


//Copy to another object

let a = {
    name:"Will be replaced",
    authorAge: 39
};

//d take the value from a
let d=Object.assign(a,book);
console.log(a);

console.log(d);


//In Js, the weird part is, we can define the object as constant and change its properties. The object declared as constant signifies that the object itself cannot be assigned to new value, whereas, its properties can be modified.
const dog = {
    actions: "eats",
    color: "brown",
    age: 9
}

dog.actions = "read";
// We can change this in constant

//but.......

//dog = book; //Assignment to constant variable isn't possible
"use strict";
//shallow freeze
const hog = Object.freeze({
    process: {
        acts:"eat",
        plays:"dream"
    },
    color: "brown",
    age: 9
});



hog.process.acts = "red";
hog.color ="red";

console.log(hog.color); // top property didn't change
console.log(hog.process.acts); // branch property changed 


//refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }

  deepFreeze(hog);


  hog.process.acts = "blue";
  console.log(hog.process.acts);

  //Now even the nested objects have been frozen {deep freeze}
  // check if frozen
  console.log(Object.isFrozen(hog));