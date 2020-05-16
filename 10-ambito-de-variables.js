//Global

const PI = 3.14

function mostrarPI(){
    console.log(PI)
}

mostrarPI()

//Bloque privado de trabajo
{
    const PI = 3.16
    console.log(PI)
}


//Ambito de Funcion

function mostrarPI2(){
    const PI = 3.15
    console.log(PI)
    this.PI = PI
}

const mp = new mostrarPI2()
console.log(mp.PI)
console.log(PI)