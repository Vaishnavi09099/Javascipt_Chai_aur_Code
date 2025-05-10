/*Memory are of 2 types - 
1.Stack(primitive)==== copy vapas milta hai
2.Heap(non-primitive)====  original value vapas milta hai
*/
// let myName = "Vaishnavi"
// let anothername = myName
// anothername = "sparsh"
//  console.log(myName);
//  console.log(anothername);

// NOte- the original value of variable remain intact it's value is copied for the other 

 let user = {
    email: "vaishnavi.2428cse202@kiet.edu",
    upi: "user@ybl"
 }
 let user2 = user
 user2.email = "sparsh@kiet.com"
 console.log(user.email);
 console.log(user2.email);
 
 
 
