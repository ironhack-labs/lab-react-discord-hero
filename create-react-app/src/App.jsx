// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Discord</div>
        <div className="menu-icon">☰</div>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="buttons">
            <button className="download-btn">Download for Mac</button>
            <button className="browser-btn">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="image">
          <img src="/src/assets/image.png" alt="image" />
        </div>
      </main>
    </div>
  );
}

export default App;
