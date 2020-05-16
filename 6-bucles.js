const lista = [1, 2, 3, 4, 5]

//For

for(let i=0; i < 5; i++ ){
    console.log(i, lista[i])
}

//For in

for(let indice in lista){
    console.log(indice, lista[indice])
}

//While

let indice = 0
while(indice < 5){
    console.log(indice, lista[indice])
    ++indice
}

//Do While

indice = 0
do{
    console.log(indice, lista[indice])
    ++indice    
}while(indice < 5)