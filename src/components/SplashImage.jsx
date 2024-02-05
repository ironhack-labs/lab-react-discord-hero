import splashIMG from "../assets/discord-background.png";
import './SplashImage.css';

function SplashImage() {
    return(
        <div className="splash-image">
            <img src={splashIMG} alt="discord background" />
        </div>
    )
}

export default SplashImage;