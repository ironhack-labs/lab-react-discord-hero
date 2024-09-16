const styles = {
  height:"20px",
  display:"flex",
  justifyContent:"space-between",
  padding:"20px"
};

function NavBar() {
  return (
    <nav style={styles}>
      <img src="./src/assets/discord-logo-white.png" alt="Discord Logo" />
      <img src="./src/assets/menu-icon.png" alt="Menu" />
    </nav>
  );
}

export default NavBar;
