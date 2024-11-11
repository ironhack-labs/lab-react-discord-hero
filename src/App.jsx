import "./App.css";

import Button1 from "../components/Button1.jsx";
import Button2 from "../components/Button2.jsx";
import Navbar from "../components/Navbar.jsx";

function App() {
  return (
  <>
      <Navbar />
      <section className='hero'>
      <h1>
        IMAGINE A PLACE...
      </h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to
      talk every day and hang out more often.</p>
      <Button1 />
      <Button2 />
    </section>
  </>
  );
}


export default App;