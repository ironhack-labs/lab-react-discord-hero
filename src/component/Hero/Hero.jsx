import team from '../../assets/images/team.png';

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-text">
          <h1>IMAGINE A PLACE...</h1>
          <p>Where you can belong to a school club, a gaming group, 
            or a worldwide art community. Where just you and a handful 
            of friends can spend time together. A place that makes it easy 
            to talk every day and hang out more often.</p>
          <div className="buttons">
            <button className="mac-button">Open for Mac</button>
            <button className="browser-button">Open in your browser</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={team} alt="Hero Team" />
        </div>
      </section>
    );
  }
  

export default Hero;


