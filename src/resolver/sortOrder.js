const { enumType } = require('nexus')

const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})
module.exports = {
  SortOrder,
}
