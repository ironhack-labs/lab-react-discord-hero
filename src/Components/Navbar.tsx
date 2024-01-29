import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        className="logo"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"
        alt="logo"
      />
      <img
        className="ham-menu"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
        alt="ham menu"
      />
    </div>
  );
};

export default Navbar;
