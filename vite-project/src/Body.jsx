import './Body.css'
import background from './assets/discord-background.png'
function Body() {
    return (
        <div className='body'>
            <h1>IMAGINE A PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <button className='button'>Download for Mac</button>
            <button className='button'>Open Discord in your browser</button>
            <img className="image" src= {background} alt="background"/>
        </div>
    )
}

export default Body;