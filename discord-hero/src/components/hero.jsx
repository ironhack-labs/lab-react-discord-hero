function Hero(){
    return (
        <div className="App">
          <div className="navBar">
          <img className='logo' src =" ../src/assets/discord-logo-white.png" />
         <img className='menu' src =" ../src/assets/menu-icon.png" />
          </div>
      <div className="heroContent">
  <h1>IMAGINE A PLACE...</h1>
  <p>
  ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together.
   A place that makes it easy to talk every day and hang out more often.
  </p>
  <div>
  <button className='download'>Download for Mac</button>
  </div>
  <div>
  <button className='openBrowser'>Open Discord in your browser</button>
  </div>
      </div>
      <img className='bgImg'src=' ../src/assets/discord-background.png'/>
        </div>
    )
}

export default Hero