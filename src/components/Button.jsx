import "../components/Button.css"

function Button(props) {
    return(
        <div>
            <button className={`button ${props.color}`}>{props.text}</button>
        </div>
    )
}

export default Button;