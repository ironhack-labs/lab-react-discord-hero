import './App.css';


function App() {
  return (
    <div
      className="App hero-section"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(90deg, #5865f2 60%, #23272a 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Overlay escuro para contraste do texto */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(30,33,42,0.82) 0%, rgba(30,33,42,0.60) 60%, rgba(35,39,42,0.10) 100%)',
          zIndex: 1,
        }}
      ></div>
      {/* Imagem ilustrativa à esquerda */}
      <img
        src="/src/assets/discord-background.png"
        alt="Discord Hero Illustration"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '100%',
          maxHeight: '100vh',
          zIndex: 2,
          minWidth: 320,
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px 48px 0 48px',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <img
          src="/src/assets/discord-logo-white.png"
          alt="Discord Logo"
          style={{ height: 40 }}
        />
        <img
          src="/src/assets/menu-icon.png"
          alt="Menu Icon"
          style={{ height: 32 }}
        />
      </header>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: 40,
          bottom: 40,
          zIndex: 3,
          maxWidth: 380,
          minWidth: 260,
          background: 'rgba(30,33,42,0.72)',
          borderRadius: 18,
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
          padding: '32px 28px 28px 28px',
          textAlign: 'left',
        }}
      >
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '1.5rem',
            margin: '0 0 16px 0',
            letterSpacing: '-1px',
            lineHeight: 1.1,
            textShadow: '0 4px 16px rgba(0,0,0,0.32)',
            color: 'white',
          }}
        >
          IMAGINE A PLACE...
        </h1>
        <p
          style={{
            maxWidth: 320,
            fontSize: '0.98rem',
            marginBottom: 20,
            fontWeight: 400,
            lineHeight: 1.5,
            textShadow: '0 2px 8px rgba(0,0,0,0.32)',
            color: 'white',
          }}
        >
          ...where you can belong to a school club, a gaming group, or a worldwide art community.<br />
          Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            style={{
              background: 'white',
              color: '#23272a',
              border: 'none',
              borderRadius: 40,
              padding: '10px 18px',
              fontSize: '0.98rem',
              fontWeight: 500,
              fontFamily: 'Roboto, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s',
            }}
          >
            Download for Mac
          </button>
          <button
            style={{
              background: '#23272a',
              color: 'white',
              border: 'none',
              borderRadius: 40,
              padding: '10px 18px',
              fontSize: '0.98rem',
              fontWeight: 500,
              fontFamily: 'Roboto, sans-serif',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s',
            }}
          >
            Open Discord in your browser
          </button>
        </div>
      </main>
      {/* Responsividade para telas pequenas */}
      <style>{`
        @media (max-width: 900px) {
          .App.hero-section main {
            padding-left: 32px !important;
            max-width: 90vw !important;
          }
          .App.hero-section img[alt="Discord Hero Illustration"] {
            height: 40vw !important;
            min-width: 180px !important;
            object-fit: cover !important;
          }
        }
        @media (max-width: 600px) {
          .App.hero-section header {
            padding: 24px 16px 0 16px !important;
          }
          .App.hero-section main {
            padding-left: 16px !important;
            max-width: 98vw !important;
          }
          .App.hero-section h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
