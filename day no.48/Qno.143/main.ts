// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let conditionalPromise = new Promise<string> ((resolve,reject)=>{
    let num = Math.random() >0.5;
    if(num){
        resolve(`sucess`)
    }else{
        reject(new Error (`Reject!`))
    };
});
conditionalPromise
.then((result) => console.log(result))
.catch((error)=>console.log(error))
