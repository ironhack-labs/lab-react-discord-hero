function Menu(props){
  return (
    <div className="menu d-flex">
      <ul className="p-0 m-0 justify-content-around">
        {props.children}
      </ul>
    </div>
  );
}

export default Menu;