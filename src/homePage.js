function HomePage(){
  return(
    <div id="homePage">
      <div className="pageH1">
      <h2 id="grayTitle" className="pageTitles"> Studio</h2>
        <h1 id="grayTitle2" className="pageTitles2"><i>Seventy-</i><b>Pics</b></h1>
      </div>

      <div id="landingPhotos">
        <img className="coverPhoto" src="./cover.jpg" alt=" " />
      </div>

      <div id="triPhotos">
        <img className="triPhotos" src="./home2.jpg" alt="" />
        <img className="triPhotos" src="./home1.jpg" alt="" />
        <img className="triPhotos" src="./home3.jpg" alt="" />
      </div>

      <div id="pageAbout">
        <h2 id="pageAboutH2">This is <i>Seventy-</i><b>Pics!</b></h2>
        <p className="pageParagraphs">We are here to provide you with access to some of the most captivating photos taken by various photographers out there. 
          Looking for inspiration for your next photographs? A new wallpaper? Just looking to explore ?Feel free to browse through the collection of images displayed below!
           Feel free to try out the filters availed as well and more to come</p>
        <div className="filterDivs">
          <div id="filterDivText">
            <h2>Going Gray?</h2>
            <p>Test out the grayscale filter in the grayscale page!</p>
          </div>
          <img id="filterDivImage" src="https://picsum.photos/500/300?grayscale" />
        </div>
        <div className="filterDivs">
          <div id="filterDivText2">
            <h2>Say Haze!</h2>
            <p>Test out the blur filter in the blur filter page!</p>
          </div>
          <img id="filterDivImage2" src="https://picsum.photos/500/300?blur=10" />
        </div>
        
      </div>
    </div>
  )
}

export default HomePage