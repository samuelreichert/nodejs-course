const { findPeopleByName } = require('./service')

Array.prototype.myReduce = function(callback, initialValue) {
  let finalResult = typeof initialValue === undefined ? this[0] : initialValue

  for (let i = 0; i < this.length; i++) {
    finalResult = callback(finalResult, this[i], this)
  }

  return finalResult
}

async function main() {
  try {
    // const { results } = await findPeopleByName('a')
    // const weights = results.map(item => parseInt(item.weight))
    // console.log('weights', weights)
    // const total = weights.reduce((previous, next) => {
    //   return previous + next
    // })

    const myList = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdzao']
    ]
    console.log(myList)

    const total = myList.myReduce((previous, next) => {
      return previous.concat(next)
    }, []).join(', ')

    console.log(total)
  } catch (error) {

  }
}

main()