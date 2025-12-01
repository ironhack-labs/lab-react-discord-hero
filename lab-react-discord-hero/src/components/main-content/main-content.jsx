
import './main-content.css';

function MainContent() {
    return (
        <div className='main text-align-left box-width text-font color-white font-text-size'>
            <h1 className='title font-title-size margin-padding-zero'>IMAGINE A PLACE...</h1>
            <p className='subtitle'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className='buttons gap'>
                <div className='download'>Download for Mac</div>
                <div className='open'>Open Discord in your browser</div>
            </div>
        </div>
    )
}

export default MainContent;