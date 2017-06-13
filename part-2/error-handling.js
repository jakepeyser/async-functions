const { getUser, getUserPassport } = require('./utils')
const axios = require('axios')

// Axios will throw a 404 because API endpoint does not exist!
async function runBackgroundCheck(user, passport) {
  const res = await axios(`http://catalog.data.gov/api/3/background?ssn=${user.ssn}&pid=${passport.number}`)
  return res.data.result
}

// Ye olde way
// getUser('/api/users/123')
//   .then(user => {
//     getUserPassport(`/api/passports/${user.passportId}`)
//       .then(passport => runBackgroundCheck(user, passport))
//       .then(pass => console.log('check passed:', pass))
//       .catch(err => {
//         console.error('Error processing user\'s background check:' )
//         console.error(`${err.response.status} ~ ${err.response.statusText}`)
//       })
//   })

(async () => {
  try {
    const user = await getUser('/api/users/123')
    const passport = await getUserPassport(`/api/passports/${user.passportId}`)
    const pass = await runBackgroundCheck(user, passport)
    console.log('check passed:', pass)
  } catch (err) {
    console.error('Error processing user\'s background check:' )
    console.error(`${err.response.status} ~ ${err.response.statusText}`)
    // Handle failure accordingly
  }
})()
