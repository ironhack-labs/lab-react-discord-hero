import Discord from "./discord.jsx";
import Menu from "./menu.jsx";

function Header() {
  return (
    <header className="headings">
      <Discord />
      <Menu />
    </header>
  );
}

export default Header;