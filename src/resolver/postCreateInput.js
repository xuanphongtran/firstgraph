const { inputObjectType } = require('nexus')
const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.string('title')
    t.string('content')
  },
})
module.exports = {
  PostCreateInput,
}
