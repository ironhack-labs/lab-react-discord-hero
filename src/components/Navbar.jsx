import "./Navbar.css"
const Navbar = ({ logoImg, menuImg }) => {
  return (
    <nav>
      <img src={logoImg} className="logo"/>
      <img src={menuImg} className="menu"/>
    </nav>
  );
};
export default Navbar;
