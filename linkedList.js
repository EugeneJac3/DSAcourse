// Notes - Linked List
// Linked lists do not have indexes like arrays.
// Linked list have a head and a tail.
// The last one points to null "null terminated list"

// Visual for linked list under the hood
// {
//    Head: {
//             value: 11,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 23,
//                     next: {
//                         value: 7,
//                         next: {
//                             value: 4,
//                             next: null -- Tail
//                         }
//                     }
//                 }
//             }
//         }

//     }

// NOTES -  Constructor for linked list

// class LinkedList {
//     constructor(value) {
//         create new Node
//     }
//     push(value) {
//         create new Node
//         add Node to end
//     }
//     unshift(value) {
//         create new Node
//         add Node to beginning
//     }
//     insert(index, value){
//         create new Node
//         insert Node
//     }
// }

// All above methods create new Nodes. So we'll make a class called Node that does that.
// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// It would look like..
// const newNode = new Node (4)

// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = this.head
//         this.length = 1
//     }


// let myLinkedList = new LinkedList(4)
// console.log(myLinkedList)

// NOTES - Push for linked list

// push(value) {
//     const newNode = new Node(value)
//     if(!this.head){
//         this.head = newNode
//         this.tail = newNode
//     } else {
//         this.tail.next = newNode
//         this.tail = newNode
//     }
//     this.length++
//     return this
// }

// let myLinkedList = new LinkedList(7)
// myLinkedList.push(4)                        // Works in chrome dev tools