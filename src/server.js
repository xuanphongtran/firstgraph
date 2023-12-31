const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { schema } = require('./schema')
const { createContext } = require('./db')

const start = async () => {
  const server = new ApolloServer({ schema })

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  })

  console.log(`\
  🚀 Server ready at: ${url}
    `)
}

start()
