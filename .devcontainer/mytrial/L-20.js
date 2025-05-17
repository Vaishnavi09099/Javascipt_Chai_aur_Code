function calculateCartPrice(val1,val2,...num1){
    return num1
}
////ye ... ko hi rest aur spread operator bola jata hai used for paassing the multiple values 
//console.log(calculateCartPrice(200,400,500,100,700));
const user = {
    username: "Vaishnavi",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user);
handleObject(user);
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,300,400,600]
function returnSecondValue(getArray){
    return getArray[2];
}
//console.log(returnSecondValue(myNewArray));
//or you can pass the array directly
console.log(returnSecondValue([100,200,300,400]));

