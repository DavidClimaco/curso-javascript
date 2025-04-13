//Try-Catch
try{
    //Por ejemplo un llamado al backend
    console.log('Llamado al backend')
    //throw new Error('Algo fallo') //Lanzamos un error
    setTimeout(() => {
        console.log('El backend nos responde');
        console.log('Cliente apto para la compra');
    }, 1000);
}catch{ //El catch solo funciona de forma sincrona
    //Tomamos el error y hacemos algo con el
    console.log('Error en el llamado al backend')

}finally{
    //Ejecutamos algo independientemente del resultado
    console.log('Fin del llamado al backend')
}