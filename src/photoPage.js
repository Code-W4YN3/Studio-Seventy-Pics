import PhotoCard from "./photoCard"
function PhotoPage({ photos, selectedPhoto, setSelectedPhoto }){
  function handleSelectedPhoto(no){
    setSelectedPhoto(photos[no].download_url)
  }
  
  return(
    <>
      <h1>Sample Photos</h1>
      <div className="selectedPhotoDiv">
        <a href={selectedPhoto}><img className="selectedPhoto" src={selectedPhoto} alt=" " /></a>
      </div>
      <div id="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} onSelect={handleSelectedPhoto} />
        ))}
      </div>
    </>
  )
}

export default PhotoPage