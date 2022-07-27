const BooksCard = (props) => {

  return (
    <div className="card" onClick={props.onClick}>
    <div className="img-wrapper">
      <img src={props.image} alt="Title" />
    </div>
    <div className="info-wrapper flex-row">
      <h3>{props.title}</h3>
    </div>
  </div>
    
  )
}

export default BooksCard