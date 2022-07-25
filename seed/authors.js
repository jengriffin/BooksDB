const db = require('../db')
const Author = require('../models/author')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const authors = [
    {
      name: 'Patty Lovell',
      books: 'Stand Strong Molly',
      bio: 'Patty Lovell has taught kindergarten and first grade for almost thirty years. She lives in Glen Cove, New York, with her dog, Lucy.'
    },
    {
      name: 'Frank Cottrell Boyce',
      books: 'Chitty Chitty Bang Bang Flies Again',
      bio: 'Cottrell-Boyce has won two major British awards for children`s books, the 2004 Carnegie Medal for Millions, which originated as a film script, and the 2012 Guardian Prize for The Unforgotten Coat, which was commissioned by a charity.'
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
