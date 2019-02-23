const message = "Message from myModule.js"
const name = "JuraseC"
const location = "México"

const getGreeting = ( name ) => {
    return `Welcome to the course ${name}`
}

export { message , name as default, location, getGreeting }