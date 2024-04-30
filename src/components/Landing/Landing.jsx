import './Landing.css'

function Landing() {
    return (
        <div className='Background'>
            <div className='Landing'>
                <div className='title'>IMAGINE A PLACE...</div>
                <div className='pitch'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                <button className='macButton' type="button">Download for Mac</button>
                <button className='browserButton' type="button">Open Discord in your browser</button>
            </div>
        </div>
    )
}

export default Landing