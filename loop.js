//for

for (let i=0 ; i<5 ; i++){
    console.log("Cat");
}

//while

//let i=0;
//while(i < 3){
//console.log("Dog");
//i++;
//}

// do while
//let i=0;
//do {
   // console.log("Rabbit");
    //i++;
//}
//while(i<5);

const cities = ["Tokyo","Istanbul","Kazakh"];
//for (let i=0 ; i<3 ; i++){
//    console.log(cities[i]);
//}

//for each

cities.forEach(function (value,index){
    console.log(value,index);
})

// for of loop (Array , String loop)

const studentList = ["Arbin","Aryana"];

for (let student of studentList){
    console.log(student);
}

let channel = "Discord";

for (let c of channel){
    console.log(c);
}

// for in loop ( array index value , object key value)

const city = ["Sydney","Kathmandu","Tehran","Tel Aviv"];

for (let c in city){
    console.log(c);
}

const teachers = {
    name: "Hari Prasad",
    age: 20,
    address: {
        location:"20 Becker Street",
        lattitude: 2,
        longitude: 1
    }
}



for (const key in teachers){

  
    console.log(key);
    let value = teachers[key];
    console.log(value);

    if(typeof value === "object"){
        for(const k in value){
            console.log(value[k]);

        }
    }
        else{
            console.log(value);
        }
    }

    // I wanted to further explore for in loop so I added a level of difficulty in it.

    const security = {
        departments: {
            land : "army",
            air : "airforce",
            sea : "navy",
            intelligence : "CIA",
            sub: {
                cybersecurity : "Anonymous",
                spy: "MOFAD"
            }
        },
        location: {
            lattitude: 1,
            longitude: 2,
            zipcode: 44200
        },
        project:"ultra"
    }


    for(let s in security){
        console.log(s);
        val = security[s];
        if(typeof val === "object"){
            for(let k in val){
                hold = val[k];
                if(typeof hold === "object"){
                    for(let x in hold){
                        console.log(x);
                    }
                }
                else{
                    console.log(k);
                }
            }
        }
        else{
            console.log(s);
        }
    }

//console.log(Object.keys(studentList));
//console.log(Object.entries(teachers));
