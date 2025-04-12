//Indices
let tecnologies = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'Java', 'Python'];

//For
for (let index = 0; index < tecnologies.length; index += 1){
    console.log(tecnologies[index]);
}

//For-of
for (let index of tecnologies){
    console.log(index);
}

let alumno = {
    nombre: 'Juan',
    edad: 25,
    cursosAprobados: ['Curso de HTML', 'Curso de CSS', 'Curso de JavaScript'],
}

for (let index in alumno){
    console.log(alumno[index]);
}

//Foreach
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach((numero) => console.log(numero)); //Debemos incluir una función callback o una función normal

//While
let contador = 0;
while (contador < 3){
    let num = contador +1;
    console.log("Contador: " + num);
    contador++;
}

//Do-While
let cont = 0;
do {
    let numEjecuciones = cont + 1;
    console.log("Número de ejecuciones: " + numEjecuciones);
    cont++;
} while (cont < 3); //Se puede usar la extensión break para detener el ciclo