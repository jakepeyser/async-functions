const axios = require('axios')

// Fire off an AJAX response and use promises to handle the response/error
axios('https://api.chucknorris.io/jokes/random')
  .then(res => console.log(res.data.value)) // Handle successful response
  .catch(err => console.log(err)) // Handle errors
  .then(() => console.log('RESPONSE RECEIVED'))

// Executes synchronously, so this will print before the promise is resolved or rejected
console.log('REQUEST SENT')
