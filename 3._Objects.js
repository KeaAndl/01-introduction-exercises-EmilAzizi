// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(myObject.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const myObject2 = {name: "Emil", age: 24};

console.log(myObject2.name + " " + myObject2.age);

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};

stackOverflow.key = "value";

console.log(stackOverflow.key);

// make a rule called isAllowed and let the value be true

Object.defineProperty(stackOverflow, "isAllowed", {value: true}); //Emils note: Man kunne også tilføje propertien til stackoverflow ved:
                                                                  //            const stackOverflow = {isAllowed: true}; men var ikke sikker på om man måtte gøre det.

console.log(stackOverflow.isAllowed);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description;

Object.defineProperty(thisSong, "about", {value: "Just a tribute"});

console.log(thisSong.about);
// --------------------------------------


