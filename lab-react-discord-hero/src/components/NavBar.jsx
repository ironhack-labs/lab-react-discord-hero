
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

const styleNav = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  display: "flex",
  justifyContent: "space-between"
}

function NavBar(){
  return (
    <nav style={styleNav}>
      <Logo />
      <Menu />
    </nav>
  )
}

export default NavBar