const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","flash","batman"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
///array ke andar array aagaya hai ,isne array ko as a single element le lia hai array iska ek element ban chuka hai
//output: ["thor","Ironman","Spiderman",["Superman","flash","batman"]]

//console.log(marvel_heroes[3][1]);
//output: so this will give us the element at index-1 of element at index-3 of array 
// output is flash


//console.log(marvel_heroes);
// we will get the same output as push  
//output: ["thor","Ironman","Spiderman",["Superman","flash","batman"]]
const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);
///concat method makes a single array out of two given arrays
//output: [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);
/////WHAT IS THE DIFFERENCE BETWEEN SPREAD AND CONCAT METHODS
//SPREAD method concats 3 or 4 arrays just by writing them in commas whereas CONCAT method can concatenate only 2 arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);
//Output : [ 1,2,3,4,5,6,7,6,7,4,5]   this flat method pata hai kya krta hai ye agar kisis array ke andar bahut sare subarrays hai to vo un sare subarrays ke elements ko ek single array ke elements me convert kr deta hai

//console.log( Array.isArray("Hitesh"));
//this .isArray method is used to check wheteher the given element in the brackets is array or not  ....here the ans willl be false as "Hitesh" is a string not array
//console.log(Array.from("Hitesh"));
///this from method is used to make array with the help of given input,,ham isme objects aur strings bhi de skte hai jise ye convert krenge array me



//console.log(Array.from({name: "hitesh"})); ////this is an interesting case as this will give us an empty array kunki isme hamne isko bataya hi nhi hai ki hame key values ki madad se array banana hai ya values ki madad se

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
/////.of method values ki help se naya array bana deta hai




