const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      // return reject(new Error('We have a problem!'))

      return resolve({
        id: 1,
        name: 'Aladdin',
        birthDate: new Date(),
      })
    }, 500)
  })
}

function getPhone(userId) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        phone: '99999-9999',
        ddd: 51
      })
    }, 500)
  })
}

function getAddress(userId, callback) {
  setTimeout(function() {
    return callback(null, {
      street: 'Av. Brasil',
      number: 100
    })
  }, 500)
}

async function main() {
  try {
    console.time('medida-promise')
    const user = await getUser()
    const result = await Promise.all([
      getPhone(user.id),
      getAddressAsync(user.id)
    ])

    const { ddd, phone } = result[0]
    const { street, number } = result[1]

    console.log(`
      Name: ${user.name},
      Phone: (${ddd}) ${phone},
      Address: ${street}, ${number}
    `)
    console.timeEnd('medida-promise')
  } catch(error) {
    console.error('Something went wrong', error)
  }
}

main()
