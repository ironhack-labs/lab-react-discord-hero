import "./buttons.css"

function Buttons ({ text1, text2 }) {
    return (
        <div className="buttons">
            <button className="button1">{text1}</button>
            <button className="button2">{text2}</button>
        </div>
    )
}

export default Buttons