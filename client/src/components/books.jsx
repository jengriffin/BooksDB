import axios from "axios"
import { Link } from 'react-router-dom'


const BooksCard = (props) => {

  
console.log(props._id)
  const deleteBook=async()=>{
  await axios.delete(`http://localhost:3001/api/books/${props._id}`)
  
}



const updateBook=async()=>{
  await axios.updateBook(`http://localhost:3001/api/books/${props._id}`)
  
}


  return (
    <div className="card" >
    <div className="img-wrapper">
      <img src={props.image} alt="Title" />
    </div>
    <div className="info-wrapper flex-row">
      <h3>{props.title}</h3>
    </div>
    <div>
      {props.author}
    </div>
    <button onClick={deleteBook}>Delete</button>
    <h5>
        <Link to={'./UpdateForm'}>Update a book!</Link>
      </h5>
  </div>
    
  )
}

export default BooksCard