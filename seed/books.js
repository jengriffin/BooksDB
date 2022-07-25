const db = require('../db')
const Book = require('../models/book)

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const books = [
    name: 'Chicka Chicka Boom Boom',
    description:
      'This book is great for teaching kids about the alphabet. Its fun and engaging, and can also allow students to participate in the reading. The rhythmic pattern great for early readers.',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534457119/chicka-chicka-boom-boom-9781534457119_hr.jpg'
  ]

  await Book.insertMany(books)
  console.log('Created some plants!')
}
const run = async () => {
  await main()
  db.close()
}

run()