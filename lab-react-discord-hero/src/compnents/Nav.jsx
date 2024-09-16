import logo from '../assets/discord-logo-white.png'
import menu from '../assets/menu-icon.png'
function Nav() {
  return (
    <>
      <div className="nav">
        <img style={{ width: '100px' }} src={logo} alt="" />
        <img
          style={{
            width: '32px',
          }}
          src={menu}
          alt=""
        />
      </div>
    </>
  )
}

export default Nav
