import heroImage from "../assets/discord-background.png"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">IMAGINE A PLACE...</h1>
        <p className="hero-body-text">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="hero-section-images">
        <div className="hero-button">
          <button className="hero-section-button-white">
            Download for Mac
          </button>
          <button className="hero-section-button-black">
            Open Discord in your browser
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Discord Hero" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
