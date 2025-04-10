const dishData = [
    { name: "Spaghetti", price: 10 },
    { name: "Pizza", price: 12 },
    { name: "Salad", price: 8 }
];

const tax = 1.2; // Ejemplo de valor de impuesto

function getPrices(taxBoolean) {
    for (let dish of dishData) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        console.log("Dish: " + dish.name, "Price: $" + finalPrice.toFixed(2));
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === "number" && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log("Discount is: $" + discount);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Ejemplos de invocación
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(true, 0); // Argumento no válido
getDiscount(false, "five"); // Argumento no válido

//Explicación:
// getPrices():
//
//
// Itera sobre el array dishData.
// Calcula el precio final dependiendo de si taxBoolean es true o false.
// Si no se pasa un booleano, muestra un mensaje de error y detiene la ejecución.
// getDiscount():
// Llama a getPrices() con el valor de taxBoolean.
// Verifica que guests sea un número entre 1 y 29.
// Calcula el descuento según el número de invitados y lo muestra en consola.
// Si guests no cumple las condiciones, muestra un mensaje de error.
// Resultados esperados:
// getDiscount(true, 2) mostrará los precios con impuestos y un descuento de $5.
// getDiscount(false, 10) mostrará los precios sin impuestos y un descuento de $10.
// Llamadas con argumentos no válidos mostrarán mensajes de error.