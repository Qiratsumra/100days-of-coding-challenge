/*Your Own Array: 
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let favoriteTransportations:string[]=["Honda BRV","Suzuki Core","Toyota Corolla"];
let message:string="I would like to own a";

favoriteTransportations.forEach(favoriteTransportation=>console.log(`${message} ${favoriteTransportation}`)
)

