let nombre = 'Pablo'
let edad = 36
let saludo = 'Hola '+nombre
console.log(saludo)

saludo = "Hola "+nombre
console.log(saludo)

//Evitar programar dentro del template

saludo = `
    Hola ${nombre}
    Cómo estas
    tu edad es ${((edad)=>{
        if(edad<37){
            ++edad
        }
        return edad
    })(edad)}
`
console.log(saludo)