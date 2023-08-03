function HomePage(){
  return(
    <>
      <div id="landingPhotos">
        <img className="coverPhoto" src="./cover.jpg" alt=" " />
      </div>

      <div id="triPhotos">
        <img className="triPhotos" src="./home2.jpg" alt="" />
        <img className="triPhotos" src="./home1.jpg" alt="" />
        <img className="triPhotos" src="./home3.jpg" alt="" />
      </div>

      <div id="pageAbout">
        <h2>This is Seventy-Pics!</h2>
        <p className="pageParagraphs">We are here to provide you with access to some of the most captivating photos taken by various photographers out there.</p>
        <p className="pageParagraphs">Looking for inspiration for your next photographs? Feel free to browse through the collection of images displayed below!</p>
        <div className="filterDivs">
        <div id="filterDivText">
          <h2>Going Gray?</h2>
          <p>Test out the grayscale filter in the grayscale page!</p>
        </div>
          <img id="filterDivImage" src="https://picsum.photos/500/300?grayscale" />
        </div>
      </div>

      
    </>
  )
}

export default HomePage