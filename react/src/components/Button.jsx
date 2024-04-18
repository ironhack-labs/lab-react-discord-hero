function Button({ color, backgroundColor, innerText }) {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <div id="btn-div">
      <button className="btn" style={buttonStyle}>
        {innerText}
      </button>
    </div>
  );
}

export default Button;
