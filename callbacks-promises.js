//Callbacks and Promises

//Callbacks
//Son funciones que se ejecutan cuando se cumple una condicion
function mostrarConsola(num){
    console.log(num);
}

function calcular(num1, num2, callback){
    let suma = num1 + num2;
    callback(suma);
}

calcular(1, 3, mostrarConsola);

//Promises
//Las promesas tienen 3 estados: pendiente, cumplida y rechazada
//Las promesas se ejecutan de forma asincrona
console.log('Inicio de la promesa');
let promesa = new Promise((response, reject) => {
    response('Promesa cumplida');
    reject('Promesa rechazada');
})

promesa.then(res => {
    console.log(res);
}).catch(error =>{
    console.log(error);
});

//Forma común de manejar promesas
let promesa2 =  new Promise((response, reject) => {
    let respuesta = {
        response: 200,
        description: 'OK 1' 
    }
    let error = {
        response: 404,
        description: 'Not Found'
    }
    response(respuesta);
    reject(error);
});

promesa2.then(res => {
    console.log(res.description);
}).catch(error => {
    console.warn(error.description);    
});

//Visualizar la sicnronia de las promesas
let promesa3 = new Promise((response, reject) => {
    setTimeout(() => {
        let respuesta2 =  {
            response: 200,
            description: 'OK 2'
        }
        let error2 = {
            response: 404,
            description: 'Not Found'
        }
        response(respuesta2);
        reject(error2);
    }, 3000);
});

promesa3.then(res => {
    console.log(res.description); 
}).catch(error => {
    console.warn(error.description);
});

let promesa4 = new Promise((response, reject) => {
    setTimeout(() => {
        let respuesta2 =  {
            response: 200,
            description: 'OK 3'
        }
        let error2 = {
            response: 404,
            description: 'Not Found'
        }
        response(respuesta2);
        reject(error2);
    }, 2000);
});

promesa4.then(res => {
    console.log(res.description); 
}).catch(error => {
    console.warn(error.description);
});
//La diferencia entre el try-catch y las promesas es que el try-catch se ejecuta de forma sincrona y 
// las promesas se ejecutan de forma asincrona


//Async-Await
//Las async-await son palabras clave que se utilizan para manejar promesas de forma mas sencilla
async function ejecutarPromesa(){
    let respuesta1 = await promesa2
    console.log(respuesta1); 
    let respuesta2 = await promesa3
    console.log(respuesta2); 
    let respuesta3 = await promesa4
    console.log(respuesta3); 
}

ejecutarPromesa();