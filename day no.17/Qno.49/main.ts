/*Question 49: Function with Rest Parameters: 
Write a function that takes a rest parameter representing multiple hobbies. 
It should log each hobby with a statement saying you enjoy that hobby.*/

function hobbies(...hobbys:string[]) {
    hobbys.forEach(hobby=>console.log(`I like to enjoy ${hobby}.`)
    )
}
hobbies("coding","learning typescript projects","gaming","cooking","playing outdoor games")
