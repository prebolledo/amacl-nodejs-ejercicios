//OBJETOS CONVENCIONALES

const persona = {
    id: 1,
    nombre: 'Pablo'
}

console.log(persona)

const persona2 = Object.assign({},persona)

persona.nombre = 'Andres'

console.log(persona2)
console.log(persona)

//OBJETOS A PARTIR DE FUNCIONES

function Persona(){
    let _this = this
    this.id = null
    this.nombre = ''

    this.getNombre = function(){
        return getN()
    }

    function getN(){
        return _this.nombre
    }
}

const persona3 = new Persona()
persona3.id = 3
persona3.nombre = 'Pablo 3'

let persona4 = Object.assign({},persona3)
console.log(persona3.getNombre())
console.log(persona4.getNombre())