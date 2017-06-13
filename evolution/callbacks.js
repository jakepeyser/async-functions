const request = require('request')

// Fire off an AJAX request and use a callback to handle response
request('https://api.chucknorris.io/jokes/random', (err, res, body) => {
  if (err) { // Check to make sure an error was not returned
    console.error(err)
  } else { // Parse the AJAX response
    console.log(JSON.parse(body).value)
  }
  console.log('RESPONSE RECEIVED')
})

// Executes synchronously, so this will print before the callback code is run
console.log('REQUEST SENT')
