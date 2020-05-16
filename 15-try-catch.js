try{
    const a = 1
    const b = 0
    if(b == 0){
        throw Error('Division por cero')
    }
    const c =  a / b
    console.log(c)

}catch(e){
    console.log(e)
}finally{
    console.log('fin')
}