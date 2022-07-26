const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Author = new Schema(
  {
    name: { type: String, required: true },
    books: { type: String, required: true },
    bio: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Author', Author)
