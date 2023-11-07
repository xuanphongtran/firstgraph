const { inputObjectType } = require('nexus')
const UserUniqueInput = inputObjectType({
  name: 'UserUniqueInput',
  definition(t) {
    t.int('id')
    t.string('email')
  },
})
module.exports = {
  UserUniqueInput,
}
