const service = require('./service')

// creating my own implementation of array map
Array.prototype.myMap = function (callback) {
  const newMapedArray = []

  for(let i=0; i < this.length; i++) {
    const result = callback(this[i], i)

    newMapedArray.push(result)
  }

  return newMapedArray
}

async function main() {
  try {
    const results = await service.findPeopleByName('a')

    // testing forEach
    // const names = []
    // results.results.forEach(function (item) {
    //   names.push(item.name)
    // })

    // testing map
    // const names = results.results.map(function (person) {
    //   return person.name
    // })

    // testing map with arrow function in one line
    // const names = results.results.map(person => person.name)

    // testing my own map
    const names = results.results.myMap((person, i) => `[${i}]${person.name}`)

    console.log('names', names)
  } catch (error) {
    console.error('Something went wrong!', error)
  }
}

main()
