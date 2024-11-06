import "./Navbar.css"
import Logo from "./Logo";
import Hamburger from "./Hamburger";

function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <Hamburger />
        </nav>
    )
}

export default Navbar;