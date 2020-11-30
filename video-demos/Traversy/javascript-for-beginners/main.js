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

// const fruits = ['apples','oranges','pears'];
// fruits[3]= "grapes"
// console.log(fruits[1]);

// /*multi
// line
// comment
// */

// const person= {
//     firstName: 'John',
//     lasthName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street:'50 Main St.',
//         city: 'Boston',
//         state: 'MA'  
//     }
// }

// console.log(person.hobbies[1]);

// console.log(person.address.city)

// // can directly add properties to array:
// person.email='john@email.com';
// console.log(person);

// // often will be using an array of objects

// const todos =[
// {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
// },
// {
//     id: 3,
//     text: 'Dentist Appointment',
//     isCompleted: false
// }
// ]

// console.log(todos[1].text);

// // For Loop

// for(let i=0; i<10; i++) {
//     console.log(`For Loop Number: ${i}`);
// } 

// // while
// let i = 0;
// while(i<10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// // can console log arrays of these types as well

// for(let i =0; i < todos.length; i++) {
//     console.log(todos[i].text)
// }

// forEach, map, filter

/*todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);
*/


// conditionals

// const x = 10
// const y = 11;

// if(x == 4) {
//     console.log('x is 10');
// } 
// else if(x > 10) {
//     console.log('x is greater than 10') 
// } 
// else{
//     console.log('x is less than 10')
// }

// if(x > 5 || y > 10) {
//     console.log('x is 10');
// } 

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// } 


// === matches data types as well values, so if you're assigning a value to an object with this, then it won't be equal to if youre using a string with the dame value as number, the console will not log 'true'

// always use tripple equals if you always want to match datatypes

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';

// example above is example od a ternery operator
// '?' is if and ':' is or

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//         default:
//             console.log('color is not red or blue');
//         break;
// }

//functions

// function addNums(num1 = 1, num2 = 1) {
//     console.log(num1 + num2);
// }

// or--> addNums(5,4); <--for addition to log in console/assigning values to num1 and num2

// const addNums = (num1 = 1, num2 = 1) =>  {
//     console.log(num1 + num2);
// }

// addNums(5, 5);

// arrow functions: great for 'map', 'reduce', 'forEach'

// constructive functions

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '10-26-1945');

// console.log(person1);
// console.log(person2.lastName);

// console.log (person2.getFullName());
// console.log(person1);

// above is object oriented programming in ES5

// get elements from DOM vvv


// single element selectors
// consolle.log(document.getElementById('my-form'));
// consolle.log(document.querySelector('.container'));


// multiple element selectors, use first one the most!
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElelmentsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// manipulating or changing things in the DOM

// const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello<h1>'

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red'

// // can do hover over, mouse out, or click for events
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value);
}