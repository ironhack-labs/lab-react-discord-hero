

function HeroSection() {
  return (
    <div style={{ backgroundColor: '#5865F2', color: 'white', textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '900', fontSize: '3rem' }}>IMAGINE A PLACE...</h1>
      <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: '1.2rem', lineHeight: '1.5', marginTop: '1rem' }}>
        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ margin: '0.5rem', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '5px', border: 'none', backgroundColor: 'white', color: '#5865F2', cursor: 'pointer' }}>
          Download for Mac
        </button>
        <button style={{ margin: '0.5rem', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '5px', border: 'none', backgroundColor: '#23272A', color: 'white', cursor: 'pointer' }}>
          Open Discord in your browser
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
