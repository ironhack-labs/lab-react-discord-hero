import "./Hero.css"

const Hero = () => {
    return (
        <div className="main">
            <header div className="navBar" >
                <img src="./../src/assets/discord-logo-white.png" className="logo" ></img>
                <img src="./../src/assets/menu-icon.png" className="icon"></img>
            </header>
            <div className="content">
                <article className="banner">
                    <h1>Imagine a place...</h1>
                    <p>
                        ...where you can belong school, a gaming group, or a worldwide art community.
                        Where just you and a handful  of friends can spend time together. A place that
                        makes it easy to talk every day and hang out more often.
                    </p>
                    <button className="download">Download for Mac</button>
                    <button className="Open">Open Discord in your browser</button>
                </article>
                <figure>
                    <img src="./../src/assets/discord-background.png" className="background-figure"></img>
                </figure>
            </div>
        </div >
    )
}

export default Hero