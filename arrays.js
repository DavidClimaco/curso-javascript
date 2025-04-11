//Arrays
const array = ['Curso HTML', 'Curso CSS', 'Curso JavaScript', 'Curso React', 'Curso Node'];

//Declaración sin inicialización
let array2 = new Array(5);

//Asignación
array2[0] = 'Curso HTML';
array2[1] = 'Curso CSS';
array2[2] = 'Curso JavaScript';
array2[3] = 'Curso React';
array2[4] = 'Curso Node';

console.log(array2);

//Array con diferentes tipos de datos
const arreglo = ['Curso JS', 100, true, null, undefined, {name: 'David', age: 25}];
console.log(arreglo);

//Lenght
console.log(arreglo.length);

//Sort
const arrayNums = [1, 5, 2, 3, 4];
console.log(arrayNums.sort());
const arrayWords = ['David', 'Juan', 'Pedro', 'Ana'];
console.log(arrayWords.sort());

console.table(arrayWords);

//Usar length para recorrer un array y agregando elementos
let arrayLenghtValues = [];
for (let i = 0; i < 10; i++){
    arrayLenghtValues[arrayLenghtValues.length] = i*10;
}
console.log(arrayLenghtValues);


//Some
console.log(arrayLenghtValues.some(function(elemento){
    return elemento > 50;
}));
//Esta función se pude haber escrito de otra forma
//Así: console.log(arrayLenghtValues.some(elemento => elemento > 50));

//Every
console.log(arrayLenghtValues.every(function(elemento){
    return elemento <= 0;
}));

//Pop
arrayLenghtValues.pop();
console.log(arrayLenghtValues);

//Push
arrayLenghtValues.push(100);
console.log(arrayLenghtValues);

//Shift
arrayLenghtValues.shift();
console.log(arrayLenghtValues);

//Filter
console.log(arrayLenghtValues.filter(elemento => elemento === 10));

const arraysNames = [{name: 'David', lastname: 'Pérez'},
    {name: 'Juan', lastname: 'Guerrero'},
    {name: 'Pedro', lastname: 'Gómez'},
    {name: 'Ana', lastname: 'Pérez'},
    {name: 'David', lastname: 'Castro'}
    ];
let res = arraysNames.filter(elemento => elemento.lastname === 'Pérez');
console.log(res);

//Map
const arrayFrutas = ['Manzana', 'Pera', 'Plátano', 'Sandía', 'Melón'];
const arrayFrutasMayusculas = arrayFrutas.map(elemento => elemento.toUpperCase());
console.log(arrayFrutasMayusculas);

//Fill
const arrayFill = arrayFrutasMayusculas.fill('Fresa', 3);
console.log(arrayFill);

//Find
const varFind = arrayFill.find(elemento => elemento === 'Fresa');
console.log(varFind);


//Splice
arrayFill.splice(3, 2, 'Uva', 'Limón');
console.log(arrayFill);

//Slice
const resultadoSlice = arrayFill.slice(3, 5);
console.log(resultadoSlice);

//Join
console.log(arrayFill.join(' - '));

//Concat
const arrayConcat = ['Aguacate', 'Piña', 'Pepino'];
console.log(arrayConcat.concat(arrayFill));