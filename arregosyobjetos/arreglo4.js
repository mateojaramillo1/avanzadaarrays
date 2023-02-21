let inmuebles = [
    { id: 1, nombre: "el VIP", direccion: "calle 100" },
    { id: 1, nombre: "Provenza", direccion: "calle 85" },
    { id: 3, nombre: "el raudal", direccion: "calle 10" }
]

let buscador = inmuebles.find(function (inmueble) {
    return (inmueble.id == 1)
})

console.log(buscador);

let buscador2 = inmuebles.filter(function (inmueble) {
    return (inmueble.id == 1)
})

console.log(buscador2);

let buscador3 = inmuebles.some(function (inmueble) {
    return (inmueble.id == 1)
})

console.log(buscador3);