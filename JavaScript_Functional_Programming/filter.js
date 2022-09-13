let animals = [
    {name: "Flufy", species: 'rabbit'},
    {name: "Flufy", species: 'dog'},
    {name: "Flufy", species: 'dog'},
    {name: "Flufy", species: 'fish'}
]

let dog = animals.filter((animals) => {
    return animals.species === 'dog'
})
console.log(dog)