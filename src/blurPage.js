import PhotoCard from "./photoCard"

function BlurPage({ photos, blurPhoto, setBlurPhoto }){
  function handleBlurPhoto(no){
    setBlurPhoto(`${photos[no].download_url}?blur=10`)
  }
  
  return(
    <div id="blurPage">
      <div className="pageH1">
      <h2 id="blurTitle" className="pageTitles"> Studio</h2>
        <h1 id="blurTitle2" className="pageTitles2"><i>Seventy-</i><b>Pics</b></h1>
      </div>
      
      <div id="landingPhotos">
        <img className="coverPhoto" src="./coverBlur.jpg" alt=" " />
      </div>

      <div id="triPhotos">
        <img className="triPhotos" src="./blur1.jpg" alt="" />
        <img className="triPhotos" src="./blur2.jpg" alt="" />
        <img className="triPhotos" src="./blur3.jpg" alt="" />
      </div>
      
      <div className="graySpace">
        <h1 className="grayHeader">Try Lose Focus</h1>
      </div>

      <div className="selectedPhotoDiv">
        <a href={blurPhoto}><img className="graySelectedPhoto" src={blurPhoto} alt=" " /></a>
      </div>
      <div className="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} onSelect={handleBlurPhoto} />
        ))}
      </div>
    </div>
  )
}

export default BlurPage