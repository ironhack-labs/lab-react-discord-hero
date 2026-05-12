import "./content.css"

function Content ({ title, text }) {
    return (
        <div>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="paragraph">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Content