import discordLogo from '../assets/discord-logo-white.png';
function Navbar() {
    return (
      <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#5865F2' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={discordLogo} alt="Discord Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h1 style={{ color: 'white', margin: 0 }}></h1>
        </div>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>
          ☰
        </button>
      </nav>
    );
  }
  
  export default Navbar;