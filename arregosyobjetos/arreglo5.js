let numeros = [10,20,30,40,50,60,70,80,90,100]

//Filtrar los numeros mayores o iguales a 50

//mapear el filro y restar cada elemento del arreglo 10

//encontrar si esta el numero 10

let numerosMayores50 = numeros.filter(function(numero){
    return(numero>=50)
})



numerosMenos10=numerosMayores50.map(function(numero){
    return(numero=numero-10)
})


let numeroEncontrado=numerosMayores50.some(function(numero){
    return(numero==10)
})

console.log(numeroEncontrado)



