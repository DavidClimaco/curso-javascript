//Selecciona un número al azar entre 1 y 100
let numeroAzar = Math.floor(Math.random()*100)+1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

//Función para verificar el resultado
function verificarResultado(){
    intentos++;
    intento.textContent = intentos;
    console.log(numeroAzar);
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor introduce un número válido entre 1 y 100';
        mensaje.style.color = 'black';
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! Has adivinado el número';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡El número es mayor!';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡El número es menor!';
        mensaje.style.color = 'red'
    }
}
