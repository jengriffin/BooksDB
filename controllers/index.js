const Book = require('../models/book')
const Author = require('../models/author')

// Book CRUD
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    return res.status(200).json({ books })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body)
    await book.save()
    return res.status(201).json({
      book
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//Author CRUD
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find()
    return res.status(200).json({ authors })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createBook,
  getAllAuthors,
  getAllBooks
}
