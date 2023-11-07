const { makeSchema, asNexusMethod } = require('nexus')
const { DateTimeResolver } = require('graphql-scalars')
const { Query } = require('./resolver/query')
const { Mutation } = require('./resolver/mutation')
const { Post } = require('./resolver/post')
const { User } = require('./resolver/user')
const { UserUniqueInput } = require('./resolver/userUniqueInput')
const { UserCreateInput } = require('./resolver/userCreateInput')
const { PostCreateInput } = require('./resolver/postCreateInput')
const { SortOrder } = require('./resolver/sortOrder')
const { PostOrderByUpdatedAtInput } = require('./resolver/postOrderByUpdatedAtInput')

const DateTime = asNexusMethod(DateTimeResolver, 'date')

const schema = makeSchema({
  types: [
    Query,
    Mutation,
    Post,
    User,
    UserUniqueInput,
    UserCreateInput,
    PostCreateInput,
    SortOrder,
    PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

module.exports = {
  schema: schema,
}
