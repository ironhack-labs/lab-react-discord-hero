import './title.css'

function Title({ className = '', text}) {
    return(
        <h1 className="title">{text}</h1>
    );
}

export default Title;