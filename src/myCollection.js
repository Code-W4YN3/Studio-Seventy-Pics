import PhotoCard from "./photoCard"
import { useState } from "react"

function MyCollection({ photos, onAddPhoto, collectionPhoto, setCollectionPhoto }){
  const [ author, setAuthor ] = useState("")
  const [ download_url, setDownload_Url ] = useState("")
  const newPhoto = {author, download_url}

  function handleSubmit(e){
    fetch('http://localhost:3000/photos' , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPhoto)
    })
      .then((res)=>(res.json()))
      .then(data => onAddPhoto(data))
  }

  function handleCollectionPhoto(no){
    setCollectionPhoto(photos[no].download_url)
  }

  return(
    <div id="collectionPage">
      <h1>My Collection</h1>
      <div id="form">
        <h2>Add a Photo</h2>
        <form onSubmit={handleSubmit}>
          <label>Author:
            <input key="author" type="text" onChange={e => setAuthor(e.target.value)}></input>
          </label><br/>
          <label>Image Url:
            <input key="image" type="text" onChange={e => setDownload_Url(e.target.value)}></input>
          </label><br/>
          <input type="submit"></input>
        </form>
      </div>

      <div id="myPhotos">
        <h2>Your Photos</h2>
        <div className="selectedPhotoDiv">
          <a href={collectionPhoto}><img className="selectedPhoto" src={collectionPhoto} alt=" " /></a>
        </div>
        <div className="displayPhotos">
          {photos.map((photo ) => (
            <PhotoCard photo={photo} key={photo.id} onSelect={handleCollectionPhoto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCollection