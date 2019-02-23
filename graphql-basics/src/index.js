import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String
    }
`


// Resolvers
const resolvers = {
    Query:{
        hello(){
            return 'This is my first query!'
        },
        name(){
            return 'My name is Julio'
        },
        location(){
            return 'México'
        },
        bio(){
            return 'I\'am from México and I like to play videgames'
        }   
    }
}

// Server

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

server.start(() => {
    console.log("Server running...")
} )