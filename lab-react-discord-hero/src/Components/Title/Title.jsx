import './Title.css'

const Title = (props) => {
    const text = props.text
    const paragraph = props.paragraph

    return (
        <>
            <h1>{text}</h1>
            <p>{paragraph}</p>
        </>

    )
}

export default Title