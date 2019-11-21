const bcrypt = require('bcrypt')
function creatPass(pass) {
  const saltRounds = 10
  const myPlaintextPassword = pass
  const someOtherPlaintextPassword = 'not_bacon'

  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
  return hash
}

module.exports = creatPass
