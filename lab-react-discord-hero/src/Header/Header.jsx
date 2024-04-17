import "./Header.css";

export default function Header() {
  return (
    <nav className="navBar">
      <img
        className="logo"
        alt="logo"
        src="./src/assets/discord-logo-white.png"
      />
      <img className="menu" alt="menu" src="./src/assets/menu-icon.png" />
    </nav>
  );
}
