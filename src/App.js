import './App.css';
import DefaultNavbar from './navBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import PhotoPage from './photoPage';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/photos' element={<PhotoPage />} />
          <Route path='/grayscale' element={<PhotoPage />} />
          <Route path='/blur' element={<PhotoPage />} />
          <Route path='/collection' element={<PhotoPage />} />
        </Routes>
    </>
  );
}

export default App;
