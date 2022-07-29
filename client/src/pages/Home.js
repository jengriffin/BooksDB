import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BooksCard from '../components/BooksCard'

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/books`)
        setBooks(response.data)
        console.log(response)
      } catch (e) {
        console.error('Try again')
      }
    }
    getBooks()
  }, [])

  return (
    <div className="books">
      <h1>Books</h1>
      <h2>
        <Link to={'./AddForm'}>Add a book!</Link>
      </h2>
      <section className="container-grid">
        {books.map((book) => (
          <BooksCard
            title={book.title}
            image={book.image_background}
            {...book}
          />
        ))}
      </section>
    </div>
  )
}
export default Home
