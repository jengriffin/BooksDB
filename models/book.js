const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true, required: true }
)

module.exports = mongoose.model('Book', Book)
