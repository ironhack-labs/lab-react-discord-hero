import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <h1 className='header__h1'>IMAGINE A<span>PLACE...</span></h1>

        <p className='header__p'>
            ...where you can belong to a school club, a gaming group,<br></br>
            or a worldwide art community. Where just you and a handful <br></br>
            of friends can spend time together. A place that makes it <br></br>
            ease to talk every day and hang out more often. <br></br>
        </p>
        <div className="header__buttons">
            <button className='header__button header__button-white'>Download for Mac</button>
            <button className='header__button header__button-black'>Open Discord in your browser</button>
        </div>

    </header>
  )
}

export default Header