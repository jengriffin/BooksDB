const Author = (props) => {
  return (
    <div className="card game-card">
    <div className="img-wrapper">
    <h3>{props.name}</h3>
    </div>
    <div className="info-wrapper flex-row space">
      <h3>{props.books}</h3>
      <h1>{props.bio}</h1>
    </div>
  </div>
  )
}
export default Author

