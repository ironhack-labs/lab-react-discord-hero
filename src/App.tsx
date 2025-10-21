import './App.css'
import discordLogo from '/src/assets/discord-logo-white.png'
import menuItem from '/src/assets/menu-icon.png'
import background from '/src/assets/discord-background.png'

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<img src={discordLogo} height={'30vh'} />
				<img src={menuItem} height={'30vh'} />
			</div>
			<div className="text">
				<h1>
					IMAGINE A <br />
					PLACE...
				</h1>
				<p>
					...where you can belong to a school club, a gaming group, or a
					worldwide art community. Where just you and a handful of friends can
					spend time
				</p>
			</div>
			<div className="button1">Download for Mac</div>
			<div className="button2">Open Discor in you browser</div>
			<div className="backgroundImage">
				<img src={background} />
			</div>
		</div>
	)
}

export default App
