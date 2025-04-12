//String to Number
//Number (), parseInt(), parseFloat()
let numero = Number("10");
console.log(numero);
console.log(typeof numero);

//Number to String
//toString(), String()
let string = String(10);
let string2 = (10).toString();
console.log(string);
console.log(string2);
console.log(typeof string + " " + typeof string2);

//Date to Number
//getTime(), Number()
let date = new Date();
let numberDate = Number(date);
console.log(numberDate);
console.log(typeof numberDate);

//Date to String
//toString(), String()
let dateString = date.toString();
let dateString2 = (date).toString();
console.log(dateString);
console.log(dateString2);
console.log(typeof dateString + " " + typeof dateString2);

//Number to Boolean
//Boolean(), Number()
let boolean = Boolean(1);
let boolean2 = Boolean(0); //Se debe tener cuidado con el 0 ya que es false en Boolean y para las condicionales se interpreta como false
console.log(boolean);
console.log(boolean2);
console.log(typeof boolean + " " + typeof boolean2);