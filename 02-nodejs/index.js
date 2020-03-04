/*
 0 Get an user;
 1 Get the phone number of an user from your Id;
 2 Get the address of an user from your Id;
*/

function getUser(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      name: 'Aladdin',
      dataNascimento: new Date(),
    })
  }, 1000)
}

function getPhoneNumber(userId, callback) {
  setTimeout(function() {
    return callback(null, {
      phone: '11009002',
      ddd: 11
    })
  }, 2000)
}

function getAddress(userId, callback) {
  setTimeout(function() {
    return callback(null, {
      street: 'Prinsengracht',
      number: 267
    })
  }, 3000)
}

const user = getUser(function userResolver(error, user) {
  if(error) {
    console.error('Got an Error in getUser', error)
    return
  }

  getPhoneNumber(user.id, function(error1, phone) {
    if(error1) {
      console.error('Got an Error in getPhoneNumber', error1)
      return
    }

    getAddress(user.id, function(error2, address) {
      if(error2) {
        console.error('Got an Error in getAddress', error2)
        return
      }

      console.log(`
        Name: ${user.name},
        Address: ${address.street}, ${address.number},
        Phone: (${phone.ddd})${phone.phone}
      `)
    })
  })
})
