 const bikeArray = [
    {name:'Hero Honda'},
    {name:"KTM"},
    {name:"Bajaj"}
];
//for loop
for(let i = 0; i < bikeArray.length; i++){
    console.log(`${i} Bikename:`, bikeArray[i]);
}
//forEach (for array of object)
bikeArray.forEach((bike,index)=>{
    console.log(`${index} Bikename:`, bikeArray[index]);
})

//forof (for string)
const str="Javascripts"
for(const letter of str){
    console.log(letter)
}
//for in (for array)
const num=[1,2,3];
for (i in num){
    console.log(num[i]);
}