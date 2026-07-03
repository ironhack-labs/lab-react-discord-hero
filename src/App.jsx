import './App.css';

function App() {
  const logo =
    'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png';
  const menu =
    'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png';
  const bg =
    'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png';

  return (
    <div className="App">
      <header className="site-header">
        <img src={logo} alt="Discord logo" className="logo" />
        <img src={menu} alt="menu" className="menu" />
      </header>

      <main className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>IMAGINE A PLACE</h1>
            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>

            <div className="cta">
              <button className="btn primary">Download for Windows</button>
              <button className="btn outline">
                Open Discord in your browser
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
