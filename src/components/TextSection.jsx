const HeadingStyles = {
    fontFamily: "Poppins, sans-serif",
    color: "white",
    textAlign: "left",
    fontSize: "50px",
    lineHeight: "0.9",
    marginTop: "50px"
}

const ParaStyles = {
    fontFamily: "Roboto, sans-serif",
    color: "white",
    lineHeight: "1.5",
    fontSize: "14px"
}

const sectionStyles = {
    width: "400px"
}

function TextSection() {
  return (
    <section style={sectionStyles}>
      <h1 style={HeadingStyles}>IMAGINE A PLACE...</h1>
      <p style = {ParaStyles}>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place tha tmaek sit easy to talk every day and hang out more
        often.
      </p>
    </section>
  );
}

export default TextSection;
