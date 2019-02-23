import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        id: ID!
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean
    }
`


// Resolvers
const resolvers = {
    Query:{
        id(){
            return 'abc123'
        },
        title(){
            return 'Ready Player One'
        },
        price(){
            return '20.50'
        },
        releaseYear(){
            return 2011
        },
        rating(){
            return 10
        },
        inStock(){
            return true
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