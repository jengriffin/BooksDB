const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const { book } = require('./models/book')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
