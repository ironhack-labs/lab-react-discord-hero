import './../Button/Button.css'
const Button = (props) => {
    const link = props.link
    const text = props.text
    return (
        <a href={link} className='Button'>{text}</a>
    )
}
export default Button 