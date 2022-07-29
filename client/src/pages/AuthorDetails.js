import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const AuthorDetails = () => {
  let { authorId } = useParams()

  const [authorDetails, setAuthorDetails] = useState([])

  useEffect(() => {
    const getAuthorDetails = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/authors/${authorId}`
      )
      console.log(res)
    }
    getAuthorDetails()
  }, [])

  return (
    <div className="name">
      <h1>{authorDetails.name}</h1>
    </div>
    //  <div className="books">
    //  <h3>{author.books}</h3>
    //  </div>
    //   <section className="bio">
    //     <div className="flex-row game-details">
    //       <div className="detail">
    //         <h3>{author.bio}</h3>
    //       </div>
    //       {/* <h3>Description</h3>
    //       <p>{gameDetails.description_raw}</p> */}
    //   </section>
  )
}
export default AuthorDetails
