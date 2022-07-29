import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Author from '../components/Author'
const AuthorDetails = () => {
  const [authors, setAuthors] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/authors/`)
        console.log(res.data)
        setAuthors(res.data)
      } catch (e) {
        console.error('Try again')
      }
    }
    getAuthors()
  }, [])

  return (
    <section>
      {authors.map((author) => (
        <Author name={author.name} books={author.books} {...author} />
      ))}
    </section>
  )
}
export default AuthorDetails
