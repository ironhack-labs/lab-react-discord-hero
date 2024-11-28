import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/src/assets/images/discord-logo-white.png"
          alt="Discord Logo"
        />
      </div>
      <div className="menu-icon">
        <span>
          <img src="/src/assets/images/menu-icon.png" />
        </span>{" "}
        {/* Menu icon */}
      </div>
    </header>
  );
};

export default Header;
