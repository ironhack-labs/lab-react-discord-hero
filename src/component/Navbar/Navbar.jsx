import discord from '../../assets/images/discord.png';
import dropDown from '../../assets/images/dropDown.png';

function Navbar() {
  return (
    <nav>
      <img src={discord} alt="logo" />
      <img src={dropDown} alt="dropDown" />
    </nav>
  );
}

export default Navbar;