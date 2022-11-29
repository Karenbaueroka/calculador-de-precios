var precioIngresado = prompt('Ingrese el precio del producto')
var cuotasIngresadas = prompt('Ingrese la cantidad de cuotas')


function calcularInteres() {
    var precio = parseFloat(precioIngresado)
    var cuotas = parseInt(cuotasIngresadas)

    if (cuotas < 0 || cuotas > 12) alert('El numero de cuotas es invalido')
    if (precio < 0) alert('El precio es invalido')

    var interes = 1

    if (cuotas > 3) {
        interes = 1.2
    }

    if (cuotas >= 6) {
        interes = 1.5
    }

    if (cuotas >= 9) {
        interes = 1.8
    }
    
    return precio * interes
}

function calcularDescuento() {
    var descuento = 0

    if (precioIngresado >= 10000) {
        descuento = 0.05
    }

    if (precioIngresado >= 50000) {
        descuento = 0.1
    }

    if (precioIngresado >= 100000) {
        descuento = 0.2
    }
    
    return descuento
}

var precionConInteres = calcularInteres()
var descuentoAplicado = calcularDescuento()

var totalAPagar = precionConInteres - precionConInteres * descuentoAplicado
var totalPorCuotas = totalAPagar / cuotasIngresadas

alert('El precio total al pagar es: ' + totalAPagar + '. El precio por cuotas es: ' + totalPorCuotas + ' en un total de ' + cuotasIngresadas + ' cuotas')