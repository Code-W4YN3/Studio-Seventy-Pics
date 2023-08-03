import PhotoCard from "./photoCard"

function GrayPage({ photos, grayPhoto, setGrayPhoto }){
  function handleGrayPhoto(no){
    setGrayPhoto(`${photos[no].download_url}?grayscale`)
  }
  
  return(
    <div id="grayPage">
      <div className="pageH1">
      <h2 id="grayTitle" className="pageTitles"> Studio</h2>
        <h1 id="grayTitle2" className="pageTitles2"><i>Seventy-</i><b>Pics</b></h1>
      </div>
      
      <div id="landingPhotos">
        <img className="coverPhoto" src="./coverBW.jpg" alt=" " />
      </div>

      <div id="triPhotos">
        <img className="grayTriPhotos" src="./grayscale1.jpg" alt="" />
        <img className="grayTriPhotos" src="./grayscale2.jpg" alt="" />
        <img className="grayTriPhotos" src="./grayscale3.jpg" alt="" />
      </div>
      
      <div className="graySpace">
        <h1 className="grayHeader">Test The Color-Wash</h1>
      </div>

      <div className="selectedPhotoDiv">
        <a href={grayPhoto}><img className="graySelectedPhoto" src={grayPhoto} alt=" " /></a>
      </div>
      <div id="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} onSelect={handleGrayPhoto} />
        ))}
      </div>
    </div>
  )
}

export default GrayPage