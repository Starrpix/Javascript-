//sharing of value
const value ="VALUE";

//sharing of function
function add(a,b){
    return a+b;
}

//sharing of object
let student={
    name:"Arbin",
    age:32,
    location:{
        address: "bharatpur",
        zipcode: 44207
    }
};


 export default class Product{
    constructor (){}
    add(){
        console.log("product added");
    }
}


// named export

//export {value,add,student};

