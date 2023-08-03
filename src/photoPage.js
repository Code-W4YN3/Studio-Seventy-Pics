import PhotoCard from "./photoCard"
import { useState, useEffect } from "react"

function PhotoPage(){
  const [ photos, setPhotos ] = useState([])
  useEffect(()=>{
    fetch('https://picsum.photos/v2/list')
    .then((res)=> (res.json()))
    .then(data => setPhotos(data))
  }, [])
    console.log(photos)

  return(
    <>
      <h1>Sample Photos</h1>
      <div id="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </>
  )
}

export default PhotoPage