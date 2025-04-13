// Regular Expressions
let texto = "Este curso es de JavaScript y es muy bueno";
let busqueda = texto.search(/JavaScript/); //Para ignorar mayúsculas y minúsculas se agrega la bandera i
console.log(busqueda);
let busqueda2 = texto.search(/javascript/i); //Para ignorar mayúsculas y minúsculas se agrega la bandera i
console.log(busqueda2);

//Modificadores
/*
i: Ignora mayúsculas y minúsculas
g: busqueda global
m: busqueda multilinea
 */

//Pattern
//Test
let pattern = /JavaScript/;
let busqueda3 = pattern.test(texto); //Busca si existe el patrón en el texto
console.log(busqueda3);

//Exec
let exec = /JavaScript/; //También permite usar indices agregandolos entre corchetes. Ej: /[0-9]/ o /\d/
let busqueda4 = exec.exec(texto); //Busca si existe el patrón en el texto y devuelve el texto
console.log(busqueda4);

//Pattern email
let patternEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
console.log(patternEmail.test('s@email.com'));