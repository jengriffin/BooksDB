import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BooksCard from '../components/books'
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
      <section className="container-grid">
        {books.map((book) => (
          // {/* <Link to={`/view/games/${genre.id}`} key={genre.id}> */}
          <BooksCard
            title={book.title}
            image={book.image_background}
            {...book}
          />
          // {/* </Link> */}
        ))}
      </section>
    </div>
  )
}
export default Home
