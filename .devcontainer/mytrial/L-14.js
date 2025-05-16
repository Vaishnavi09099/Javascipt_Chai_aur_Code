///array
const myArray = [0,1,2,3,4,5,true,"hitesh"]
// const myHeroes = ["vaishnavi","sheenu","hilanhu","rajawat"]
// const myArr2 = new Array(1,3,4,5)
// console.log(myArr2[2]);

/////Array methods
// myArray.push(6)
// console.log(myArray);
//myArray.unshift(6)
// console.log(myArray);
// myArray.shift()


// console.log(myArray.includes(9));  ///tells if this number is included by our array or not
// console.log(myArray.indexOf(2));

// const newArr = myArray.join()      ///converts array into string (list of integers)
// console.log(myArray);
// console.log(typeof(newArr));

///slice,splice
console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B ",myArray);


const myn11 = myArray.splice(1,3)
console.log(myn11);

console.log("C ",myArray); ////splice aur slice me ye difference hai ki jab ham splice use krte hai to original array se utna portion hata lete hai aur bad me jab array print krte hai to bacha hua print hota hai






