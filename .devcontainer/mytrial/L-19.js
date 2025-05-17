////Function in Javascipt


function sayMyName(){  ////function declaration
    console.log("H");
console.log("I");
console.log("T");      ///function definition
console.log("E");
console.log("S");
console.log("H");

}
// sayMyName()
// sayMyName()         /////function calling

// function addTwoNumbers(num1,num2){   ////JAVASCRIPT ME variables ka type dene ki jarurat ni hoti
//     console.log(num1+num2);
    
// }
// addTwoNumbers(2,"4") 
//  addTwoNumbers(4,3)
//  addTwoNumbers("4","8")//NaN matlab hamne isme values pass ni karaye
//  addTwoNumbers(4,null)

////PARAMETERS V/S ARGUMENTS
// PARAMETERS: jab ham function ki definition me jo variables pass karate hai
// ARGUMENTS: jab ham functionn calling ke time jo values pass karate hai

// const result = addTwoNumbers(2,7)
// console.log("Result: ",result);

function addTwoNumbers(num1,num2){   ////JAVASCRIPT ME variables ka type dene ki jarurat ni hoti
    // let result = num1+num2
    // return result
    return num1+num2
    
}
const result = addTwoNumbers(2,7)
//console.log("Result: ",result);
/////NOTE: sun meri bat ab jab hamare function me already hamne console log bana rkha hai aur jab final me ham usko log krte hai to we do not get our desired result we get undefined as our result but jab ham apne function me return type ka part likhte hai aur fir print karate hai to we get our required value

function loginUserMessage(username){
    if(username === undefined){   ////!username 
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`

}
///undefined aur " " ko man lia jata hai ki vo false value hai

//console.log(loginUserMessage("Sparsh")); ///output: Sparsh just logged in
//console.log(loginUserMessage()); //output: undefined just logged in
///jab ham kuch bhi pass nhi karate to undefined ata hai answer me

//if we have passed username = "Sam" in function definition only then we never get undefined as an answer we get that value as an answer even when our code in not executed



 

