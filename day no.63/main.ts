

/***********************
 *** TYPE ANNOTATION ***
 ***********************/



 let person :string= "Hanvery";
let number:number = 200;


/******************************
 * DYNAMIC TYPE DETERMINATION *
 ******************************/

let message  = "Hello World!";



/************
 * ANY TYPE *
 ************/


/*However, it's generally advised to avoid using the any type whenever possible in TypeScript for the following reasons:

1:Loss of Type Safety:
2:Reduced Code Reliability:
3:Maintenance Challenges:
4:Interferes with Tooling:*/

let text :any = 100;
text= "I love typescript";
text = true;
text = false;
text = 23333333n;
text = null;
text = undefined;

