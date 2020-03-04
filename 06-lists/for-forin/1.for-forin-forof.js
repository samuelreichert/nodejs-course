const service = require('./service')

async function main() {
  try {
    const result = await service.findPeopleByName('a')
    const names = []

    console.time('for')
    for(let i=0; i < result.results.length; i++) {
      const person = result.results[i]
      names.push(person.name)
    }
    console.timeEnd('for')

    console.time('forIn')
    for(let i in result.results) {
      const person = result.results[i]
      names.push(person.name)
    }
    console.timeEnd('forIn')

    console.time('forOf')
    for(person of result.results) {
      names.push(person.name)
    }
    console.timeEnd('forOf')

    console.log('names', names)
  } catch(error) {
    console.error('Internal error', error)
  }
}

main()
