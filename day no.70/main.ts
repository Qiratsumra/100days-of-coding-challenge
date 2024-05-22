/*******************
 * INTERFACE INTRO *
 *******************/

interface PersonInformation{
    name:string,
    age:number
};
let Person1 :PersonInformation = {
    name:"Alice",
    age:23
};

/*In TypeScript, an interface can define not only the structure of an object 
but also the signature of functions or methods that objects adhering to the interface should have. 
This allows you to specify not just the properties but also the methods and their parameters and return types 
that should be present in objects implementing the interface.*/



/************************************************************
 *********     Interface Method And Parameters     **********
 *************************************************************/

// Define Interface with function :
interface PersonGreet{
    name:string,
    age:number,
    country:string,
    greet (message:string):void
};

let person2 :PersonGreet={
    name:"Saeed",
    age:35,
    country:"Pakistan",
    greet(message:"Hello"){
        console.log(`${this.name} say ${message}`);       
    }
};
person2.greet(`HEllo`);


/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

interface LoggingInformation{
    email:string,
    UserName:string
};
interface LoggingInformation{
    phoneNumber:string
};
interface LoggingInformation{
    password:string
};

let person1:LoggingInformation={
    email:"abbc@gmail.com",
    UserName:"Ahmed",
    password:"12@twy",
    phoneNumber:"2374-6378-44"
};
console.log(person1);

/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Interface
interface Student{
    name:string,
    rollNumber:number
};
 type Student1 = {
    class:string,
    totalStudents:number
};
let person:Student| Student1={
    name:"Qirat",
    rollNumber:1879,
    totalStudents:35,
    class:"XII"
}

