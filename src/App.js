import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './homePage';
import PhotoPage from './photoPage';
import GrayPage from './grayPage';
import BlurPage from './blurPage';
import MyCollection from './myCollection';

function App() {
  const [ photos, setPhotos ] = useState([])
  const [ selectedPhoto, setSelectedPhoto ] = useState(``)
  const [ grayPhoto, setGrayPhoto ] = useState(``)
  const [ blurPhoto, setBlurPhoto ] = useState(``)
  const [ collection, setCollection ] = useState([])
  const [ collectionPhoto, setCollectionPhoto ] = useState(``)

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

  useEffect(()=> {
    fetch('http://localhost:3000/photos')
    .then((res)=>(res.json()))
    .then(data =>{
      setCollection(data)
      console.log(data)
      setCollectionPhoto(data[0].download_url)
    })
  }, [])

  function handleAddPhoto(newPhoto){
    setCollection([...collection, newPhoto])
  }

  return (
    <>
      <div id='navBar'>
        <Link className='navButtons' to={'/'}> Home </Link>
        <Link className='navButtons' to={'/photos'}> Photos </Link>
        <Link className='navButtons' to={'/grayscale'}> Grayscale </Link>
        <Link className='navButtons' to={'/blur'}> Blur </Link>
        <Link className='navButtons' to={'/collection'}> My Photos </Link>
      </div>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/photos' element={<PhotoPage photos={photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>} />
          <Route path='/grayscale' element={<GrayPage photos={photos} grayPhoto={grayPhoto} setGrayPhoto={setGrayPhoto} />} />
          <Route path='/blur' element={<BlurPage photos={photos} blurPhoto={blurPhoto} setBlurPhoto={setBlurPhoto}/>} />
          <Route path='/collection' element={<MyCollection photos={collection} setCollection={setCollection} collectionPhoto={collectionPhoto} setCollectionPhoto={setCollectionPhoto} onAddPhoto={handleAddPhoto} />} />
        </Routes>
    </>
  );
}

export default App;
