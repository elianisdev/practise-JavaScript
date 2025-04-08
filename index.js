console.log('hola mundo ✨')
// casa comentario de una sola línea
/*
    comentario de varias líneas se crea con una barra diagonal y un asterisco.
    console.log('hola mundo ✨')
    console.log('hola mundo ✨')
 */

/* este es un comentario de varias líneas en una sola línea  */

console.log("%cHello, World", "color: blue; font-size: 40px");
console.log("Hello " + "there, " + "World") //Para enviar varias palabras a la consola, puede unirlas usando el carácter +, conocido formalmente como “operador de concatenación” cuando unimos partes de texto, o el “operador de suma”, para realizar la operación matemática de sumar dos números.
console.log("Hello", "there,", "World")
let day = "Domingo";

switch (day) {
    case 'Lunes':
        console.log('Go to the gym');
        break;
    case 'Martes':
        console.log('Attend a meeting');
        break;
    case 'Miércoles':
        console.log('Work on project');
        break;
    case 'Jueves':
        console.log('Go grocery shopping');
        break;
    case 'Viernes':
        console.log('Watch a movie');
        break;
    case 'Sábado':
        console.log('Hang out with friends');
        break;
    case 'Domingo':
        console.log('Rest and relax');
        break;
    default:
        console.log('There is no such day');
}

var edad = 10;

if (edad >= 65) {
    console.log("Usted obtiene sus ingresos de su pensión");
} else if (edad < 65 && edad >= 18) {
    console.log("Cada mes recibe un salario");
} else if (edad < 18) {
    console.log("Obtiene una asignación");
} else {
    console.log("El valor de la variable edad no es numérico");
}

// Pruebe ajustando la edad para ver diferentes resultados
edad = 70;
console.log("Edad:", edad);
if (edad >= 65) {
    console.log("Usted obtiene sus ingresos de su pensión");
} else if (edad < 65 && edad >= 18) {
    console.log("Cada mes recibe un salario");
} else if (edad < 18) {
    console.log("Obtiene una asignación");
} else {
    console.log("El valor de la variable edad no es numérico");
}
