/* This file exists strictly for supplementary purposes */
const { delay } = require('awaiting')

async function getUser(path) {
  await delay(250)
  return {
    id: 123,
    name: 'John Doe',
    ssn: '123-4567-89',
    passportId: 321
  }
}

async function getUserPassport(path) {
  await delay(250)
  return {
    id: 321,
    number: '123456789',
    country: 'USA'
  }
}

async function runBackgroundCheck(user, passport) {
  await delay(250)
  return user.id === 123 && passport.id === 321
}

module.exports = {
  getUser,
  getUserPassport,
  runBackgroundCheck
}
