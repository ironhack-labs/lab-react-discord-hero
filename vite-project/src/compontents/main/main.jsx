import mainImg from "../../assets/discord-background.png"
import "./main.css"
export default function Main(){
    return(
    <div>

        <h1>IMAGINE A PLACE...</h1>

        <p>blblblb Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolorum nostrum odit, ad sed molestiae vitae rem explicabo reprehenderit facilis architecto non, cupiditate, doloremque eum animi? Aliquam eveniet laboriosam harum!</p>
        <div class='heroImgContainer'>
            
            <img src={mainImg} alt="" />
            
        </div>
    </div>
    );
}
