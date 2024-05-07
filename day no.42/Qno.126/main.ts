// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const person={
    name:"John",
    place:function(){
        console.log(this.name);
        
        let  innerPlace = () => {
            console.log(this.name);
            
        };
        innerPlace();
    },
};

person.place()