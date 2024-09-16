import imagenDiscord from '../assets/logo_discord.png';
function Section1() {
  return (
    <section>
      <img src={imagenDiscord} alt="logo-discord" />
      <div id="despleglable">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Section1;
