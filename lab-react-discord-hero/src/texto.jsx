
import Discord from "./discord.jsx";

const style = {
    textAlign: "left",
    fontWeight: "bold",
    marginRight: "200px",
    marginTop: "90px",
    marginBottom: "50px"
    
}

const negro = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    width: "400px",
    fontSize: "1.2em",
    padding: "20px"

}

const styleBtn = {
    display: "flex",
    flexDirection: "column"
}

function Texto () {

    return (
        <div style={style}>
            <h1 style={{fontSize: "3em"}}>IMAGINE A PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a </p> <p>worldwide art community. Where just you and a handaful of </p> <p> friends can spend time together. Aplace thah makes it easy to </p><p> talk every day and Hanf out more often</p>
            <div>
                 <section style={styleBtn}><button id="blanco">Download for Mac</button><button style={negro}>Open Discord in your browser</button></section>
                <section><Discord /> </section>
                
            </div>
           
           
        </div>
    )
}

export default Texto