const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const { book } = require('./models/book')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
// app.use(express.static(`${__dirname}/client/build`))
app.get('/', (req, res) => {
  res.send(`Hello world`)
})
// app.get('/books', async (req, res) => {
//   console.log('books')
//   let books = await book.find({})
//   res.send(books)
// })
// app.use() middleware here ^ ///////////////////

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
