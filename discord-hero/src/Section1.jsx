import Links from "./Links"
import PageInfo from "./PageInfo"
import BackgroundImage from "./BackgroundImage"

const styles = {
color:"white",
fontFamily:"roboto",
margin:"30px",
}

function Section1 () {

  return(
  <section style={styles}>
  <PageInfo />
  <Links />
  <BackgroundImage />
  </section>
  )

}

export default Section1