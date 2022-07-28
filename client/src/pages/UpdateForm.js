import { useState, useEffect } from 'react'
import axios from 'axios'
import BooksCard from '../components/Books'
import { useParams } from 'react-router-dom'
const UpdateForm = (props) => {
  let { id } = useParams()
  const [book, setBook] = useState([])
  const initialState = {
    title: '',
    author: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getBook = async () => {
      try {
        let res = await axios.put(`http://localhost:3001/api/books/${id}`)
        console.log(res)
        setBook(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getBook()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/api/books/${id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h1>Update a Book!</h1>
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
        <button type="submit">Update!</button>
      </form>
    </div>
  )
}
export default UpdateForm
