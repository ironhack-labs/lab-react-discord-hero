import React from 'react'
import lastImage from "../assets/discord-background.png"
const styleLastButton={backgroundColor:"black", color:"white", width:"300px", margin:"20px", borderRadius:"20px", padding:"10px",fontSize:"20px"}
const Discord = () => {
  return (
    <div  className='discord'>
      <h1 style={{fontSize:"60px",margin:"20px", fontFamily:"'Poppins', sans-serif"}}>Imagine a Place...</h1>
      <div className='text'>
         <p style={{fontFamily:"'Roboto', sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Soluta, similique doloribus asperiores quos consectetur officiis quia quae. 
         Cum recusandae inventore itaque, nesciunt, minus, ab eligendi saepe laboriosam similique quo fuga!. 
        </p>
      </div>
      <button style={{width:"200px", margin:"20px", borderRadius:"20px", padding:"10px",fontSize:"15px"}}> Download for Mac </button>
      <button style={styleLastButton}>open Discord in your browser</button>
      <img src={lastImage} style={{width:"600px", height:"400px", marginLeft:"650px",marginTop:"240px",position:"absolute"}}/>
    </div>
  )
}

export default Discord