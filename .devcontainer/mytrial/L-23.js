//Arrow functions and this keyword
const user = {
    username: "Vaishnavi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  ///this ka matlab hai current context ek scope me jitne variables hai unko access krne me help krta hai this keyword
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this);  //yaha par output {} aega kunki global ke andar koi context hi ni hai
// function chai(){
//     let username = "Sparsh"
//     console.log(this.username); ///is bar hamara output undefined aya hai ye this wala concept sirf objects ke case me hi kam krega
    
// }
// chai()

// const chai = () =>{      ///this is arrow function
//      let username = "Sparsh"
//       console.log(this.username); ///isko bhi nhi pata hai ki this me tune kya kia hai it will also print undefined

// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2

// }
// console.log(addTwo(2,4));
///THis was the basic arrow function

///IMPLICIT ARROW FUNCTION
//const addTwo = (num1,num2) =>  num1+num2
//const addTwo = (num1,num2) =>  (num1+num2)
//console.log(addTwo(2,3)); ///isme ham curly brackets aur return ko hata skte hai
//NOTE : jab curly brackets use kia tab returnn use kia jaega vrna round brackets use kro bas
//Difference between impilcit and explicit function is that in implicit we don't use return statement but in explicit we use return statement


//Now agar ab hmare pas ek object bhi hai to usko kaise use krenge in implicit declaration
const addTwo = (num1,num2) => ({username: "Vaishnavi"})  //without round bracketes hamare pas undefined aega answer
console.log(addTwo(3,4));

const myArray = [2,4,5,6,7,8]
myArray.forEach()





