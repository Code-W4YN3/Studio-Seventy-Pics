function PhotoCard({ photo, onSelect }){
  function handleClick(){
    onSelect(photo.id)
  }
  return(
    <div className="photoCard">
      <img className="homePhotos" src={photo.download_url} />
      <div className="photoCardDetails">
      <h3 className="photoAuthor">By: {photo.author}</h3>
      <button className="photoCardButton" onClick={handleClick}>Preview</button>
      </div>
    </div>
  )
}

export default PhotoCard