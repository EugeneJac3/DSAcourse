// NOTES

// class Cookie {
//     constructor(color){
//         this.color = color                 
//     }
// }
// Class Example "Cookie Cutter"


// let cookieOne = new Cookie('green')
// This creates a green cookie from the cookie class called cookieOne.

// let cookieTwo = new Cookie("blue")

// NOTES - Getters and Setters

// class Cookie {
//     constructor(color){
//         this.color = color                 
//     }
//     getColor(){
//         return this.color
//     }
//     setColor(color){
//         this.color = color
//     }
// }

// let cookieOne = new Cookie('green')
// let cookieTwo = new Cookie('blue')

// console.log(cookieOne.getColor())
// console.log(cookieTwo.setColor('yellow'))

// Linked List Class quick overview

// class LinkedList {
//     constructor(value){...}
//     push(value){...}
//     unshift(value){...}
//     insert(index, value){...}
//     remove(index){...}
//     pop(){...}
//     shift(){...}
// }

// NOTES - Pointers

let obj1 = {
        value: 11
}

let obj2 = obj1

// When you set a variable equal to an object, you are saying  obj1 "points" to this object.
// When you make obj2 = obj1, you are literally saying make obj2 point to obj 1 (not setting the value of obj1 at the time of variable creation)
// obj must point to a value. If obj1 and obj2 are pointed at obj3, javascript will remove the original value from obj1 in "garabage collection"


