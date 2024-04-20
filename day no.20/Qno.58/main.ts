//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// using function to calculate the average socres:
function averageScore(...scores:number[]){
    let total=scores.reduce((sum,score)=>score + sum);
    return total/scores.length;
};
console.log(averageScore(20,50,55,40,474));
console.log(averageScore(10,10,10,10,10,20));
