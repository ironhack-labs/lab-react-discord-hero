const stylesWhite = {
  border:"none",
  paddingLeft:"20px",
  paddingRight:"20px",
  margin:"5px",
  borderRadius:"155px",
  padding:"10px",
  heigth:"30px",
  backgroundColour:"white",
  colour:"black"
}
const stylesBlack = {
  border:"none",
  paddingLeft:"20px",
  paddingRight:"20px",
  margin:"5px",
  borderRadius:"155px",
  padding:"10px",
  heigth:"30px",
  colour:"white",
  backgroundColour:"black"
}
function Links() {
  return (
    <>
    <a href="#Downloads">
      <button style={stylesWhite}>Download for Mac</button>
    </a><br />
    <a href="#WebDiscord">
      <button style={stylesBlack}>Open Discord in your browser</button>
    </a>
    </>
  )
}

export default Links
