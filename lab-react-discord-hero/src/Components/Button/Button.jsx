import './Button.css'

const Button = (props) => {
    const text = props.text

    return (
        <p className='button'>{text}</p>
    )
}

export default Bu