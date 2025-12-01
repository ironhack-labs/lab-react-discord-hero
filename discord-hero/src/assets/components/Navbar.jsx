function Navbar(props) {
    return (
        <nav className="navbar d-flex justify-content-between p-3">
            {props.children}
        </nav>
    );
}

export default Navbar;