const person1 = "Adam Sand";
const person2 = "Ben White";
const person3 = `Donald Trump`;

// Before ES6
// for using multiline code we have to use this method

const multiLine =
  "First Line text \n" +
  "second line of code \n" +
  "Third line of text \n" +
  "fourth line of string";
// console.log(multiLine);

// After ES6
// for using multiline code we can simply use `` this sign for multiline code

const newMultiLine = `First Line of text
Second Line of text
third line of string
fourth line of code`;
// console.log(newMultiLine);

// before ES6 we have use this method for dynamic string
const a = 20;
const b = 30;
const nums = [78, 98, 45, 6, 444];
const summary = "sum of: " + a + " and " + b + " is: " + (a + b);
// console.log(summary);

// after ES6 we can easily do dynamic string by using this method

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
