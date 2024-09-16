
import MainSectionInfo from './MainSectionInfo.jsx'
import backImg from "../assets/discord-background.png"

const styleMainDiv = {
  display: "flex",
  alignItems: "center",
  height:"100vh",
  width:"100vw",
  backgroundImage: `url("${backImg}")`,
  backgroundPosition:"bottom right",
  backgroundRepeat: "no-repeat"
}

function MainSection(){
  return (
    <div style={styleMainDiv}>
      <MainSectionInfo />
      
    </div>
  )
}
export default MainSection