const { getUser, getUserPassport, runBackgroundCheck } = require('./utils');

// Ye olde way
// getUser('/api/users/123')
//   .then(user => {
//     getUserPassport(`/api/passports/${user.passportId}`)
//       .then(passport => runBackgroundCheck(user, passport))
//       .then(pass => console.log('user passed:', pass))
//   })

(async () => {
  const user = await getUser('/api/users/123')
  const passport = await getUserPassport(`/api/passports/${user.passportId}`)
  const pass = await runBackgroundCheck(user, passport)
  console.log('check passed:', pass)
})()
