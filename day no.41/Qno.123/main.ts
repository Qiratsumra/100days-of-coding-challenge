/*Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. 
The loop can stop once a vowel is found.*/

function vowelLoop(str:string):void{
    const vowels = "aeiouAEIOU";
    for(const character of str ){
        if(vowels.includes(character)){
        console.log(`Vowel is found : ${character}`)
    }
    console.log(character);
    
    };
};

vowelLoop("qirat")