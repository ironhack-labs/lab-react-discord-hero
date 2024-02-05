import './Title.css'

const Title = (props) => {

    const title = props.title
    const text = props.text

    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>

    )
}

export default Title