/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

function calculateArea(lengthOfArea:number,width:number):number{
    return lengthOfArea * width;
};

const lengthOfArea = 2;
const width = 3;
const area = calculateArea(lengthOfArea,width);
console.log(`The area of retangular is: ${area}`);


/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/


function defaultOptionalParameters(defaultPara:string="Alexa",optionalPara?:number){
    if (optionalPara!== undefined) {
        console.log(`Hey my name is ${defaultPara} and I'm ${optionalPara} years old`);
    }else{
        console.log(`Hey my name is ${defaultPara}`);
    };
    
};

defaultOptionalParameters("john")       //output is  "Hey my name is john"
defaultOptionalParameters("alexa",27)   //output is  "Hey my name is alexa and I'm 27 years old"



/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

function restParameter(...num:number[]):number{
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total
};
console.log(restParameter(1,2,3,4,5,6,7,8,9,10));   //output is 55


/******************
 * ARROW FUNCTION *
 ******************/

let arrowFunction = (num1:number,num2:number):number=>{
    return num1 +num2;
};
console.log(arrowFunction(20,80));

/**********************
 * ANONYMOUS FUNCTION *
 **********************/

let annotationFunction = function (...chickenSandwish:string[]){
    return chickenSandwish;
    
    
};

console.log(annotationFunction(`Chicken Tikka Sandwish`,"BBQ Sandwish"));


/****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }

  greet(`Alexa`);

//  never
// function greet1(name1:string)never{     // error
//     return name1
// };

