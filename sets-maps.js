//Sets es un conjunto de valores únicos
let conjunto = new Set(['Juan', 'Ana', 'João', 'Pedro', 'Juan']);
console.log(conjunto);

//Métodos de Sets
conjunto.add('José');
conjunto.delete('Ana');
console.log(conjunto);
console.log("Tiene José? " + conjunto.has('José'));

let muebles = ['Cama', 'Silla', 'Sofa', 'Silla', 'Silla', 'Cama', 'Sofa'];
function comprarUnico(array){
    let conjuntoMuebles = new Set(array);
    console.log(conjuntoMuebles);
}
comprarUnico(muebles);


//Maps es un conjunto de pares clave-valor
let mapa = new Map([
    ['Computadoras', 25],
    ['Impresoras', 10],
    ['Tablets', 5],
])
console.log(mapa);

//Métodos de Maps
mapa.set('Televisores', 15);
mapa.delete('Impresoras');
console.log(mapa);
console.log("Tiene Televisores? " + mapa.has('Televisores'));