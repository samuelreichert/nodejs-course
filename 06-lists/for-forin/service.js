const axios = require('axios')
const URL = 'https://swapi.co/api/people'

const findPeopleByName = async (name) => {
  const result = await axios.get(`${URL}/?search=${name}&format=json`)
  return result.data
}

module.exports = { findPeopleByName }
