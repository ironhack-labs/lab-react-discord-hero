import './Botones.css'

function Botones(props) {
  return (
    <div id="buttons">
      <button style={{backgroundColor: props.bg, color: props.textColor}}>{props.text}</button>
    </div>
  );
}

export default Botones;
