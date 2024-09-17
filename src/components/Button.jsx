import '../App.css';
import '../index.css';
// eslint-disable-next-line react/prop-types
export default function Button({textColor, color,label}) {
  console.log(color)
  return <button style={{backgroundColor: color, color: textColor}} type="button">{label}</button>
}
