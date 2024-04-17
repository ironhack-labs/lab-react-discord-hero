const NavBar = () => {
  return (
    <nav className="bg-custom-blue ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src/assets/react1.png" className="h-8" alt="Logo" />
        </a>

        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src/assets/react2.png" className="h-8" alt="menu" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
