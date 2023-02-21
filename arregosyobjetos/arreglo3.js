let equipos = [
    { nombre: "atletico nacional", titulos: 3 },
    { nombre: "Deportivo indp medellin", titulos: 1 },
    { nombre: "Junior", titulos: 1 }

]

let sumaDeTitulos = 0
equipos.forEach(function (equipo) {
    sumaDeTitulos = sumaDeTitulos + equipo.titulos
})

console.log(sumaDeTitulos)