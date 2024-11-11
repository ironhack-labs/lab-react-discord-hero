import discordians from '../assets/discord-background.png';

function Content() {
    return (
        <div className='content'>
            <h1>IMAGINE A PLACE...</h1>
            <p>
                ...where you can belong to a school club, a gaming group, or a worldwide art community.
                Where just you and a handful of friends can spend time together.
                A place that makes it easy to talk every day and hang out more often.
            </p>
            <button>Download for Mac</button>
            <button id="open-discord-button" >Open Discord in your browser</button>
            {/* <img src={discordians} alt='comcic fable dudes chillin at a counter' /> */}
        </div>
    );
};

export default Content;