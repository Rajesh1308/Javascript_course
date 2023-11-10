alert("Hello World");
// Single line comment
/*
    Multi line comment
*/
console.log("Building JS application");

// Variables - var and let are the keywords, but let is preferred

let name = "Rajesh A";
var msg = "I am " + name + " and I am learning JavaScript";
alert(msg);

typeof name; // string
typeof 20.2; // number

//Objects - like dictionary in python

let person = {
    name : "Rajesh A",
    age : 20,
    gender : "Male"
};

console.log("Printing person name from object" + person.name);
console.log("Printing person age from object with bracket notation " + person['age']);

//Nested objects
let person2 = {
    name : "Rajesh A",
    age : 20,
    gender : "Male",
    friends : {
        frnd1 : "Priyanga",
        frnd2 : "Ashlin",
        frnd3 : "Bharani Sri",
        frnd4 : "Saranraj",
        frnd5 : "Padmanisha",
        frnd6 : "Anbu"
    }
};

//Arrays - like list in python and it can hold different data types. They are also object datatype
let arr = ["Red", "Green", "Blue"];
console.log(arr[0]); // Red