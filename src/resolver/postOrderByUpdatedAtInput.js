const { inputObjectType } = require('nexus')
const PostOrderByUpdatedAtInput = inputObjectType({
  name: 'PostOrderByUpdatedAtInput',
  definition(t) {
    t.nonNull.field('updatedAt', { type: 'SortOrder' })
  },
})
module.exports = {
  PostOrderByUpdatedAtInput,
}
