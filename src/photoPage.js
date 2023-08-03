import PhotoCard from "./photoCard"
function PhotoPage({ photos, selectedPhoto, setSelectedPhoto }){
  function handleSelectedPhoto(no){
    setSelectedPhoto(photos[no].download_url)
  }
  
  return(
    <>
      <h1 id="photoTitle"><i>Photo</i> <b>Collection</b></h1>
      <h2 id="photoH2">Sample Photos</h2>
      <div className="selectedPhotoDiv">
        <a href={selectedPhoto}><img className="selectedPhoto" src={selectedPhoto} alt=" " /></a>
      </div>
      <div className="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} onSelect={handleSelectedPhoto} />
        ))}
      </div>
    </>
  )
}

export default PhotoPage