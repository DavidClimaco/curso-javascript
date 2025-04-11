//Date
let date = new Date();

//FullYear
console.log(date.getFullYear());

//Month
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses[date.getMonth()]);

//Day
console.log(date.getDay());
console.log(date+'');

let fechaCompleta = date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getFullYear();
console.log(fechaCompleta);
