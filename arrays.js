//arrays

let studentList = ["student","data",1,true,542n,null,{}];
console.log(studentList[0]);

for(let i=0 ; i<=6 ; i++){
    console.log(studentList[i]);
}

console.log(studentList);
console.log(typeof studentList);



//Inbuilt Array Functions

//lets use teacherList
let teacherList = new Array("teacher","data");
console.log(teacherList);

//push() (s)- self

teacherList.push("Principal","AI");
console.log(teacherList)

//removes the last element of an array pop() (s) - self
teacherList.pop();
console.log(teacherList);

//delete(teacherList[teacherList.length-1]);
//console.log(teacherList);

//places the given element in first position - unshift()
teacherList.unshift("Secretary","PA");
console.log(teacherList);

//removes first element from an array - shift()
teacherList.shift();
console.log(teacherList);


//joins my removing array - join() (N) - Not self
console.log(teacherList.join(" 😁 "));

//concat() (N) - Not self
console.log(teacherList.concat(studentList));

//reverse() (s) - Not self
console.log(teacherList.reverse());



//slice() (N)  - indexing 0,1,2,3.... 

console.log(teacherList.slice(0,4))

console.log(teacherList.slice(-3))

console.log(teacherList.fill("👻",1,3))


