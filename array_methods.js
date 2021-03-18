// concat arrays
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai)

var children2 = hege.concat(stale)

console.log(children)

console.log(children2)

// Index 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");


//length of array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);



var fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_1.push("Kiwi", "Lemon", "Pineapple")
console.log(fruits_1)


//Map method

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)
var sqrtarray = numbers.map(Math.sqrt)


function myFunction(num) {
  return num * 10;
}

console.log(newarray)
console.log(sqrtarray)



// Reverse
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse()
console.log(fruits)

// Sort

var points = [40, 100, 1, 5, 25, 10];

console.log(points.sort())


// filter
var numbersss = [65, 44, 12, 4];
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult))