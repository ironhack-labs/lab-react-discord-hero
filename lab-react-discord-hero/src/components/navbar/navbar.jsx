import './navbar.css';

function Navbar({ logo, menu }) {
    return (
        <div className="navbar">
            <div className="logo" style={{ backgroundImage: `url(${logo})`}}></div>
            <div className="menu" style={{ backgroundImage: `url(${menu})`}}></div>
        </div>
    );
}

export default Navbar;