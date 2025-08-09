
function header({logo, menu}) {
  return (
    <header>
        <img src={logo} alt="discord Logo" id="logo"/>
        <img src={menu} alt="burger menu" id="menu"/>
    </header>
  );
};

export default header