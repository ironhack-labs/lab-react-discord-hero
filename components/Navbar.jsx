import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"
            alt="Discord Logo"
          />
        </li>

        <li>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
            alt="Menu Icon"
          />
        </li>
      </ul>
    </nav>
  );
}
