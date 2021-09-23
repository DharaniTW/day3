 const obj = [
    {person : "Name 1", age :"2",company:"GUVI"},
    {person : "Name 2", age :"5",company:"GUVI geek"},
    {person : "Name 3", age :"8",company:"GUVI geek network"}
];

//for loop
for(let i = 0; i < obj.length; i++){
    console.log( obj[i]);
}

// for in loop
for(let i in obj){
    console.log(obj[i])
}

// for of loop
for (let value of obj) {
    console.log(value)
}

//forEach loop
obj.forEach((obj,index) => {
    console.log(obj,index);
});

