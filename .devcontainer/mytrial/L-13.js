// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreated = new Date("2023-01-14")
// let myCreated = new Date("01-14-2023")//in india we follow this type
// //console.log(myCreated.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
// console.log(myTimeStamp);
// console.log(myCreated.getTime());
// // in miliseconds
// console.log(myCreated.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //bcoz here counting starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})







