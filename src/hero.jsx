import './hero.css';

function Hero() {
  return (
    <main className='content'>
        <h1 className='content-title'>IMAGINE A PLACE...</h1>
        <p className='content-text'>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hangout more often.</p>
        <ul className='btnList'>
            <li><a href='' className='btn primary'>Download for Mac</a></li>
            <li><a href='' className='btn secondary'>Open Discord in your browser</a></li>
        </ul>
        
    </main>
  );
}

export default Hero;