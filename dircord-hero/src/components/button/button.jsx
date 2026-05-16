function Button({ color, text }) {
  const buttonStyle = {
    backgroundColor: color,
    color: color === "white" ? "black" : "white",
  };
  return (
    <div>
      <button style={buttonStyle}>{text}</button>
    </div>
  );
}

export default Button;
