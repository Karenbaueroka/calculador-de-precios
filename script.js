const productos = [
    {
        "nombre": "Notebook 14\" Modelo 81WA00EJ Lenovo",
        "precio": 229999
    },
    {
        "nombre": "Microondas B120D Digital Blanco 20 Lt Bgh",
        "precio": 42999
    },
    {
        "nombre": "Secarropas B-655/2 5,5Kg Koh-I-Noor",
        "precio": 37299
    },
    {
        "nombre": "Secarropas Centrifugo Hts5503 5.5Kg Turquesa Columbia",
        "precio": 28999
    },
    {
        "nombre": "Heladera Columbia con Freezer 317L Chdp32/7 Plata",
        "precio": 152499
    },
    {
        "nombre": "Aire Acondicionado Split 3450W Fc Bsh35Wc Bgh",
        "precio": 156999
    },
    {
        "nombre": "Aire Acondicionado Split 5200W Frio/Calor \"\"A\"\" R410A Bs52Wccr BGH",
        "precio": 239999
    },
    {
        "nombre": "Microondas 28 Lt Grill B228Dbe Bgh",
        "precio": 60999
    },
    {
        "nombre": "Lavarropas 10Kg Bom Lsc10001 Columbia",
        "precio": 39999
    },
    {
        "nombre": "Secarropas Centrifugo C-755/2 Cja Koh-I-Noor",
        "precio": 38299
    },
    {
        "nombre": "Secarropas Centrifugo Hts5501 5.5Kg Rosa Columbia",
        "precio": 32499
    },
    {
        "nombre": "Notebook Ip3 14Alc6 R5 8G 256G 10S Lenovo",
        "precio": 229999
    },
    {
        "nombre": "Secarropas Cent Hts5504 5.5 Kg Verde Columbia",
        "precio": 32499
    },
    {
        "nombre": "Smart Tv Led Modelo B5022US6A Bgh",
        "precio": 139999
    },
    {
        "nombre": "Aire Acondicionado Split 2700W Fc Bsh26Wc Bgh",
        "precio": 179999
    },
    {
        "nombre": "Notebook Yoga Slim 7 14Itl05 I5 8 G 256G Lenovo",
        "precio": 289999
    },
    {
        "nombre": "Aire Acondicionado F/C 3450 W Thse35Wccr Top House",
        "precio": 164999
    },
    {
        "nombre": "Notebook Ip3 81Wa00D8 Lenovo",
        "precio": 169999
    },
    {
        "nombre": "Smart Tv 55 4K 55Nano80 Nanocel Lg",
        "precio": 279999
    },
    {
        "nombre": "Lavarropas 10 Kg Lsc 10000 Columbia",
        "precio": 34265
    },
]

const textoProductos = obtieneTextoDeEntradaParaListaDeProductos()
const productoIngresado = prompt('Ingrese el numero de producto a seleccionar: \n' + textoProductos)
const cuotasIngresadas = prompt('Ingrese la cantidad de cuotas')
const productoSeleccionado = obtieneProductoSeleccionado()

function obtieneTextoDeEntradaParaListaDeProductos() {
    return productos
        .map((producto, index) => {
            return (index + 1) + ') ' + producto.nombre + ': $' + producto.precio
        })
        .join('\n')
}

function obtieneProductoSeleccionado() {
    const producto = productos[productoIngresado - 1]

    if (!producto) {
        alert('El Producto no existe :(')
    }

    return producto
}

function calcularInteres() {
    const cuotas = parseInt(cuotasIngresadas)

    if (cuotas < 0 || cuotas > 12) alert('El numero de cuotas es invalido')

    let interes = 1

    if (cuotas > 3) {
        interes = 1.2
    }

    if (cuotas >= 6) {
        interes = 1.5
    }

    if (cuotas >= 9) {
        interes = 1.8
    }
    
    return productoSeleccionado.precio * interes
}

function calcularDescuento() {
    let descuento = 0

    if (productoSeleccionado.precio >= 50000) {
        descuento = 0.05
    }

    if (productoSeleccionado.precio >= 100000) {
        descuento = 0.1
    }

    if (productoSeleccionado.precio >= 200000) {
        descuento = 0.2
    }
    
    return descuento
}


const precioConInteres = calcularInteres()
const descuentoAplicado = calcularDescuento()

const totalAPagar = precioConInteres - precioConInteres * descuentoAplicado
const totalPorCuotas = totalAPagar / cuotasIngresadas


alert('Para el producto: ' + productoSeleccionado.nombre + ': $' + productoSeleccionado.precio + 
'.\nEl precio total al pagar es: $' + totalAPagar.toFixed(2) + 
'.\nEl precio por cuotas es: $' + totalPorCuotas.toFixed(2) + ' en un total de ' + cuotasIngresadas + ' cuotas')