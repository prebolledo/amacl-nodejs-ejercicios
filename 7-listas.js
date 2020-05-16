//DEFINIR

const lista = [5,6,1,3,8,2,4,10,9]
console.log(lista)
//PUSH

lista.push(7)
console.log(lista)

//COUNT > LENGTH

console.log(lista.length)

//INCLUDES

if(lista.includes(5)){
    console.log('SI incluye el 5')
}

//FIND

let elmento = null
elmento = lista.find(item => item == 6)
if(elmento != undefined){
    console.log(elmento)
}else{
    console.log('no encontrado el elemento')
}

//FINDINDEX

const index = lista.findIndex(elemento => elemento == 4)
console.log('posicion del 4',  index)

//MAP

let nuevaLista = lista.map(elemento => {
    return {
        numero: elemento
    }
})

console.log(nuevaLista)

//FILTER

nuevaLista = lista.filter(elemento => elemento > 5)
console.log(nuevaLista)

//FOREACH

lista.forEach(elemento => console.log(elemento))

//JOIN

const resultado = lista.join(',')
console.log(resultado)

//POP

lista.push(11)
console.log(lista)
lista.pop()
console.log(lista)

//REVERSE AND REVERSE DESC String

nuevaLista = lista.reverse()
console.log(nuevaLista)

const letras = ['B','C','A','D']
console.log(letras.reverse())

//SORT AND SORT X-Y AND SORT ASC String

nuevaLista = lista.sort((elemento1, elemento2) => elemento2 - elemento1 )
console.log(nuevaLista)

console.log(letras.sort())
console.log(letras.sort((a, b)=>{
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }
    return 0
}))

//SPLICE CUT

nuevaLista = lista.splice(2,2)
console.log(nuevaLista)

//KEYS AND VALUES

const keys = lista.keys()
let key 
while(! (key = keys.next()).done ){
    console.log(key)
}

const values = lista.values()
let value 
while(! (value = values.next()).done ){
    console.log(value)
}

//CONCAT

const listaA = [1,2]
const listaB = [3,4]
const listaC = listaA.concat(listaB)
console.log(listaC)