console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = 'John';
let lastName = 'Ward';
var age = 30;

// Exercise 2
let fullName = firstName + ' ' + lastName;
let altFullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(altFullName);

// Exercise 3
let city = 'Birmingham';
let pastTime = 'walking';

let myStory = `Hi, as you might have already guessed I am ${fullName}.
I'm currently living relatively close to ${city}, 
and my favorite past time is ${pastTime}.`;
console.log(myStory);