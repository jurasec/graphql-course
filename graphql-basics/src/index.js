import { GraphQLServer } from 'graphql-yoga'


// Demo user data
const users = [{
    id: '1',
    name: 'Jurasec',
    email: 'jurasec@gmail.com',
    age: 34
},{
    id: '2',
    name: 'Susy',
    email: 'susy@gmail.com',
    age: 34
},{
    id: '3',
    name: 'Mike',
    email: 'mike@gmail.com',
    age: 34
}]

// Demo post data
const posts = [{
    id: '1',
    title: 'Post 1',
    body: 'body body body post 1',
    published: true
},{
    id: '2',
    title: 'Post 2',
    body: 'some new post',
    published: true
},{
    id: '3',
    title: 'Post 3',
    body: 'old post 3',
    published: false
}]

// Type definitions (schema)
const typeDefs = `
    type Query { 
        users(query: String): [User!]!
        posts(query: String): [Post!]!
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
        users(parent, args, ctx, info){
            if (!args.query){
                return users
            }

            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        posts(parent, args, ctx, info){
            if (!args.query){
                return posts
            }

            return posts.filter((post) => {
                return post.body.toLowerCase().includes(args.query.toLowerCase())
            })
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