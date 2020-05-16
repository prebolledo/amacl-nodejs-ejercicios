//COPIAR LISTAS

const lista = ['A','B','C']
const listaCopia = [...lista]
lista.push('D')
console.log(listaCopia)


//CONCATENAR CON SPREAD LISTAS
const listaA = [1,2,3]
const listaB = [4,5,6]
const listaC = [...listaA, ...listaB]
console.log(listaC)

//COPIAR OBJETOS

const objeto = {
    id: 1,
    lista: ['A','B','C']
}
const objetoCopia = { ...objeto }
objeto.id = 2
objeto.lista.push('D')
console.log(objetoCopia)

//REDUCTOR DE ARGUMENTOS A ARRAY
function suma(valorInicial, ...valores){
    let suma = valorInicial
    valores.forEach(valor => suma += valor)
    return suma
}

console.log(suma(10, 1,2,3,4,5,6,7,8,9,10))