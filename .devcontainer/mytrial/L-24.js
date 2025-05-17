//IIFE = Immediately invoked functions expressions(aesa function jo immediately execute kre)
(function chai(){
    //It is a named iifee kunki it has a name
    console.log(`DB connected`);
    
})();

//kabhi kabhi kya hota hai ki global variables ki vajah se kachra hone lagta hai sab jagah to usi ko bachne ke liye iifee ka use krte hai
///
/// so hamne kya kia hai ki we have used ()() two parenthesis jisme ek function definition ke liiye use hua hai and dusra for function call
////GLOBAL SCOPE KE VARIABLES KE EXECUTION SE HUYE POLLUTION SE BACHNE KE LIYE WE HAVE USED IIFE...NOT JUST TO JALDI SE FUNCTION KO WORK KARANE K LIYE

( (name) => {
    ///it is an unnamed iifee
    console.log(`DB connecteddddddddd ${name}`);
    
})("Vaishnavi") //ye part function calling krra tha to we will have passeed an input variable  to it
///dekho jab ham do IIIFE functions likhte hai to agar first IIFE function ko end ni kia to error aega so to end a IIFE function apply ;(semicolon at the end)

