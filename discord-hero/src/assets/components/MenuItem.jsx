function MenuItem(props) {

  return (
    <li className="menu-item d-flex align-items-center">
      {props.children}
    </li>
  );
}

export default MenuItem;