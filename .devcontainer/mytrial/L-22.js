function one(){
    const username = "Vaishnavi"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    //two()
    
}
one()

///During scope of two functions child wala parent ko access kr skta hai parent wala child vale ko nhi

if(true){
    const username = "Vaishnavi"
    if(username === "Vaishnavi"){
        const website = " youtube"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//+++++++++++++++++++interesting +++++++++++++++++++++++==


console.log(addone(5)); ///ye answer de dega

function addone(num){
    return num+1

}


console.log(addTwo(5)); ///ye answer ni dega

const addTwo = function(num){
    return num+2
}


