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

const getBookId = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    if (book) {
      return res.status(200).json({ book })
    }
    return res.status(404).send('Book with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(book)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Book.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Book deleted')
    }
    throw new Error('Book not found')
  } catch (error) {
    return res.status(500).send(error.message)
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
const getAuthorId = async (req, res) => {
  try {
    const { id } = req.params
    const author = await Author.findById(id)
    if (author) {
      return res.status(200).json({ author })
    }
    return res.status(404).send('Author with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(author)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Author.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Author deleted')
    }
    throw new Error('Author not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createBook,
  getAllAuthors,
  getAllBooks,
  updateBook,
  getBookId,
  deleteBook,
  getAuthorId,
  updateAuthor,
  deleteAuthor
}
