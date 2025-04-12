//Typeof
//Typeof is an operator that returns a string indicating the type of the operand.
let string = typeof "Hello World";
let number = typeof 123;
//Number caso especial NaN
let nan = typeof NaN;
let boolean = typeof true;

let objectArray = typeof [1, 2, 3]; //Array, Set y Map son objects
let object = typeof { name: "John", age: 30 }; //object
let function1 = typeof function () { }; //function
let i = typeof David; //undefined
let nulo = typeof null; //object

console.log(string);
console.log(number);
console.log("Number caso especial NaN: " + nan);
console.log(boolean);
console.log(objectArray);
console.log(object);
console.log(function1);
console.log(i);
console.log(nulo);

//Instanceof
//Instanceof is an operator that returns true if the object is an instance of the specified type.
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
let map = new Map([[1, 1], [2, 2], [3, 3]]);
let date = new Date();

let instanciaDate = date instanceof Date;
let instanciaArray = array instanceof Array;
let instanciaSet = set instanceof Set;
let instanciaMap = map instanceof Map;

console.log("Es una Date? " + instanciaDate); //true
console.log("Es un Array? " + instanciaArray); //true
console.log("Es un Set? " + instanciaSet); //true
console.log("Es un Map? " + instanciaMap); //true

//Para Null y Undefined no se puede usar instanceof

