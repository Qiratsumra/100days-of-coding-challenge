// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function schedule(works:string):void{
    switch (works) {
        case "task no.1":
            console.log(`Breadfast`);
            break;
            case "task no.2":
                console.log(`Study for typescript`);
            break;
            case "task no.3":
                console.log(`Coding`);
        default:
            console.log(`Nothing to do`);
            
            break;
    }
};

schedule("task no.2")