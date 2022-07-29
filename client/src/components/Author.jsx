import axios from 'axios'
const Author = (props) => {

  // const getAuthor=async()=>{
  //   await axios.get(`http://localhost:3001/api/authors/${props._id}`)
    
  // }
 
  return (
    <div className="card">
    <div className="img-wrapper">
    <h3>{props.name}</h3>
    </div>
    <div className="info-wrapper flex-row space">
      <h3>{props.books}</h3>
      <div>
      <h1>{props.bio}</h1>
      </div>
    </div>
  </div>
  )
}
export default Author

