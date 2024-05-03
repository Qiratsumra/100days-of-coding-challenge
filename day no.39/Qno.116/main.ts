/*Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

Explain & TIP: You can group multiple case statements together when they should execute the same block of code, 
which is handy for categorizing items into broader groups.*/


function seasons(months:number):number{
    switch(months){
        case 12:
        case 1 :
        case 2  :
            console.log(`Happy Winter!`);
        break;
        case 3:
        case 4:           
        case 5:
        case 6 :
            console.log(`Happy Summer!`);
        break;
        case 7 :
        case 8 :
        case 9: 
        console.log(`Happy Spring`);
        break;
        case 10:
        case 11:
            console.log(`Happy Fall`);
        break;
        default:
            console.log(`Enter Valid Number`);
                
         break;

    }
    return months;

};
seasons(10)
