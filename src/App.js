import './App.css';
import { useState, useEffect } from 'react';
import DefaultNavbar from './navBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import PhotoPage from './photoPage';
import GrayPage from './grayPage';
import BlurPage from './blurPage';

function App() {
  const [ photos, setPhotos ] = useState([])
  const [ selectedPhoto, setSelectedPhoto ] = useState(``)
  const [ grayPhoto, setGrayPhoto ] = useState(``)
  const [ blurPhoto, setBlurPhoto ] = useState(``)

  useEffect(()=>{
    fetch('https://picsum.photos/v2/list')
    .then((res)=> (res.json()))
    .then(data => {
      setPhotos(data)
      console.log(data)
      setSelectedPhoto(data[0].download_url)
      setGrayPhoto(data[0].download_url)
      setBlurPhoto(data[0].download_url)
    })
  }, [])
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/photos' element={<PhotoPage photos={photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>} />
          <Route path='/grayscale' element={<GrayPage photos={photos} grayPhoto={grayPhoto} setGrayPhoto={setGrayPhoto} />} />
          <Route path='/blur' element={<BlurPage photos={photos} blurPhoto={blurPhoto} setBlurPhoto={setBlurPhoto}/>} />
          <Route path='/collection' element={<PhotoPage />} />
        </Routes>
    </>
  );
}

export default App;
