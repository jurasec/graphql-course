import name, { message, location, getGreeting } from './myModule'
import {add, subtract} from './math'
 
console.log( message )
console.log( name )
console.log( location )
console.log( getGreeting('Julio') )
console.log( add(10, -2) )
console.log( subtract(10, 2) )