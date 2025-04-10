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
