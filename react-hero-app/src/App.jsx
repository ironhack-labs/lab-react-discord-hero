import './App.css';



const heading = <h1> React is cool! </h1>;


function App() {
  return (
    <div className="App">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group or a
        worldwide art community. Where just you and a handful of
        friends can spend time together. A place that makes it easy to
        talk every day and hang out more often.
      </p>
      <div className="buttons">
        <button className="btn-light">Download for Mac</button>
        <button className="btn-dark">Open discord in your browser</button>
      </div>
        <img src="src\assets\discord-background.png" alt="discord background" />
    </div>
  );
}

export default App;