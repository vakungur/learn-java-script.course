var person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    fiends: ['Elena', 'Igor']
}

var str = JSON.stringify(person)

console.log(str)
console.log(JSON.parse(str))