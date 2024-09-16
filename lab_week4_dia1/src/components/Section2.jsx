import imagenPrincipal from "../assets/imagen_principal.png";
function Section2() {
  return (
    <section id="principal-box">
      <h1>IMAGINATE A PLACE...</h1>
      <p>...Where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a hamdful of friends can spend time together. A place that makes it easy to talk every day and hang out more often</p>
      <button id="download">Download for Mac</button>
      <button id="open-discord">Open Discord in your browser</button>
      <img src={imagenPrincipal} alt="" />
    </section>
  );
}

export default Section2;
