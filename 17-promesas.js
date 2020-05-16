//THEN CATCH

const getPersona = (id) => {
    return new Promise((resolve, reject) => {
        if(id > 0){
            const clearTO = setTimeout(() => {
                resolve({
                    id:id, 
                    nombre: 'Pablo'
                })
                clearTimeout(clearTO)
            }, 2000)
        }else{
            reject(new Error('Error al obtener persona'))
        }
    })
}

console.log('Inicio Asincrono')

getPersona(1)
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log('Fin Asincrono')    

//ASYNC AWAIT

;(async function(){
    console.log('Inicio Asincrono con Async Await')
    try{
        const data = await getPersona(1)
        console.log(data)
    }catch(e){
        console.log(e)
    }
    console.log('Fin Asincrono  con Async Await')    
}())



//PRIMESE ALL

const listaDePromesas = []
listaDePromesas.push(new Promise((resolve, reject) => {
    resolve('OK 1')
}))

listaDePromesas.push(new Promise((resolve, reject) => {
    resolve('OK 2')
}))

;(async function(){
    const results = await Promise.all(listaDePromesas)
    console.log(results)
}())