//Question 137: Implement a try-catch block to handle potential errors in a block of code.

try {
    throw new Error("Something is wrong!")
} catch (error) {
    console.log(error.message);
    
}