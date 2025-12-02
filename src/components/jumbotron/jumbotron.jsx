
import './jumbotron.css';

function Jumbotron({background, height, children}){
    return(
        <div 
        
        className="justify-content-center e align-items-center jumbotron d-flex flex-column position-relative"
        style={{
            ...(background && {backgroundImage: `url(${background}) `}), 
            minHeight: height || '100vh'
            }}
            >
                {children}
        </div>
    )
}

export default Jumbotron;