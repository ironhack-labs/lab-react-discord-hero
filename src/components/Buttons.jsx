const SectionStyles = {
    display: "flex",
    flexDirection: "column",
    width: "400px",
}

const ButtonOne = {
    width: "fit-content",
    padding: "10px",
    margin: "10px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "50px",
    border: "none"
}

const ButtonTwo = {
    width: "fit-content",
    padding: "10px",
    margin: "10px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "50px",
    border: "none"
}
function Buttons() {
  return (
    <section style={SectionStyles}>
      <button style={ButtonOne}>Download for Mac</button>
      <button style={ButtonTwo}>Open Discord in your browser</button>
    </section>
  );
}

export default Buttons;
