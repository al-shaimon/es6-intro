// Before ES6

/* function add(first, second) {
  console.log(first, second);
  second = second || 0;
  // if (second === undefined) {
  //   second = 0;
  // }
  const total = first + second;
  return total;
} */

// This method uses after ES6

function add(first = 0, second = 0) {
  const total = first + second;
  return total;
}

const result = add(10, 20);
console.log(result);

function fullName(first, last = "Chowdhury") {
  const name = first + " " + last;
  return name;
}

const name = fullName("Aslam");
console.log(name);
