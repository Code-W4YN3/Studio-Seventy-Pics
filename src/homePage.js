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
        <div id="landing1"></div>
      </div>

      <div id="pageAbout">
        <h2>This is Seventy-Pics!</h2>
        <p className="pageParagraphs">We are here to provide you with access to some of the most captivating photos taken by various photographers out there.</p>
        <p className="pageParagraphs">Looking for inspiration for your next photographs? Feel free to browse through the collection of images displayed below!</p>
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