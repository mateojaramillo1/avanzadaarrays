let estudiantes = Array(
    {
        nombre: "mateo",
        edad: 19,
        cedula: "1007940739"
    },

    {
        nombre: "juan",
        edad: 29,
        cedula: "1236372"
    },

)

//mapeando el arreglo

let mapa = estudiantes.map(function (estudiante) {
    estudiante.nota = 1
    estudiante.edad = estudiante.edad - 1
    return (estudiante)
})

console.log(mapa)