/************************
 ******    Tuple   ******
 ************************/

 let Tuple:readonly[string,number,boolean] = ["Bus",200,true];
 Tuple = ["Car",700,false];

 let [id,tittle,property]= Tuple;


 console.log(id);
 console.log(tittle);
 console.log(property);
 

 