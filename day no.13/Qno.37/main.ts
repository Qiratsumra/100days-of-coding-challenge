/*Large Shirts: 
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size:string="large",message:string="I love Typescript.") {
    console.log(`My t-shirt size is :${size} and messege on that is :${message}`);
    return;
};
make_shirt("large shirt","I love typescript");
make_shirt("medium shirt","I love typescript");
make_shirt("small","I like CSS");
make_shirt("meduim","I like blue shirt");