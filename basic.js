//Scope
let x = 2;
{
    let x = 3;
    console.log(x);
}
console.log(x);

let y = 4;
{
    let z = 3;
    y += z;
    console.log(y);
}

//Funciones
const temp = 100;

function transformacionAKelvin(temp){
    return temp +273.15;
}
let respuesta = transformacionAKelvin(temp);
console.log("La temperatura en Kelvin es: ", respuesta);

let num = "10";

function sumarDecena(num){
    return num + 12;
}
const res = sumarDecena(parseInt(num));
console.log("La suma de la decena es: ", res);

//Función de flecha // Arrow function
let sumaDecena = (num)=> //Si solo es una línea de código se puede hacer en una sola línea sin llaves. Ejemplo: let sumaDecena = (num)=> num + 12;
    {
        return num + 12;
    }
const total = sumaDecena(parseInt(num));
console.log("La suma de la decena con otra forma de función es: ", total);

//Strings
let frase = "Albert Einstein dijo 'La masa es relativa'";
let frase2 = 'Albert Einstein dijo \'La masa es relativa\'';
console.log(frase);
console.log(frase2);

let salto = 'Esto esta arriba \n esto esta abajo';
console.log(salto);
console.log("Cantidad de letras: ", salto.length);

//Slice
let cadena = "Educación";
let cadena2 = cadena.slice(4, 7);
console.log(cadena2);

let cad = "La educación es la clave del éxito";
let resultado = cad.replace("éxito", "desarrollo");
console.log(resultado);

//Trim
let conEspacio = "   Hola Mundo   ";
let sinEspacio = conEspacio.trim();
console.log(conEspacio);
console.log(sinEspacio);

//CharAt
let character = "Hola Mundo";
let letra = character.charAt(4);
console.log(letra);

//Split
let contraseñas = "alkjdfas,asdkfj,alkjdf";
let contraseñasSeparadas = contraseñas.split(",");
console.log(contraseñasSeparadas);