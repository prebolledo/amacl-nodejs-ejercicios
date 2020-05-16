//Funciones convencionales

function sumar(a, b){
    return a + b
}

console.log(sumar(1,2))

const sumar2 = function(a, b){
    return a + b
}

console.log(sumar2(5,2))

function valores(){
    let  suma = 0
    for(let indice in arguments){
        suma += arguments[indice]
    }
    return suma
}

console.log(valores(1,2,3,4,5,6,6))

function valorPorDefecto(a, b = 2){
    console.log(a, b)
}

valorPorDefecto(1)

//Funciones Arrow

const sumar3 = (a, b) => a + b

console.log(sumar3(2,6))

const mostrarNombre = nombre => console.log(nombre)
mostrarNombre('Pablo')

const evaluarNota = nota => {
    if(nota > 4){
        console.log('Pasaste de curso')
    }else{
        console.log('No pasaste')
    }

    return true
}

evaluarNota(3)


//Ambito de las funciones

function multiplicar(a, b){
    this.a = a
    this.b = b

    this.multiplicarInterno = function(){
        return this.a * this.b
    }

    return multiplicarInterno()
}

console.log(multiplicar(2,4))
