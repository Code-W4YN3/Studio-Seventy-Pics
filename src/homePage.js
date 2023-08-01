import { useState, useEffect } from "react";
import PhotoCard from "./photoCard";

function HomePage(){
  const [ photos, setPhotos ] = useState([])
  useEffect(()=>{
    fetch('https://picsum.photos/v2/list')
    .then((res)=> (res.json()))
    .then(data => setPhotos(data))
  }, [])
    console.log(photos)
  return(
    <>
      <div id="landingPhotos">
        <h1>landing images here</h1>
      </div>
      <div id="displayPhotos">
        {photos.map((photo ) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </>
  )
}

export default HomePage