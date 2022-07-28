import axios from "axios"
//import { useParams } from "react-router-dom"

const BooksCard = (props) => {

  //let{id}= useParams()
console.log(props._id)
  const deleteBook=async()=>{


  await axios.delete(`http://localhost:3001/api/books/${props._id}`)
  console.log('pew!pew!')
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
  </div>
    
  )
}

export default BooksCard