import MainHeading from './MainHeading.jsx'
import BodyText from './BodyText.jsx'
import ButtonBlack from './ButtonBlack.jsx'
import ButtonWhite from './ButtonWhite.jsx'



const styleMainSection = {
  textAlign:"left",
  width: "50%",
  
}

function MainSectionInfo(){
  return (
    <div style={styleMainSection}>
      <MainHeading />
      <BodyText />
      <ButtonWhite />
      <ButtonBlack />

    </div>
  )
}

export default MainSectionInfo