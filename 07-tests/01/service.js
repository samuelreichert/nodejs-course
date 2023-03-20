const { get } = require("axios");

const URL = "https://swapi.co/api/people";

async function getCharacters(name) {
  const url = `${URL}/?search=name&format=json`;
  const result = await get(url);
  return result.data;
}

module.exports = {
  getCharacters,
};
