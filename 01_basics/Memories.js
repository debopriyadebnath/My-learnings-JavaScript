// types of memories in JS
// stack, Heap.
// Stack memory is used for primitive datatypes and function calls. It is a simple memory structure that follows the Last In First Out (LIFO) principle. When a function is called, its execution context is pushed onto the stack, and when the function returns, its context is popped off the stack.
// Heap memory is used for non-primitive datatypes (objects, arrays, functions). It is a more complex memory structure that allows for dynamic memory allocation. When an object is created, it is stored in the heap, and a reference to that object is stored in the stack. This allows for more flexible memory management, as objects can be created and destroyed at runtime.

let myYoutubename = "debopriya";

let anothername = myYoutubename;
anothername = "debopriya debnath";

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email : "user@example.com",
    upi: "user@upi"
}

let userTwo = userOne ;

userTwo.email = "debo@google.com"

console.log(userOne.email);
console.log(userTwo.email);