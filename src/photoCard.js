function PhotoCard({ photo }){
  return(
    <div className="photoCard">
      <img className="homePhotos" src={photo.download_url} />
      <h3>By: {photo.author}</h3>
    </div>
  )
}

export default PhotoCard