//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abxc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

//NOTE-1: the difference between the above two notations is that the first one is singleton and the second one is not singleton
const regularUser = {
    email: "vaishnavi.0000",
    fullname: {
        userfullname:{
            firstname: "Vaishnavi",
            lastname : "Rajawat"

        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);
const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {4: "aa",5: "bb",6: "cc"}
const obj3 = {obj1,obj2}
//console.log(obj3);
////ha to aeses krne se dono object ek single object me alag alag print honge
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);
// ha to bhai dekh ab ye jo .assign method hai ye ek object bana dega sare objects ko milakar,vaise to ye imp ni hai ki {} ham lagaye hi apne syntax par but for the sake of clarity ham ise lagate hai considering it as a target and rest things as a source
//but we will use dusri chiz mainly
const obj5 = {...obj1,...obj2}
////ham use krenge SPREAD glass ko lo aur tod do
//console.log(obj5);


const users = [
    {
        id: 1,
        emial: "h@gmail.com"
    },
    {
        id: 2,
        emial: "mammuuuu@gmail.com"
    },
    {
        id: 3,
        emial: "oooooh@gmail.com"
    }
]
///dekh aese hame jab database se data aega to vo aese hi aega array ke andar objects banke to ab smjh le ham unhe kaise access krenge
// console.log(users[0].emial);
// console.log(users[2].emial);
//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); /// ye pata kya krega keys aur values ke pairs ko alag alag array ke form me ek array me tore krega

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// ye .hasOwnproperty check krta hai ki tumhare pas ye wali property hai bhi ya ni hai to true otherwise false return hoga








