import "./MyButton.css";

export const MyButton = ({
  text,
  color = "white",
  backgroundColor = "#23272A",
  width = "25%",
}) => {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor,
    width: width,
  };

  return (
    <div className="my-button" style={buttonStyle}>
      {text}
    </div>
  );
};
