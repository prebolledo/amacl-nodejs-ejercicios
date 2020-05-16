//Sentencia if / else

const valorVeracidad = true

if(valorVeracidad){
    console.log('TRUE')
}else{
    console.log('FALSE')
}

const alternativa = 1

if(alternativa == 1){
    console.log('es uno')
}else if(alternativa == 2){
    console.log('es dos')
}else{
    console.log('es otro numero')
}


//Sentencia Switch Case

const letra = 'A'

switch(letra){
    case 'A': {
        console.log('es A')
        break
    }
    case 'B': {
        console.log('es B')
        break
    }
    default : {
        console.log('es otra letra')
    }
}

