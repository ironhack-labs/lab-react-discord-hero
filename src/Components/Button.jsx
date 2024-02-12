import './Button.css'

function Button (props){
    return (
        <>
        <button className={props.color}>
            {props.text}
        </button>
        </>
    )
}

export default Button;