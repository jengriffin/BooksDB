const db = require('../db')
const Author = require('../models/author')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const authors = [
{
  id: 'pattylovell',
  name: 'Patty Lovell',
  books: '['']',
  bio: ''
 },
 {
  id: 'frankcottrellboyce',
  name: 'Frank Cottrell Boyce',
  books: '['']',
  bio: ''
 }

]

await Author.insertMany(authors)
console.log('Created some plants!')
}
const run = async () => {
await main()
db.close()
}

run()