let animals = [
    {name: "Flufy", species: 'rabbit'},
    {name: "Flufy", species: 'dog'},
    {name: "Flufy", species: 'dog'},
    {name: "Flufy", species: 'fish'}
]

let names = animals.map((animal) => {
    return animal.name
})

console.log(names)