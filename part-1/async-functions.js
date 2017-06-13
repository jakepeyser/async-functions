const axios = require('axios');

// Fire off an AJAX response and use async/await to block context execution until promise resolves/rejects
const getJoke = async () => {
  try { // Handle a promise's resolved value with a normal assignment operator
    const res = await axios('https://api.chucknorris.io/jokes/random')
    console.log(res.data.value)
  } catch (err) { // Handle errors with a normal 'catch' block
    console.log(err)
  }
  console.log('RESPONSE RECEIVED')
}

getJoke()
console.log('REQUEST SENT')
