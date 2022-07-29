const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/books', controllers.getAllBooks)
router.post('/books', controllers.createBook)
router.get('/books/:id', controllers.getBookId)
router.put('/books/:id', controllers.updateBook)
router.delete('/books/:id', controllers.deleteBook)
router.get('/authors', controllers.getAllAuthors)
router.get('/authors/:id', controllers.getAuthorId)
router.put('/authors/:id', controllers.updateAuthor)
router.post('/authors', controllers.createAuthor)
router.delete('/authors/:id', controllers.deleteAuthor)

module.exports = router
