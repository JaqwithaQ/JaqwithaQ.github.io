// alert('hello world');
// console.log('hello world');

//variables: let(can reassign values), const(short for constant, can't be reassigned)

//data types

//primitive data types: directly assigned to memory

//string, numbers, boolean, null, undefined, symbol

//string

// const name = 'John';


//number

// const age = 30;

//boolean

// const isCool = true;

//decimal

// const rating = 4.5;

//null

// const x = null

//undefined

// const y = undefined;
// let z

// console.log(typeof isCool)

// Concatenation
// console.log("My name is " + name + "and I am " + age);

//Template String
// console.log(`My name is ${name}and i am ${age}`) 

// const s = 'Hello World';

// console.log(s.sunstring(o, 5));

// starts at 0 index and ends at 5 = Hello

// console.log(s.split(''))
//same as below, only it calls up individual charachters and gives you a length of each individual character

// console.log(s.split(', '))
//calls up an array, say for a list of words-computes these into an ordered list starting at 0, giving you the length of the array by word (so 4 words gives you a length of 4)

// ^used for searches in databases

// Arrays-variables that hold multiple values

/*
const fruits = ['apples','oranges','pears', 10, true];
// can use different data types in arrays 

console.log(fruits);
*/

const fruits = ['apples','oranges','pears'];
fruits[3]= "grapes"
console.log(fruits[1]);

/*multi
line
comment
*/

const person= {
    firstName: 'John',
    lasthName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street:'50 Main St.',
        city: 'Boston',
        state: 'MA'  
    }
}

console.log(person.hobbies[1]);

console.log(person.address.city)

// can directly add properties to array:
person.email='john@email.com';
console.log(person);

// often will be using an array of objects

const todos =[
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist Appointment',
    isCompleted: false
}
]

console.log(todos[1].text);

// For Loop

for(let i=0; i<10; i++) {
    console.log(`For Loop Number: ${i}`);
} 

// while
let i = 0;
while(i<10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// can console log arrays of these types as well

for(let i =0; i < todos.length; i++) {
    console.log(todos[i].text)
}

// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});