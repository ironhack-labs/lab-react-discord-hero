import imageThree from './assets/discord-background.png'

function Footer(){

    const width = 500;

    return(
        <div className="footer">
            <div className='btn'>
                <button type='submit' className='btnOne'>Download for Mac</button>
                <button type='submit' className='btnTwo'>Open Discord in your browser</button>
            </div>
            <div className='footerImg'>
                <img src={imageThree} alt="image" width={width}></img>
            </div>
        </div>
    );
}

export default Footer