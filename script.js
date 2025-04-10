//Agrega el valor del botón a la pantalla
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

function borrar(){
    document.getElementById("pantalla").value = "";
}

//Evalua la expresión y muestra el resultado
function calcular(){
    const pantalla = document.getElementById("pantalla").value;
    let resultado = eval(pantalla);
    document.getElementById("pantalla").value = resultado; 
}