//REDUCIR ARREGLO
/*
    {
        "1": {
            "facturas":[123,122]}
        },
        ...
    }
*/

const facturas = []

facturas.push({idCliente:1, numeroFactura: 123})
facturas.push({idCliente:1, numeroFactura: 122})
facturas.push({idCliente:2, numeroFactura: 124})
facturas.push({idCliente:3, numeroFactura: 125})
facturas.push({idCliente:4, numeroFactura: 141})
facturas.push({idCliente:4, numeroFactura: 142})
facturas.push({idCliente:4, numeroFactura: 143})

const clientes = facturas.reduce((clientes, elemento) => {

    if(clientes[elemento.idCliente] == undefined){
        clientes[elemento.idCliente] = {
            facturas: []
        }
    }

    clientes[elemento.idCliente].facturas.push(elemento.numeroFactura)

    return clientes

}, {})

console.log(clientes[4].facturas)



//SUMAR LISTA DE NUMEROS REDUCIENDO

const lista = [1,2,3,4,5,6,7,8,9,10]

const suma = lista.reduce((suma, numero) => {
    suma += numero
    return suma
},0)

console.log(suma)