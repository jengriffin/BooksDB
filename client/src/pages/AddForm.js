import { useState, useEffect } from 'react'
import axios from 'axios'

const AddForm = () => {
  const [book, setBook] = useState([])
  const initialState = {
    title: '',
    author: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getBooks = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/books')
        setBook(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getBooks()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/api/books', formState)
    console.log(res)
    setFormState(initialState)
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h1>Add a Book!</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          onChange={handleChange}
          value={formState.author}
        />
        <label htmlFor="image">Image HTML:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        {/* <label htmlFor="desription"></label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.desription}
        ></textarea> */}
        <button type="submit">Sumbit!</button>
      </form>
      {/* {book.map((book) => (
        <div key={book._id}>
          <h3>Title: {book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Image: {book.image}</p>
        </div>
      ))} */}
    </div>
  )
}
export default AddForm
