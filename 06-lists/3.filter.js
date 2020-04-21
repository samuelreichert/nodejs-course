const { findPeopleByName } = require('./service')

// creating my own implementation of array filter
Array.prototype.myFilter = function (callback) {
  let list = []
  for (index in this) {
    const person = this[index]
    const result = callback(person, index, this)

    if (!result) continue
    list.push(person)
  }

  return list
}

async function main() {
  try {
    const { results } = await findPeopleByName('a')

    // testing filter
    // const larsFamily = results.filter(item => {
    //   // by default must return a boolean
    //   // true -> add to the list
    //   // false -> filter from list

    //   const result = item.name.toLowerCase().indexOf('lars') >= 0
    //   return result
    // })

    // testing my own filter
    const larsFamily = results.myFilter((item) => {
      return item.name.toLowerCase().indexOf('lars') >= 0
    })

    const names = larsFamily.map(person => person.name)
    console.log(names)
  } catch (error) {
    console.error('Something went wrong!', error)
  }
}

main()