import Buttons from './comonents/Buttons'

function Hero(props) {

    return (
        <>
            <img src={background} alt="background" />;
            <h1></h1>
            <p>{children}</p>
            <Buttons />
        </>
    )
}

export default Hero;