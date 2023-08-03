import PhotoCard from "./photoCard"

function GrayPage({ photos, grayPhoto, setGrayPhoto }){
  function handleGrayPhoto(no){
    setGrayPhoto(`${photos[no].download_url}?grayscale`)
  }
  
  return(
    <>
      <h1>Sample Photos</h1>
      <div className="selectedPhotoDiv">
        <a href={grayPhoto}><img className="selectedPhoto" src={grayPhoto} alt=" " /></a>
      </div>
      <div id="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} onSelect={handleGrayPhoto} />
        ))}
      </div>
    </>
  )
}

export default GrayPage