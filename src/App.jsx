
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';

import characters from './assets/images/bgs/discord-background.png';

function App() {
  return (
    <>
    <Navbar />
    <Jumbotron>
      <div className="text-center text-white px-4">
        <h1 className='display-3 fw-bold mb-4'>
          IMAGINE A PLACE...
        </h1>
        <p className="lead mb-4" style={{ maxWidth: '600px' }}>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can spend time together.
        </p>
        <div className="d-flex gap-3 justify-center flex-wrap">
          <button className="btn btn-light btn-lg rounded-pill px-4">
            Download for Mac
          </button>
          <button className="btn btn-dark btn-lg rounded-pill px-4">
            Open Discord in your browser
          </button>
        </div>
      </div>
      <img src={characters}
      alt="Characters"
      className='"characters-img'
      />
    </Jumbotron>
    </>
  );
}

export default App