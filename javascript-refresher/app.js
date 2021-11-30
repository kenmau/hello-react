var myName = 'Max'
console.log(myName)

myName = "Manu"
console.log(myName)



function printMyName(name) {
  console.log(name)
}

printMyName("Ken")


// Arrow Function
const printMyNameArrowFunction = (name, age) => {
  console.log(name, age)

}

printMyNameArrowFunction("Ken", 5)

const multiply = (number) => number * 2

console.log(multiply(4))

// Classes

class Human {
  // ES6
//   constructor() {
//     // Properties
//     this.gender = 'male'
//   }
  
  // ES7 (Babel)
  gender = 'male'
  
  // Methods
  printGender = () => { 
    console.log(this.gender)
  }

}

class Person extends Human {
//   constructor() {
//     // Need to call the super constructor!!
//     super()
    
//     // Properties
//     this.name = 'Max'
//     this.gender = 'female'
//   }
  
    // ES7
    this.name = 'Max'
    this.gender = 'female'

    printMyName = () => console.log(this.name)
  }
}   

const myPerson = new Person()
myPerson.printMyName()
myPerson.printGender()



// Spread / Rest Operator ...

// Spread
let numbers = [1, 2, 3]
let newNumbers = [...numbers, 4, numbers]

console.log(newNumbers)

const person = {
  name: 'Max'
}

const newPerson = {
  ...person, // spread
  age: 28
}

console.log(newPerson)


// Rest - merges the arguments into an array

const filter = (...args) => {
  // filter executes a function on every element of the array
  // === (checks for type and value equality)
  return args.filter(element => element === 1)
}

console.log(filter(1, 2, 3))


// Array Destructuring

const numbers = [1, 2, 3];
[num1, , num3] = numbers;

console.log (num1, num3);

// Object destructuring

const person = {
  name: 'Ken',
  age: 5
};

{name} = person;


// Reference vs primitive types

const number = 1; // Primitive Type
const num2 = number; // Copy of number

console.log(num2)

// Objects + Arrays are reference types
const person = {
  name: 'Max'
}

// Copy by reference
// const secondPerson = person

// Copy by value
const secondPerson = {
  ...person
}

person.name = 'Manu'
console.log(secondPerson)

// Array Functions

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  // Map returns new array
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);