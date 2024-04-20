/*Question 52: Make a Smartphone Object: 
Create a simple way to keep track of a smartphone's details. 
Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/

interface mobileDetails{
    brand:string;
    model:string,
    storage:string,
    size:string,
    battery:string
}
let mobile1:mobileDetails={
    brand:"Realme",
    model:"C21",
    storage:"4GB-64GB",
    size:"6.1 inch",
    battery:"2-2.5 days"
};
console.log("\nMobile no.1 details is here:\n",mobile1);

let mobile2:mobileDetails={
    brand:"OPPO",
    model:"A-79",
    storage:"3GBB-32GB",
    size:"6.1 inch",
    battery:"1.5-2 days"
}
console.log("\nMobile no.2 details is here:\n",mobile2);
