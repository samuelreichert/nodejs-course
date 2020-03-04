/*
 0 Get an user;
 1 Get the phone number of an user from your Id;
 2 Get the address of an user from your Id;
*/

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
    }, 1000)
  })
}

function getPhoneNumber(userId) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        phone: '11009002',
        ddd: 11
      })
    }, 1000)
  })
}

function getAddress(userId, callback) {
  setTimeout(function() {
    return callback(null, {
      street: 'Prinsengracht',
      number: 267
    })
  }, 1000)
}

const userPromise = getUser()

userPromise
  .then(function(user) {
    return getPhoneNumber(user.id)
      .then(function phoneResolver(result) {
        return {
          user: {
            id: user.id,
            name: user.name,
          },
          phone: result
        }
      })
  })
  .then(function(result1) {
    const address = getAddressAsync(result1.user.id)

    return address.then(function addressResolver(result2) {
      return {
        user: result1.user,
        phone: result1.phone,
        address: result2
      }
    })
  })
  .then(function(result) {
    console.log(`
      Name: ${result.user.name}
      Address: ${result.address.street}, ${result.address.number}
      Phone: (${result.phone.ddd}) ${result.phone.phone}
    `)
  })
  .catch(function(error) {
    console.error('Got bad', error)
  })
