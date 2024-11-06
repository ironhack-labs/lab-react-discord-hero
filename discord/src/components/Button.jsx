import "./Button.css";

function Button(props) {
	return (
		<a href={props.url} className={props.setClass} >
			{props.text}
		</a>
	);
}

export default Button;
