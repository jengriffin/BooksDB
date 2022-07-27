import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      setBooks(response.data.results)
    }
    getBooks()
  }, [])

  return (
    <div className="books">
      <h1>Books</h1>
      <section className="container-grid">
        {books.map((genre) => (
          // <Link to={`/view/games/${genre.id}`} key={genre.id}>
          <BooksCard
            title={book.title}
            image={book.image_background}
            {...book}
          />
          // </Link>
        ))}
      </section>
    </div>
  )
}
