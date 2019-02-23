import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name: String): String!
        add(a: Float!, b: Float!): Float!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`


// Resolvers
const resolvers = {
    Query:{
        greeting(parent, args, ctx, info){
            return "Hello " + (args.name || "")
        },
        add(parent, args, ctx, info){
            return args.a + args.b
        },
        me(){
            return {
                id: "001",
                name: "Julio",
                email: "jurasec@gmail.com",
                age: 34
            }
        }
        ,
        post(){
            return {
                id: "005",
                title: "New Post",
                body: "Body of the post",
                published: false
            }
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