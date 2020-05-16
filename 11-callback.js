
const sumar = (numero, callback) => {
    return numero + callback(numero)
}

const resultado = sumar(2, numero => numero * 2)
console.log(resultado)

const lista = [1, 2, 3]
const transformarLista = (lista, callback) => {
    const nuevaLista = []
    for(let i in lista){
        nuevaLista.push(callback(lista[i]))
    }

    return nuevaLista
}

const nuevaLista = transformarLista(lista, elemento => {
    return {
        dato: elemento
    }
})

console.log(nuevaLista)