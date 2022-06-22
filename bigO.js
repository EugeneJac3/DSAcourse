// Intro Example
// function outputString(myString) {
//     return myString
// }


// console.log(outputString("hello world"))

// NOTES - Looking at O(n)
// Adding more functions increases notation, but we "drop constants" to make it O(n) anyway

// function logItems(n) {
//     for(let i = 0; i < n; i++ ){
//         console.log(i)
//     }
//     for (let j = 0; j < n; j++){
//         console.log(j)
//     }
// }

// logItems(3)

// NOTES - O(n2)"squared"

// function logItems(n){
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++){
//             for (let k = 0; k < n; k++){
//                 console.log(i,j,k)
//             }
//         }
//     }
// }

// logItems(4)

// NOTES - Drop non-dominants 

// function logItems(n){
//     for (let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){     // O(n2)
//             console.log(i, j)
//         }
//     }

//     for(let k = 0; k < n; k++){
//         console.log(k)                  // O(n)
//     }
// }

// // Becomes O(n2 + n). n is the non-dominant one, so you drop it, making it O(n2)

// logItems(10)

//NOTES - O(1) - "constant time". Flat line on a graph

// function addItems(n){
//     return n + n + n
// }

// NOTES - O(log n)

// [1,2,3,4,5,6,7,8] 
// log 2 8 = 3. Divide the above in half 3 times to find 1. "divide and conquer"
// Very flat, not exactly O(1), but close. A very efficient way to find a number in a large array.


// NOTES - Different terms of input
// Interview gotcha question

// function logItems(a, b) {
//     for (let i = 0; i < a; i++){      // O(a)
//         console.log(i)
//     }

//     for (let j = 0; j < b; j++){      // O(b)
//         console.log(j)
//     }
// }

// This isn't O(n) because both a, b can't be equal (n). It would be O(a+b). If it was nested, it would be O(a*b). 


// NOTES - Arrays

myArray = [11, 3, 23, 7]

myArray.push(17)    // Both of these are O(1)
myArray.pop(23)

myArray.unshift(11)

myArray.splice(1,0, "Hi")



// push and pop don't change the indexes of an array

// Shift and unshift changes the index of the array. O(n)

// Splice - adds an item in an array and changes the index of the array from the point of change. Still O(n)

// Searching an array by value is O(n), it has to loop through the array. Searching an Array by index is O(1), it goes right to that index.

// ***** Arrays are great for finding items via index. If you're going to be adding and removing items from the beginning, not so much.

// Sections wrap up
// O(n2)"squared" will be a loop within a loop
// O(n) will be proportional 
// O(log n) will be divide and conquer
// O(1) will be constant time
// bigOcheatsheet.com