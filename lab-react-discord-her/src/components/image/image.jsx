import "./image.css"

function Image () {

    const srcImage = "/src/assets/images/discord-background.png"
    return (
        <div className="image">
            <img src= {srcImage}/>
        </div>
    )
}
export default Image