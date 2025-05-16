//NOTE-1: dekh sabse pehle to ye bat hai ki objects ko banane ke 2 tarike hai  LITERALS and CONSTRUCTORS  and ham jab bhi constructor se banega tab singleton banega literals se singleton ni banta 

//object literals
//There is no difference in both the types the only difference is in the singleton
//Object.create      THIS IS CONSTRUCTOR METHOD AND ISI ME SINGLETON BANTA HAI ISKE BARE ME BAD ME BAT KRENGE
//NOTE-3: Objects ke andar keys aur values ka chakkar hota hai unlike arrays jisme vo sirf unke index ke acc access hote hai
const mySym = Symbol("key1")
const JsUser = {
    name: "Vaishnavi",
    age: 18,
    location:"Jaipur",
    [mySym]: "mykey1",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogInDays : ["Monday", "Saturday"],
    "full name": "Vaishnavi Rajawat"
}
//NOTE-4: See there are 2 ways of accessing object elements   keys are treated as stings so be aware
//console.log(JsUser.email);
//console.log(JsUser["name"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);
///it is being treated as string not as symbol we have to use it as a symbol,then we have to write it in a square bracket


JsUser.email = "Vaishnavi.2428cse202@gmail.com"
//console.log(JsUser.email);

///we can change the values in an object just by overwriting them with the help of equalto sign
//Object.freeze(JsUser)
JsUser.email = "Vaishnavi.202@gmail.com"
//console.log(JsUser.email);
//console.log(JsUser);


////ye freeze option use krne k bad hamare object me koi bhi changes propogate ni honge
JsUser.greeting = function(){
    console.log("Hello JS USER");
    
}
console.log(JsUser.greeting()); ///yaha bina () ka use kre function return hoga sirf bina execute huye
JsUser.greeting2 = function(){
    console.log(`Hello JS USER, ${this.name}`);
    
}
console.log(JsUser.greeting2());

//NOTE: see in most of the cases we will use only .dot method to access the object elements