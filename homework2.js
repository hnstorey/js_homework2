//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favorites = Object.entries(person3)
// console.log(favorites)
for (let [key, val] of favorites) {
    console.log(`${key}: ${val}`)
    }

//-- OR --//


for(let i = 0; i < Object.values(person3).length; i++){
    if(Array.isArray(Object.keys(person3)[i])){
        console.log(`${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)
        } else {
            console.log(`${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)
        }
    }

//-- OR --//

for(let favorite of favorites){
    console.log(favorite)
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.firstName} ${this.lastName} \nAge: ${this.age}`);
    }

    this.addOne = () => {
        let new_age = this.age + 1;
        return(`Name: ${this.firstName} ${this.lastName} \nAge: ${new_age}`)
    }

    this.addThree = () => {
        this.age = this.age + 3;
        console.log(`Name: ${this.firstName} ${this.lastName} \nAge: ${this.age}`)
    }
}

let person1 = new Person('Linda', 'Rondstadt', 76)
console.log(person1.printInfo())
console.log(person1.addThree())

let person2 = new Person('Rod', 'Stewart', 78)
console.log(person2.printInfo())
console.log(person2.addOne())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve, reject) => {
        if(word.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigWord("asynchronous")
.then( (result) => {
    console.log(`Big word`)
})
.catch( (reject) => {
    console.log(`Small word`)
})