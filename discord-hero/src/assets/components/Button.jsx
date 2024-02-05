import './Button.css'

const Button = (promps) =>{
    const link = promps.link
    const text = promps.text

    return (
        <a href={link}>{text}</a>
    )
}

export default Button