//Clonar objetos y romper todas las referencias
//Haciendo uso de JSON.parse y JSON.stringify
const objeto = {
    id: 1,
    lista: ['A','B','C']
}
const objetoCopia =  JSON.parse(JSON.stringify(objeto))
objeto.id = 2
objeto.lista.push('D')
console.log(objetoCopia)
console.log(objeto)