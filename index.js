function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
// person.prototype.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }

const person4 = new person("John", 25); //New nélkül undefinedot ad.
console.log(person4);
const person5 = new person("Jack", 35);

person4.greet();
person5.greet();

const person1 = {
    name: "John",
    age: 25,
    // greet: function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    // }
};
// console.log(person1)

// const person2 = {
//     name: "Jim",
//     age: 35,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// };

// const person3 = {
//     name: "Jack",
//     age: 45,
//     // greet: function(person) {
//     //     console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`)
//     // } // ha így írom meg, akkor így kell meghívni: // person3.greet(person3);

//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
//     // greet: () => {
//     //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     // } //Ez ugyanaz, mint a felette lévő, csak arrow functionnel, de itt nem érti a thist. Arrow functionbe nem teszünk thist!
// };

// person3.greet(person3);
// person1.greet();
// person2.greet();
// person3.greet();

// const greeting = (person) => {
//     console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`)
// };

// greeting(5);
// greeting(person1);
// greeting(person2);
// greeting(person3);