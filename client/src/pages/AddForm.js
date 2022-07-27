import { useState, useEffect } from 'react'
import axios from 'axios'

function AddForm() {
  const [issues, setIssues] = useState([])
  const initialState = {
    title: '',
    author: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  return (
    <div className="Form">
      <form>
        <h1>Add a Book!</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="image">Image HTML:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.subject}
        />
        <label htmlFor="desription"></label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {/* <h1>Add a Book:</h1>
      {book.map((newBook) => (
        <div key={newBook._id}>
          <h3>Title: {newBook.type}</h3>
          <p>Author: {newBook.subject}</p>
          <p>Image: {newBook.message}</p>
        </div>
      ))} */}
    </div>
  )
}
export default AddForm
