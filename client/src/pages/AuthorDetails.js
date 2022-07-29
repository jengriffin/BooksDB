import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

import Author from '../components/Author'
const AuthorDetails = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/authors/`)

        setAuthors(res.data.authors)
      } catch (e) {
        console.error('Try again')
      }
    }
    getAuthors()
  }, [])
  console.log(authors)
  return (
    <div>
      <section>
        {authors.map((author) => (
          <Author name={author.name} books={author.books} {...author} />
        ))}
      </section>
    </div>
  )
}
export default AuthorDetails
