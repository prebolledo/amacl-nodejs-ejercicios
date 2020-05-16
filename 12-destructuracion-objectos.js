const lista = []

lista.push({
    id: 1,
    nombre: 'Pablo Rebolledo',
    email:'pablo.rebolledo.acosta@gmail.com',
})

lista.push({
    id: 2,
    nombre: 'Fernando Montiel',
    email:'fmontielmeza@gmail.com',
})

lista.forEach(persona => {
    const { email } = persona
    console.log(/\w+/.test(email))
})
