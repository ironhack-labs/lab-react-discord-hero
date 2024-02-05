import splashIMG from "../assets/discord-background.png";
import './SplashImage.css';

function SplashImage() {
    return(
        <div className="image-container">
            <img src={splashIMG} alt="discord background" className="image" />
        </div>
    )
}

export default SplashImage;