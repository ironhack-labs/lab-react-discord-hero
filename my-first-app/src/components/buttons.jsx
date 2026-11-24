import "./buttons.css"

function Button ({content, bgColor, color}) {
  let btnStyle = {backgroundColor: `${bgColor}`, color: `${color}`}
  return (
    <div className="Buttons">
    <button style={btnStyle} className="Button">{content}</button>
    </div>
  )
}

export default Button